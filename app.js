const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const reposRoutes = require("./routes/repoRoutes");

app.use("/api", reposRoutes);

app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Projetos!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
