/*import { Link, Route, Routes, useNavigate } from "react-router-dom";*/
import { Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";


const produtos = [
  { id: 1, nome: "Notebook Pro 15", categoria: "Informática", preco: 2499.90, estoque: 8, emoji: "💻" },
  { id: 2, nome: "Mouse sem fio", categoria: "Informática", preco: 89.90, estoque: 25, emoji: "🖱️" },
  { id: 3, nome: "Teclado mecânico", categoria: "Informática", preco: 199.90, estoque: 12, emoji: "⌨️" },
  { id: 4, nome: "Fone Bluetooth", categoria: "Eletrônicos", preco: 149.90, estoque: 18, emoji: "🎧" },
  { id: 5, nome: "Smartphone", categoria: "Eletrônicos", preco: 1299.90, estoque: 6, emoji: "📱" },
  { id: 6, nome: "Monitor 24", categoria: "Informática", preco: 899.90, estoque: 10, emoji: "🖥️" }
];

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

function Home({produtos}) { /*Primeira*/

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

function Produtos({produtos}) { 
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

function Admin({produtos}) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  return (
    <section className="section">
      <div className="admin-head">
        <div><span className="eyebrow">ADMINISTRAÇÃO</span><h1>Painel administrativo</h1></div>
        {/*<button className="btn primary" onClick={() => alert("TODO - ALUNO: abrir formulário de produto")}>+ Novo produto</button>*/}
        {/*<button className="btn primary" onClick={() => setMostrarFormulario(!mostrarFormulario)}> {mostrarFormulario ? "Fechar formulário" : "+ Novo produto"} </button>*/}
        <Link to="/admin/produtos/novo"className="btn primary"
>
  + Novo produto
</Link>      
      </div>   
            
      {mostrarFormulario && (
  <div className="form-card">
    <h2>Cadastrar novo produto</h2>
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
    <button className="btn primary">
      Cadastrar produto
    </button>
  </div>
)}     

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
           <span>
              <Link
                className="mini"
                to={`/admin/produtos/editar/${p._id}`}
                >
                 Editar
                </Link>
                
                <button className="mini danger"
                onClick={() => alert("DESAFIO 4: implemente a exclusão do produto")}
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
{/*Nova Lógica para abrir nova aba e acrecentar proditos*/}
function NovoProduto({setProdutos}) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const navigate = useNavigate();

  async function cadastrarProduto() {
    const novoProduto = {
      nome,
      descricao,
      categoria,
      preco: Number(preco),
      estoque: Number(estoque),
      ativo: true
    };

    // QUESTÃO 2 — 3,0 pontos
    // COMPLETE AQUI: envie novoProduto para a API usando POST.
    // URL: http://localhost:3000/api/produtos
    // Inclua Content-Type application/json e JSON.stringify(novoProduto).
    // Depois, converta a resposta para JSON, atualize setProdutos
    // e navegue para /admin após o cadastro.
    console.log("QUESTÃO 2: produto preparado, mas ainda não enviado.", novoProduto);
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
function EditarProduto({setProdutos}){
  // QUESTÃO 3 — 2,0 pontos
  // COMPLETE AQUI: obtenha o parâmetro :id da URL usando useParams().
  const id = "";
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarProduto() {
      try {
        // COMPLETE AQUI (continuação da QUESTÃO 3):
        // faça um GET para http://localhost:3000/api/produtos/:id
        // e converta a resposta para JSON.
        // Substitua as duas linhas temporárias abaixo pela solução.
        const resposta = { ok: false };
        const produto = {};
        console.log("Produto encontrado:", produto);
        setNome(produto.nome);
        setDescricao(produto.descricao);
        setCategoria(produto.categoria);
        setPreco(produto.preco);
        setEstoque(produto.estoque);
      } catch (erro) {
        console.error(
          "Erro ao carregar produto:",
          erro
        );
      }
    }
    carregarProduto();
  }, [id]);

  async function salvarAlteracoes() {
    const produtoAtualizado = {
      nome,
      descricao,
      categoria,
      preco: Number(preco),
      estoque: Number(estoque),
      ativo: true
    };

    // QUESTÃO 4 — 2,0 pontos
    // COMPLETE AQUI: envie produtoAtualizado para
    // http://localhost:3000/api/produtos/:id usando PUT.
    // Use Content-Type application/json e JSON.stringify(produtoAtualizado).
    // Após receber os dados atualizados, sincronize o estado com setProdutos
    // e retorne para /admin usando navigate.
    console.log("QUESTÃO 4: alterações preparadas, mas ainda não enviadas.", produtoAtualizado);
  }
  return (
    <section className="section">
      <div className="form-card">
        <span className="eyebrow">
          ADMINISTRAÇÃO
        </span>
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
          <Link
            to="/admin"
            className="btn"
          >
            Cancelar
          </Link>
          <button
           className="btn primary"
           onClick={salvarAlteracoes}
           >               
                   Salvar Alteração
           </button>
        </div>
      </div>
    </section>
  );
}/*Editar Produtos*/

function App() { {/*acrescentar Esta Lógica*/}
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function carregarProdutos() {
      try {
        // QUESTÃO 1 — 2,0 pontos
        // COMPLETE AQUI: faça um GET em http://localhost:3000/api/produtos,
        // converta a resposta para JSON e atualize o estado produtos.
        // Dica: use fetch, resposta.json() e setProdutos.
        console.log("QUESTÃO 1: carregamento de produtos ainda não implementado.");
      } catch (erro) {
        console.error(
          "Erro ao carregar produtos:",
          erro
        );
      }
    }
    carregarProdutos();
  }, []); {/*___________________Até Aqui__________________ */}
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home produtos={produtos}/>}/>{/*acrescentar Esta Lógica*/}
          {/*<Route path="/" element={<Home/>}/> Tirar este */}
          <Route path="/produtos" element={<Produtos produtos={produtos}/>}/>
          <Route path="/produto/:id" element={<Produto/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/admin" element={<Admin produtos={produtos}/>}/>
          <Route path="/admin/produtos/novo"element={<NovoProduto setProdutos={setProdutos} />}/>
          {/*Rota tela de Editar produtos*/}
          <Route path="/admin/produtos/editar/:id"element={<EditarProduto setProdutos={setProdutos} />}
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
