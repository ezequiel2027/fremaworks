# Meu Site Vendas — Desafio 4: DELETE no Backend

## Aulas 3 e 4

Este projeto dá continuidade ao site de vendas desenvolvido nas aulas anteriores.

## O que já está funcionando
- React + Vite no frontend
- Express no backend
- conexão com MongoDB usando Mongoose
- GET `/api/produtos` — listar produtos
- POST `/api/produtos` — cadastrar produtos
- GET `/api/produtos/:id` — buscar produto por ID
- PUT `/api/produtos/:id` — atualizar produto

## Desafio desta aula
Implementar **somente no backend** a exclusão de produtos.

No arquivo `backend/server.js`, procure por:

`DESAFIO 4 — DELETE DE PRODUTOS — AULAS 3 E 4`

Você deverá construir a rota `DELETE /api/produtos/:id` utilizando os conceitos estudados em aula.

### Conceitos que serão utilizados
- `app.delete()`
- `req.params`
- ID do produto
- `Product.findByIdAndDelete()`
- status 404
- resposta JSON

## Importante
O botão **Excluir** do painel administrativo ainda mostra uma mensagem de TODO. **Não implemente o frontend nesta etapa.** O botão será conectado à API nas Aulas 5 e 6.

## Instalação
Abra dois terminais.

### Terminal 1 — Backend
```powershell
cd backend
npm install
npm run dev
```

### Terminal 2 — Frontend
```powershell
cd frontend
npm install
npm run dev
```

## Teste do backend
Antes de iniciar o desafio, confirme que a listagem funciona acessando:

`http://localhost:3000/api/produtos`

Depois de implementar o DELETE, teste a exclusão utilizando uma ferramenta capaz de enviar requisições HTTP DELETE. Ao consultar novamente a listagem, o produto excluído não deverá aparecer.

## Resultado esperado ao final
CRUD no backend:

- Create → POST ✔
- Read → GET ✔
- Update → PUT ✔
- Delete → DELETE — **você implementará nesta aula**
