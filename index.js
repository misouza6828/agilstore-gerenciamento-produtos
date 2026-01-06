console.log("AGILSTORE INICIADA");

const fs = require("fs");
const readline = require("readline");

const FILE = "produtos.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* =========================
   UTILIDADES
========================= */

function carregarProdutos() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

function salvarProdutos(produtos) {
  fs.writeFileSync(FILE, JSON.stringify(produtos, null, 2));
}

function gerarId(produtos) {
  return produtos.length ? produtos[produtos.length - 1].id + 1 : 1;
}

/* =========================
   MENU
========================= */

function menu() {
  console.log(`
📦 AGILSTORE - GERENCIAMENTO DE PRODUTOS
1 - Adicionar produto
2 - Listar produtos
3 - Atualizar produto
4 - Excluir produto
5 - Buscar produto
0 - Sair
`);
  rl.question("Escolha uma opção: ", opcao => {
    switch (opcao) {
      case "1": adicionar(); break;
      case "2": listar(); break;
      case "3": atualizar(); break;
      case "4": excluir(); break;
      case "5": buscar(); break;
      case "0": rl.close(); break;
      default:
        console.log("❌ Opção inválida.");
        menu();
    }
  });
}

/* =========================
   ADICIONAR
========================= */

function adicionar() {
  const produtos = carregarProdutos();

  rl.question("Nome: ", nome => {
    rl.question("Categoria: ", categoria => {
      rl.question("Quantidade: ", qtd => {
        rl.question("Preço: ", preco => {
          produtos.push({
            id: gerarId(produtos),
            nome,
            categoria,
            quantidade: Number(qtd),
            preco: Number(preco)
          });

          salvarProdutos(produtos);
          console.log("✅ Produto adicionado com sucesso!");
          menu();
        });
      });
    });
  });
}

/* =========================
   LISTAR
========================= */

function listar() {
  const produtos = carregarProdutos();
  console.table(produtos);
  menu();
}

/* =========================
   ATUALIZAR
========================= */

function atualizar() {
  const produtos = carregarProdutos();

  rl.question("ID do produto: ", id => {
    const produto = produtos.find(p => p.id == id);

    if (!produto) {
      console.log("❌ Produto não encontrado.");
      return menu();
    }

    rl.question(`Novo nome (${produto.nome}): `, nome => {
      rl.question(`Nova categoria (${produto.categoria}): `, categoria => {
        rl.question(`Nova quantidade (${produto.quantidade}): `, qtd => {
          rl.question(`Novo preço (${produto.preco}): `, preco => {

            produto.nome = nome || produto.nome;
            produto.categoria = categoria || produto.categoria;
            produto.quantidade = qtd ? Number(qtd) : produto.quantidade;
            produto.preco = preco ? Number(preco) : produto.preco;

            salvarProdutos(produtos);
            console.log("✅ Produto atualizado com sucesso!");
            menu();
          });
        });
      });
    });
  });
}

/* =========================
   EXCLUIR
========================= */

function excluir() {
  let produtos = carregarProdutos();

  rl.question("ID do produto para excluir: ", id => {
    const existe = produtos.some(p => p.id == id);

    if (!existe) {
      console.log("❌ Produto não encontrado.");
      return menu();
    }

    produtos = produtos.filter(p => p.id != id);
    salvarProdutos(produtos);
    console.log("🗑️ Produto removido com sucesso!");
    menu();
  });
}

/* =========================
   BUSCAR
========================= */

function buscar() {
  const produtos = carregarProdutos();

  rl.question("Buscar por ID ou nome: ", termo => {
    const resultado = produtos.filter(p =>
      p.id == termo ||
      p.nome.toLowerCase().includes(termo.toLowerCase())
    );

    if (resultado.length === 0) {
      console.log("🔍 Nenhum produto encontrado.");
    } else {
      console.table(resultado);
    }
    menu();
  });
}

/* =========================
   INICIAR
========================= */

menu();

2