/* =========================================================
   FRAMEWORKS 2 — DESAFIO 4 — ARQUIVO DO ALUNO

   JÁ CONCLUÍDO:
   ETAPA 1 — Importar useParams
   ETAPA 2 — Criar o Link Editar com p._id
   ETAPA 3 — Criar a rota /admin/produtos/editar/:id
   ETAPA 4 — Recuperar o ID com useParams

   PARA FAZER DURANTE A AULA:
   ETAPA 5 — Criar os estados do formulário
   ETAPA 6 — Criar useNavigate
   ETAPA 7 — Buscar o produto com GET por ID
   ETAPA 8 — Descomentar o formulário fornecido
   ETAPA 9 — Criar o PUT para salvar alterações
   ETAPA 10 — Atualizar setProdutos() com map() e voltar ao Admin
   ========================================================= */

import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">MeuSite<span>Vendas</span></Link>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <div className="header-actions">
        <Link to="/login">Entrar</Link>
        <Link className="cart-button" to="/carrinho">🛒 Carrinho <b>0</b></Link>
      </div>
    </header>
  );
}

function ProductCard({ produto }) {
  return (
    <article className="product-card">
      <div className="product-image">{produto.emoji}</div>
      <span className="badge">{produto.categoria}</span>
      <h3>{produto.nome}</h3>
      <p className="price">R$ {produto.preco.toFixed(2).replace(".", ",")}</p>
      <small>{produto.estoque} unidades disponíveis</small>
      <div className="card-actions">
        <Link className="btn secondary" to={`/produto/${produto.id}`}>Ver produto</Link>
        <button className="btn primary" onClick={() => alert("TODO - ALUNO: implementar carrinho")}>Comprar</button>
      </div>
    </article>
  );
}

function Home({ produtos }) {

  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">PROJETO INTEGRADOR • FRAMEWORKS WEB</span>
          <h1>Seu marketplace.<br/><strong>Seu projeto.</strong></h1>
          <p>Uma aplicação de vendas pronta para você aprender desenvolvendo. O desafio é transformar esta base em um e-commerce completo.</p>
          <Link className="btn primary large" to="/produtos">Explorar produtos</Link>
        </div>
        <div className="hero-art">🛍️</div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">DESTAQUES</span><h2>Produtos em destaque</h2></div>
          <Link to="/produtos">Ver todos →</Link>
        </div>
        <div className="product-grid">
          {produtos.slice(0, 4).map(p => <ProductCard key={p.id} produto={p}/>)}
        </div>
      </section>

      <section className="challenge-banner">
        <div><span className="eyebrow">DESAFIO DO ALUNO</span><h2>Este site já está pronto. Agora faça ele funcionar.</h2></div>
        <p>CRUD • MongoDB • API • Login • Carrinho • Pedidos • Estoque • Paginação • Hospedagem</p>
      </section>
    </>
  );
}

function Produtos({ produtos }) { 
  return (
    <section className="section">
      <div className="section-heading">
        <div><span className="eyebrow">CATÁLOGO</span><h2>Todos os produtos</h2></div>
        <input className="search" placeholder="🔎 Buscar produto..." onChange={() => {}} />
      </div>
      <div className="filters">
        <button>Todos</button><button>Informática</button><button>Eletrônicos</button>
        <select><option>Ordenar por</option><option>Menor preço</option><option>Maior preço</option></select>
      </div>
      <div className="product-grid">
        {produtos.map(p => <ProductCard key={p.id} produto={p}/>)}
      </div>
      <div className="pagination">← Anterior &nbsp; <b>1</b> 2 3 4 &nbsp; Próxima →</div>
    </section>
  );
}

function Produto() {
  return (
    <section className="section product-detail">
      <div className="detail-image">💻</div>
      <div>
        <span className="badge">Informática</span>
        <h1>Notebook Pro 15</h1>
        <p className="price big">R$ 2.499,90</p>
        <p>Notebook de demonstração do projeto. Esta tela está pronta para o aluno integrar com a API e o banco de dados.</p>
        <p><b>Estoque:</b> 8 unidades</p>
        <button className="btn primary large" onClick={() => alert("TODO - ALUNO: adicionar ao carrinho")}>Adicionar ao carrinho</button>
      </div>
    </section>
  );
}

function Login() {
  return (
    <section className="form-page">
      <div className="form-card">
        <span className="eyebrow">ÁREA DO CLIENTE</span>
        <h1>Entrar</h1>
        <label>E-mail<input type="email" placeholder="cliente@email.com"/></label>
        <label>Senha<input type="password" placeholder="••••••••"/></label>
        <button className="btn primary large" onClick={() => alert("TODO - ALUNO: autenticar com API/JWT")}>Entrar</button>
        <p>Não possui conta? <Link to="/cadastro">Criar cadastro</Link></p>
      </div>
    </section>
  );
}

