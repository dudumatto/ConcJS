let contador = 0;
setInterval(() => {
    contador++;
    document.getElementById("timer").innerText = `Tempo na página: ${contador}s`;
}, 1000);

//executa o codigo quando a pagina carregar e accessa o local storage(WEB storage)
window.onload = function () {
    const dados = JSON.parse(localStorage.getItem("cadastroCliente"));

    if (dados) {
        document.getElementById("nome").value = dados.nome;
        document.getElementById("modelo").value = dados.modelo;

        mostrarCampoExtra();

        if (dados.cor) {
            document.getElementById("cor").value = dados.cor;
        }
    }
};

function mostrarCampoExtra() {
    const modelo = document.getElementById("modelo").value;
    const extra = document.getElementById("extra-field");
    extra.style.display = (modelo === "carro" || modelo === "moto") ? "block" : "none";
}

function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;

    const dados = {
        nome: nome,
        modelo: modelo,
        cor: cor
    };

    localStorage.setItem("compraCliente", JSON.stringify(dados));
    console.log("Dados salvos:");
    console.log(dados);
    alert("Formulário enviado! Dados salvos no localStorage.");
}

const carros = [
    {
        titulo: "Carro Esportivo",
        imagem: "data:image/jpeg;base64,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",
        preco: 30000
    },
    {
        titulo: "SUV Luxo",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Myp8xQ666ie4Df4uxwoAb0ncWbs83ujEYw&s",
        preco: 45000
    },
    {
        titulo: "Sedan Executivo",
        imagem: "https://revistause.com.br/wp-content/uploads/2023/06/Porche-1.jpg",
        preco: 28000
    },
    {
        titulo: "Carro Popular",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUpQPFHZ1H7Vv4d9VwSjmBnViFBpWP2nLGQ&s",
        preco: 15000
    }
];

async function carregarCarros() {
    const lista = document.getElementById("car-list");
    lista.innerHTML = "";

    const cotacao = await buscarCotacaoDolar(); 

    carros.forEach(c => {
     const precoEmReais = cotacao ? (c.preco * cotacao).toFixed(2) : "Erro";

        lista.innerHTML += `
        <div class="car-card">
            <h3>${c.titulo}</h3>
            <img src="${c.imagem}" width="200" />
            <p>Preço: USD ${c.preco}</p>
            <p><strong>Convertido: BRL ${precoEmReais}</strong></p>
        </div>
        `;
    });
}


const motos = [
    {
        titulo: "Moto Esportiva",
        imagem: "https://imgs.search.brave.com/_mg1YWbBZyIE800TOWe80e7KqeM7_kSyaZkHPpHe2Gk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdW1t/aXRtb2JpbGlkYWRl/LmVzdGFkYW8uY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA4L3VubmFt/ZWQtMzIuanBn",
        preco: 12000
    },
    {
        titulo: "Moto Custom",
        imagem: "https://imgs.search.brave.com/zjuOZ2XZYv-gMvFO0EpjRomqFfQQeIUUVOZxs7JEO64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzIyLzUzLzU3/LzM2MF9GXzIyNTM1/Nzg1X2l5cmhVUkVB/V3VNVUcxdk1jMUZR/Z25zaTNPN2xYbGU2/LmpwZw",
        preco: 15000
    },
    {
        titulo: "Moto Trail",
        imagem: "https://imgs.search.brave.com/FRDhGPQVEOVZc9q-q3bOn1OSHLHD9QPy34v1kXbBYMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2Jp/bGlkYWRlLmVzdGFk/YW8uY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L01HXzY4NzMuanBn/LndlYnA",
        preco: 10000
    },
    {
        titulo: "Moto Urbana",
        imagem: "https://imgs.search.brave.com/2DTfddO4n3YYs321qUdYPgnOqAzclXYz_9q-o9aFiXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pdGFs/aWthbXgudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzE5/ODQ0OTY5LTUwMC1h/dXRvP3Y9NjM4OTg1/OTgxMDA4MTMwMDAw/JndpZHRoPTUwMCZo/ZWlnaHQ9YXV0byZh/c3BlY3Q9dHJ1ZQ",
        preco: 8000
    }
];

async function carregarMotos() {
    const lista = document.getElementById("mot-list");
    lista.innerHTML = "";

    const cotacao = await buscarCotacaoDolar();
    console.log("Cotação atual:", cotacao);

    motos.forEach(m => {
        const precoEmReais = cotacao ? (m.preco * cotacao).toFixed(2) : "Erro";

        lista.innerHTML += `
            <div class="car-card">
                <h3>${m.titulo}</h3>
                <img src="${m.imagem}" width="200" />
                <p>Preço: USD ${m.preco}</p>
                <p><strong>Convertido: BRL ${precoEmReais}</strong></p>
            </div>
        `;
    });
}

async function buscarCotacaoDolar() {
    const url = "http://apilayer.net/api/live?access_key=c4bc240befeeeb4eedc66b41a74f6931&currencies=BRL&source=USD&format=1";

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!dados.success) {
            console.error("Erro da API:", dados.error);
            return null;
        }

        return dados.quotes["USD" + "BRL"]; // evita interpretador confundir
    } catch (erro) {
        console.error("Erro ao buscar cotação:", erro);
        return null;
    }
}
