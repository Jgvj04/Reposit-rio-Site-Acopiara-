function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}


const urlJSON = "https://raw.githubusercontent.com/RenanPls/projeto-acopiara-dados/main/artesoes.json";
const urlBaseImagens = "https://raw.githubusercontent.com/RenanPls/projeto-acopiara-dados/main/";
const urlProdutosJSON = "https://raw.githubusercontent.com/RenanPls/projeto-acopiara-dados/refs/heads/main/produtos.json";


async function carregarProdutos() {
    try {
        const resposta = await fetch(urlProdutosJSON);
        const produtos = await resposta.json();
        
        const carousel = document.getElementById('carousel-produtos');
        carousel.innerHTML = ""; 

        produtos.forEach(item => {
            
            const card = document.createElement('div');
            card.className = 'product_card';
            
            
            card.onclick = () => {
                console.log(`Abrir detalhes do produto: ${item.nome}`);
            };

            
            const imagem = document.createElement('img');
            imagem.src = urlBaseImagens + item.foto;
            imagem.className = 'product_img';
            imagem.alt = item.nome;

            
            const info = document.createElement('div');
            info.className = 'product_info';

            const titulo = document.createElement('h3');
            titulo.className = 'card_product_name'; 
            titulo.textContent = item.nome;

            const desc = document.createElement('p');
            desc.className = 'p-card';
            desc.textContent = item.descricao;

            
            info.appendChild(titulo);
            info.appendChild(desc);
            
            card.appendChild(imagem);
            card.appendChild(info);
            
            carousel.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao carregar catálogo:", erro);
    }
}


async function carregarArtesaos() {
    try {
        const resposta = await fetch(urlJSON);
        const artesaos = await resposta.json();
        
        const containerPai = document.getElementById('grid-artesaos');
        containerPai.innerHTML = ""; 

        artesaos.forEach(artesa => {
           
            const card = document.createElement('div');
            card.className = 'block';

          
            const containerFoto = document.createElement('div');
            containerFoto.className = 'foto-circular';

            const imagem = document.createElement('img');
            imagem.src = urlBaseImagens + artesa.foto; 
            imagem.alt = `Foto de ${artesa.nome}`;
            imagem.className = 'block_icon';

            containerFoto.appendChild(imagem);

     
            const containerInfo = document.createElement('div');
            containerInfo.className = 'block_content';

      
            const nome = document.createElement('h3');
            nome.className = 'h3';
            nome.textContent = artesa.nome;

          
            const descricao = document.createElement('p');
            descricao.className = 'p-card';
            descricao.textContent = artesa.descricao; 

        
            containerInfo.appendChild(nome);
            containerInfo.appendChild(descricao);

            card.appendChild(containerFoto);
            card.appendChild(containerInfo);
            
         
            containerPai.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro na carga dos dados:", erro);
    }
}



window.onload = () => {
    carregarArtesaos();
    carregarProdutos();
};