function Cadastro() {
  return (
    <section className="form-page">
      <div className="form-card">
        <span className="eyebrow">NOVO CLIENTE</span>
        <h1>Criar conta</h1>
        <label>Nome<input placeholder="Seu nome"/></label>
        <label>E-mail<input type="email" placeholder="voce@email.com"/></label>
        <label>Senha<input type="password" placeholder="••••••••"/></label>
        <button className="btn primary large" onClick={() => alert("TODO - ALUNO: cadastrar usuário no MongoDB")}>Cadastrar</button>
      </div>
    </section>
  );
}

function Carrinho() {
  return (
    <section className="section">
      <span className="eyebrow">COMPRA</span>
      <h1>Seu carrinho</h1>
      <div className="empty-cart">
        <div>🛒</div>
        <h2>Carrinho vazio</h2>
        <p>TODO - ALUNO: implementar carrinho, quantidades, subtotal, frete e total.</p>
        <Link className="btn primary" to="/produtos">Continuar comprando</Link>
      </div>
    </section>
  );
}

function Admin({ produtos }) {
  return (
    <section className="section">
      <div className="admin-head">
        <div><span className="eyebrow">ADMINISTRAÇÃO</span><h1>Painel administrativo</h1></div>

<Link to="/admin/produtos/novo" className="btn primary"
>
  + Novo produto
</Link>      
      </div>    
<div className="stats">
        <div><small>Produtos</small><strong>1.250</strong><span>↑ 12% este mês</span></div>
        <div><small>Pedidos</small><strong>137</strong><span>↑ 8% este mês</span></div>
        <div><small>Clientes</small><strong>482</strong><span>↑ 15% este mês</span></div>
        <div><small>Vendas</small><strong>R$ 28.450</strong><span>↑ 21% este mês</span></div>
      </div>

      <div className="admin-table">
        <div className="table-title"><h2>Produtos</h2><input className="search" placeholder="Pesquisar..."/></div>
        {produtos.slice(0,5).map(p => (
          <div className="row" key={p._id}>
            <span>{p.emoji} <b>{p.nome}</b></span>
            <span>R$ {p.preco.toFixed(2).replace(".", ",")}</span>
            <span>{p.estoque}</span>
            {/* =====================================================
                DESAFIO 4 — ETAPA 2
                substituir SOMENTE
                o botão Editar por um <Link> usando p._id.

                O botão Excluir continua como está.
                ===================================================== */}
            <span>
              <Link
                className="mini"
                to={`/admin/produtos/editar/${p._id}`}
              >
                Editar
              </Link>

              <button
                className="mini danger"
                onClick={() => alert("TODO - ALUNO: excluir produto")}
              >
                Excluir
              </button>
            </span>
          </div>
        ))}
      </div>

      <div className="implementation">
        <h2>O que falta implementar</h2>
        <div className="todo-grid">
          <span>□ CRUD de produtos</span><span>□ MongoDB</span><span>□ Login/JWT</span>
          <span>□ Carrinho</span><span>□ Pedidos</span><span>□ Estoque</span>
          <span>□ Filtros</span><span>□ Paginação</span><span>□ Validações</span>
        </div>
      </div>
    </section>
  );
}
/* Nova lógica para abrir a tela de cadastro de produtos */
function NovoProduto({ setProdutos }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const navigate = useNavigate();

  async function cadastrarProduto() {
  try {
    const novoProduto = {
      nome,
      descricao,
      categoria,
      preco: Number(preco),
      estoque: Number(estoque),
      ativo: true
    };

    const resposta = await fetch(
      "http://localhost:3000/api/produtos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoProduto)
      }
    );

    const dados = await resposta.json();
    if (!resposta.ok) {
  alert("Erro ao cadastrar produto.");
  return;
}

setProdutos((produtosAtuais) => [
  ...produtosAtuais,
  dados
]);

alert("Produto cadastrado com sucesso!");

setNome("");
setDescricao("");
setCategoria("");
setPreco("");
setEstoque("");

navigate("/admin");

    console.log("Resposta da API:", dados);

  } catch (erro) {
    console.error("Erro ao cadastrar produto:", erro);
  }
}

  return (
    <section className="section">
      <div className="form-card">

        <span className="eyebrow">ADMINISTRAÇÃO</span>
        <h1>Cadastrar novo produto</h1>

        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do produto"
          />
        </label>

        <label>
      Descrição
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição do produto"
      />
    </label>

        <label>
          Categoria
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Categoria"
          />
        </label>

        <label>
          Preço
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço"
          />
        </label>

        <label>
          Estoque
          <input
            type="number"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            placeholder="Quantidade em estoque"
          />
        </label>

        <div className="form-actions">

          <Link
            to="/admin"
            className="btn"
          >
            Cancelar
          </Link>

          <button
          className="btn primary"
          onClick={cadastrarProduto}
          >
          Cadastrar produto
          </button>

        </div>

      </div>
    </section>
  );
}
   /*Final da lógica acrecentar produtos*/

   /*Rota editar Produtos*/   
     
    

