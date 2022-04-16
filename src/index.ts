import express, { NextFunction, Request, Response } from "express";
import { usersRoute } from "./routes/users.route";
import { statusRoute } from "./routes/status.route";
import { errorHandler } from "./middlewares/error-handler.middleware";

const app = express();
const port = 5000;

// Configuração da aplicação
// Middleware para entender que a entrada é um json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração da rota
app.use(usersRoute);
app.use(statusRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server running on port " + port + " 🔥🔥🔥🔥🔥");
});