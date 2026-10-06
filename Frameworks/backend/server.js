import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((erro) => {
    console.error("Erro ao conectar ao MongoDB:", erro);
  });


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    projeto: "SobrouVendi",
    status: "API funcionando",
    desafio: "TODO - ALUNO: conectar MongoDB e implementar regras."
  });
});

/*app.get("/api/produtos", async (req, res) => {
  // TODO - ALUNO: trocar resposta temporária por consulta no MongoDB.
  res.json([
    { id: 1, nome: "Notebook Pro 15", categoria: "Informática", preco: 2499.90, estoque: 8 },
    { id: 2, nome: "Mouse sem fio", categoria: "Informática", preco: 89.90, estoque: 25 }
  ]);
});*/

app.get("/api/produtos", async (req, res) => {
  try {
    const produtos = await Product.find({ ativo: true });

    res.json(produtos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: "Erro ao buscar produtos."
    });
  }
});
/*Acrescentar ao Codigo esta Lógica para agora cadastrar produto no site*/
app.post("/api/produtos", async (req, res) => {
  try {
    const produto = await Product.create(req.body);
    res.status(201).json(produto);
  } catch (erro) {
    console.error(erro);
    res.status(400).json({
      erro: "Erro ao cadastrar produto."
    });
  }
}); /*Até Aqui */

/*Acrescentar ao Codigo esta Lógica para cadastrar Editar produtos no site*/

app.get("/api/produtos/:id", async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({
        erro: "Produto não encontrado."
      });
    }
    res.json(produto);
  } catch (erro) {
    console.error("Erro ao buscar produto:", erro);
    res.status(400).json({
      erro: "Erro ao buscar produto."
    });
  }
});


/* Editar produto */


app.put("/api/produtos/:id", async (req, res) => {
  try {
    const produtoAtualizado = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!produtoAtualizado) {
      return res.status(404).json({
        erro: "Produto não encontrado."
      });
    }
    res.json(produtoAtualizado);
  } catch (erro) {
    console.error("Erro ao atualizar produto:", erro);
    res.status(400).json({
      erro: "Erro ao atualizar produto."
    });
  }
});



/* ============================================================
   DESAFIO 4 — DELETE DE PRODUTOS
   TODO - ALUNO:
   1. Criar a rota DELETE /api/produtos/:id
   2. Recuperar o id com req.params
   3. Excluir com Product.findByIdAndDelete(id)
   4. Retornar 404 se o produto não existir
   5. Retornar uma mensagem de sucesso
   ============================================================ */

// ESCREVA A ROTA DELETE AQUI



app.post("/api/auth/login", async (req, res) => {
  // TODO - ALUNO: buscar usuário, comparar senha com bcrypt e emitir JWT.
  res.status(501).json({ erro: "Login ainda não implementado pelo aluno." });
});

app.post("/api/auth/register", async (req, res) => {
  // TODO - ALUNO: validar dados, criptografar senha e salvar usuário.
  res.status(501).json({ erro: "Cadastro ainda não implementado pelo aluno." });
});

app.post("/api/pedidos", async (req, res) => {
  // TODO - ALUNO: criar pedido, validar estoque e atualizar produtos.
  res.status(501).json({ erro: "Pedidos ainda não implementados." });
});

app.listen(PORT, () => {
  console.log(`SobrouVendi API: http://localhost:${PORT}`);
});

// TODO - ALUNO: conectar MongoDB com mongoose.connect(process.env.MONGODB_URI).