/* =========================================================
   DESAFIO 4 — COMPONENTE EDITAR PRODUTO
   

   

   
  
   ========================================================= */

/* =========================================================
   DESAFIO 4 — EDITAR PRODUTO
   

   ETAPAS 1 A 4 JÁ CONCLUÍDAS.
   
   ========================================================= */
function EditarProduto({ setProdutos }) {

  /* ==================== ETAPA 4 — CONCLUÍDA ====================
     Recuperar o ID do produto que veio pela URL.
  =============================================================== */
  const { id } = useParams();

  /* ==================== ETAPA 5 ====================
     CRIAR OS ESTADOS DO FORMULÁRIO

     Crie useState para:
     nome, descricao, categoria, preco e estoque.
  ================================================== */

  /* ==================== ETAPA 6 ====================
     CRIAR A NAVEGAÇÃO

     Crie:
     const navigate = useNavigate();
  ================================================== */

  /* ==================== ETAPA 7 ====================
     CARREGAR O PRODUTO PELO ID

     Crie um useEffect que:
     1. faça GET em /api/produtos/${id}
     2. transforme a resposta em JSON
     3. preencha os estados com setNome(), setDescricao(),
        setCategoria(), setPreco() e setEstoque()
  ================================================== */

  /* ==================== ETAPA 8 ====================
     FORMULÁRIO DE EDIÇÃO

     O formulário já está pronto abaixo.
     Quando chegar nesta etapa, remova apenas o comentário
     que envolve o formulário.
  ================================================== */

  /* ==================== ETAPA 9 ====================
     SALVAR AS ALTERAÇÕES

     Crie:
     async function salvarAlteracoes() { ... }

     A função deverá:
     1. montar produtoAtualizado
     2. fazer PUT em /api/produtos/${id}
     3. usar JSON.stringify(produtoAtualizado)
     4. receber a resposta da API
  ================================================== */

  /* ==================== ETAPA 10 ====================
     ATUALIZAR O ESTADO DO REACT

     Dentro de salvarAlteracoes():
     - use setProdutos() com map()
     - substitua somente o produto cujo _id foi atualizado
     - mostre a mensagem de sucesso
     - volte para /admin
  ================================================== */

  return (
    <section className="section">
      <div className="form-card">
        <span className="eyebrow">DESAFIO 4</span>
        <h1>Editar produto</h1>

        <p>
          Etapas 1 a 4 concluídas. Continue acompanhando a aula
          para implementar a edição do produto.
        </p>

        <Link to="/admin" className="btn">
          Voltar ao painel
        </Link>

        {/*
        ==========================================================
        ETAPA 8 — FORMULÁRIO DE EDIÇÃO JÁ FORNECIDO
        DESCOMENTAR SOMENTE QUANDO ORIENTADO
        ==========================================================

        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label>
          Descrição
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>

        <label>
          Categoria
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </label>

        <label>
          Preço
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </label>

        <label>
          Estoque
          <input
            type="number"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
          />
        </label>

        <div className="form-actions">
          <Link to="/admin" className="btn">
            Cancelar
          </Link>

          <button
            className="btn primary"
            onClick={salvarAlteracoes}
          >
            Salvar alterações
          </button>
        </div>

        ==========================================================
        FIM DO FORMULÁRIO
        ==========================================================
        */}
      </div>
    </section>
  );
}
/* FIM DO DESAFIO 4 — ÁREA DO ALUNO */

     
   
function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function carregarProdutos() {
      try {
        const resposta = await fetch(
          "http://localhost:3000/api/produtos"
        );
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (erro) {
        console.error(
          "Erro ao carregar produtos:",
          erro
        );
      }
    }
    carregarProdutos();
  }, []);
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home produtos={produtos} />} />
          
          <Route path="/produtos" element={<Produtos produtos={produtos}/>}/>
          <Route path="/produto/:id" element={<Produto/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/admin" element={<Admin produtos={produtos}/>}/>
          <Route
            path="/admin/produtos/novo"
            element={<NovoProduto setProdutos={setProdutos} />}
          />

          <Route
            path="/admin/produtos/editar/:id"
            element={<EditarProduto setProdutos={setProdutos} />}
          />
        </Routes>
      </main>

      <footer>
        <b>SobrouVendi</b> • Projeto Integrador de Frameworks Web
      </footer>
    </>
  );
}

export default App;
