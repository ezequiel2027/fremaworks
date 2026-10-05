/* =========================================================
   FRAMEWORKS 2 — DESAFIO 4 COMPLETO
   Edição de Produtos (UPDATE)

   ETAPA 1  - Importar useParams
   ETAPA 2  - Criar o Link Editar com p._id
   ETAPA 3  - Criar a rota /admin/produtos/editar/:id
   ETAPA 4  - Recuperar o ID com useParams
   ETAPA 5  - Criar os estados do formulário
   ETAPA 6  - Criar a navegação com useNavigate
   ETAPA 7  - Buscar produto com GET por ID
   ETAPA 8  - Atualizar produto com PUT
   ETAPA 9  - Atualizar o estado do React com map()
   ETAPA 10 - Formulário de edição
   ========================================================= */

/* ==================== DESAFIO 4 — ETAPA 1 ====================
   Importar useParams para recuperar o ID da URL.
================================================================ */
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
          {produtos.slice(0, 4).map(p => <ProductCard key={p._id || p.id} produto={p} />)}
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
        {produtos.map(p => <ProductCard key={p._id || p.id} produto={p} />)}
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

<Link to="/admin/produtos/novo" className="btn primary">
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
            {/* ==================== DESAFIO 4 — ETAPA 2 ====================
                O botão Editar envia o _id do produto para a URL.
            =============================================================== */}
            <span>
              <Link
                className="mini"
                to={`/admin/produtos/editar/${p._id}`}
              >
                Editar
              </Link>

              <button
                className="mini danger"
                onClick={() => alert("TODO - próximo desafio: excluir produto")}
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
   /*ETAPA 4*/
   /*Rota editar Produtos*/
/* =========================================================
   DESAFIO 4 — EDITAR PRODUTO
   Implementação completa, organizada por etapas.
   ========================================================= */
function EditarProduto({ setProdutos }) {

  /* ==================== ETAPA 4 ====================
     Recuperar o ID do produto que veio pela URL.
  ================================================== */
  const { id } = useParams();

  /* ==================== ETAPA 5 ====================
     Estados que armazenam os valores do formulário.
  ================================================== */
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  /* ==================== ETAPA 6 ====================
     Navegação usada após salvar ou cancelar.
  ================================================== */
  const navigate = useNavigate();

  /* ==================== ETAPA 7 ====================
     Buscar o produto pelo ID e preencher o formulário.
  ================================================== */
  useEffect(() => {
    async function carregarProduto() {
      try {
        const resposta = await fetch(
          `http://localhost:3000/api/produtos/${id}`
        );

        if (!resposta.ok) {
          alert("Produto não encontrado.");
          navigate("/admin");
          return;
        }

        const produto = await resposta.json();

        setNome(produto.nome);
        setDescricao(produto.descricao || "");
        setCategoria(produto.categoria);
        setPreco(produto.preco);
        setEstoque(produto.estoque);

      } catch (erro) {
        console.error("Erro ao carregar produto:", erro);
        alert("Erro ao conectar com a API.");
      }
    }

    carregarProduto();
  }, [id, navigate]);

  /* ==================== ETAPA 8 ====================
     Enviar as alterações para a API usando PUT.
  ================================================== */
  async function salvarAlteracoes() {
    try {
      const produtoAtualizado = {
        nome,
        descricao,
        categoria,
        preco: Number(preco),
        estoque: Number(estoque),
        ativo: true
      };

      const resposta = await fetch(
        `http://localhost:3000/api/produtos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(produtoAtualizado)
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        alert(dados.erro || "Erro ao atualizar produto.");
        return;
      }

      /* ==================== ETAPA 9 ====================
         Atualizar a lista que está no estado do React.
      ================================================== */
      setProdutos((produtosAtuais) =>
        produtosAtuais.map((produto) =>
          produto._id === dados._id ? dados : produto
        )
      );

      alert("Produto atualizado com sucesso!");
      navigate("/admin");

    } catch (erro) {
      console.error("Erro ao atualizar produto:", erro);
      alert("Erro ao conectar com a API.");
    }
  }

  /* ==================== ETAPA 10 ====================
     Formulário de edição.
  ================================================== */
  return (
    <section className="section">
      <div className="form-card">
        <span className="eyebrow">ADMINISTRAÇÃO</span>
        <h1>Editar produto</h1>

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
          <button
            className="btn"
            type="button"
            onClick={() => navigate("/admin")}
          >
            Cancelar
          </button>

          <button
            className="btn primary"
            type="button"
            onClick={salvarAlteracoes}
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </section>
  );
}
/* FIM DO DESAFIO 4 — EDITAR PRODUTO */

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

          {/* ==================== DESAFIO 4 — ETAPA 3 ====================
              Criar a rota dinâmica de edição.
          =============================================================== */}
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
