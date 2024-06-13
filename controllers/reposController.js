const axios = require("axios");

const username = "lucasimonmendes";
const url = `https://api.github.com/users/${username}/repos`;

const listRepos = async (req, res) => {
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os repositórios do GitHub" });
  }
};

module.exports = { listRepos };
