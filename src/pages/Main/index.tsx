import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type SectorType = {
  id: number;
  name: string;
};

const defaultFormValue = {
  name: "",
  company: "",
  email: "",
  servicePrice: 0,
  description: "",
};

function Main() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState(defaultFormValue);
  const [sectors, setSectors] = useState<SectorType[]>([]);
  const [selectedSector, setSelectedSector] = useState<SectorType | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api-list.pedagogico.cubos.academy/sectors"
        );
        const data = await res.json();

        setSectors(data);
      } catch {
        setSectors([]);
      }
    })();
  }, []);

  function handleFillForm(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleReset() {
    setForm(defaultFormValue);
    setSelectedSector(null);
  }

  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    const currentSelectedSector = sectors.find(
      (sector) => sector.id === +event.target.value
    );

    if (!currentSelectedSector) {
      setSelectedSector(null);
      return;
    }

    setSelectedSector(currentSelectedSector);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!selectedSector) {
      alert("Selecione um setor!");
      return;
    }

    if (
      !form.company ||
      !form.description ||
      !form.email ||
      !form.name ||
      !form.servicePrice
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    const data = {
      ...form,
      servicePrice: +form.servicePrice,
      sector: selectedSector,
    };

    setSuccess(true);
    console.log(data);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {!success ? (
          <>
            <h1>Inscrição Online</h1>
            <p>
              <b>Bem-vindo</b> ao formulário de inscrição para participar da
              licitação.
            </p>
            <p>
              Estamos muito satisfeitos em receber o seu interesse em fazer
              negócios conosco. Agradecemos pelo tempo e esforço que você
              dedicará para preencher este formulário de inscrição. Sabemos que
              há muitos detalhes e informações que devem ser fornecidos, mas
              este é o primeiro passo importante para estabelecermos uma
              parceria de sucesso.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nome do empreendedor</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleFillForm}
                />
              </div>

              <div>
                <label htmlFor="company">Nome da empresa</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={form.company}
                  onChange={handleFillForm}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleFillForm}
                />
              </div>

              <div>
                <label htmlFor="servicePrice">Valor do serviço</label>
                <input
                  type="number"
                  name="servicePrice"
                  id="servicePrice"
                  value={form.servicePrice}
                  onChange={handleFillForm}
                />
              </div>

              <div>
                <label htmlFor="sector">Setor que trabalham</label>
                <select
                  id="sector"
                  onChange={handleChangeSelect}
                  value={selectedSector?.id || ""}
                >
                  <option value="">Selecione um setor</option>
                  {sectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {sector.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="description">
                  Deixe aqui referências de outras empresas
                </label>
                <textarea
                  rows={10}
                  name="description"
                  id="description"
                  value={form.description}
                  onChange={handleFillForm}
                ></textarea>
              </div>

              <button className="btn-success">Enviar</button>
              <button
                className="btn-warning"
                type="reset"
                onClick={handleReset}
              >
                Limpar
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Parabéns {form.name}!</h1>
            <p>
              <b>Parabéns!</b> Sua inscrição para a licitação do governo foi
              preenchida com sucesso. Gostaríamos de agradecer por dedicar seu
              tempo e esforço para fornecer todas as informações necessárias.
              <br />
              Sabemos que preencher formulários de inscrição pode ser cansativo,
              mas é uma etapa crucial para estabelecermos uma parceria de
              sucesso. Sua inscrição será avaliada com atenção e cuidado.
              <br />
              Estamos ansiosos para colaborar com você e sua empresa na
              licitação do governo. Se precisar de assistência ou tiver alguma
              dúvida, não hesite em entrar em contato conosco.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
