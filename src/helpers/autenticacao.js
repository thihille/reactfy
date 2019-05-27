import { extractQueryString } from './utils';

class Autenticacao {
  constructor() {}
  verificar = () => {
    const recuperarToken = this.tentativaRecuperacao();

    if (!recuperarToken) {
      this.spotifyWebsite();
    } else {
      const validade = this.expiracaoDoToken(recuperarToken);

      this.limparToken();

      if (!recuperarToken.authorizationTime) {
        const now = new Date();
        now.setSeconds(now.getSeconds() + parseInt(recuperarToken.expires_in));

        localStorage.setItem(
          "authorization",
          JSON.stringify({
            ...recuperarToken,
            authorizationTime: now
          })
        );
      }

      if (!validade) {
        this.spotifyWebsite();
      }
    }
  };

  expiracaoDoToken = recuperarToken => {
    const now = new Date();
    const expire = new Date();

    expire.setSeconds(expire.getSeconds() + parseInt(recuperarToken.expires_in));
    if(recuperarToken.authorizationTime){
      const expireDate = new Date(new Date(new Date(recuperarToken.authorizationTime)))
    }else{
      const expireDate = expire;
    }

    const validade = now <= expireDate;
    return validade;
  };

  spotifyWebsite = () => {
    const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNTS_BASE_URL;
    const clientId = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;

    window.location.href = `${baseUrl}authorize?client_id=${clientId}&response_type=token&redirect_uri=${
      process.env.PUBLIC_URL
    }`;
  };

  limparToken = () => {
    if (window.location.href.split("#").length > 1) {
      history.pushState(
        "initial",
        document.title,
        window.location.href.split("#")[0]
      );
    }
  };

  tentativaRecuperacao = () => {
    if (window.location.hash.split("#")[1]){
      return extractQueryString(search);
    }else{
      const authorization = localStorage.getItem("authorization");
      return JSON.parse(authorization);
    }
  };
}
export default Autenticacao;