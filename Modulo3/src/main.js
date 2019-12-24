const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
};
umPorSegundo();

import axios from "axios";

const getUserFromGithub = async (user) => {
  try {
    const api = await axios.get(`https://api.github.com/users/${user}`)
    console.log(api.data)

  } catch (error) {
    console.warn("Erro na Requisição")
  }
}
getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");

class Github {
  static getRepositories = async (repo) => {
    try {
      const res = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(res);

    } catch (error) {
      console.log('Repositório não existe');
    }
  }
}

 Github.getRepositories('Rocketseat/academy-facebook-auth');
 Github.getRepositories('Rocketseat/dslkvmskv');

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (error) {
    console.log("Usuário não existe");
  }
};
buscaUsuario("diego3g");
