function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}


const urlJSON = "https://raw.githubusercontent.com/RenanPls/projeto-acopiara-dados/refs/heads/main/artesoes.json";

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
            imagem.src = artesa.foto;
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

window.onload = carregarArtesaos;