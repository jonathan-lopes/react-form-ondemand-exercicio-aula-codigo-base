import styles from "./styles.module.scss";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <>
          <h1>Inscrição Online</h1>
          <p>
            <b>Bem-vindo</b> ao formulário de inscrição para participar da
            licitação.
          </p>
          <p>
            Estamos muito satisfeitos em receber o seu interesse em fazer
            negócios conosco. Agradecemos pelo tempo e esforço que você dedicará
            para preencher este formulário de inscrição. Sabemos que há muitos
            detalhes e informações que devem ser fornecidos, mas este é o
            primeiro passo importante para estabelecermos uma parceria de
            sucesso.
          </p>
          <form className={styles.form}>
            <div>
              <label htmlFor="name">Nome do empreendedor</label>
              <input type="text" name="name" id="name" />
            </div>

            <div>
              <label htmlFor="company">Nome da empresa</label>
              <input type="text" name="company" id="company" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="servicePrice">Valor do serviço</label>
              <input type="number" name="servicePrice" id="servicePrice" />
            </div>

            <div>
              <label htmlFor="sector">Setor que trabalham</label>
              <select id="sector">
                <option value="">Selecione um setor</option>
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
              ></textarea>
            </div>

            <button className="btn-success">Enviar</button>
            <button className="btn-warning" type="button">
              Limpar
            </button>
          </form>
        </>

        <>
          <h1>Parabéns Daniel!</h1>
          <p>
            <b>Parabéns!</b> Sua inscrição para a licitação do governo foi
            preenchida com sucesso. Gostaríamos de agradecer por dedicar seu
            tempo e esforço para fornecer todas as informações necessárias.
            <br />
            Sabemos que preencher formulários de inscrição pode ser cansativo,
            mas é uma etapa crucial para estabelecermos uma parceria de sucesso.
            Sua inscrição será avaliada com atenção e cuidado.
            <br />
            Estamos ansiosos para colaborar com você e sua empresa na licitação
            do governo. Se precisar de assistência ou tiver alguma dúvida, não
            hesite em entrar em contato conosco.
          </p>
        </>
      </div>
    </main>
  );
}

export default Main;
