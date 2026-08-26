import { db, ref, push, onValue, remove } from "./firebase.js";

const form = document.getElementById("adicionar");
const nome = document.getElementById("nome");
const artista = document.getElementById("artista");
const descricao = document.getElementById("descricao");
const mural = document.getElementById("mural");
const quantidade = document.getElementById("quantidade");

form.addEventListener("click", async () => {

    if (
        nome.value.trim() === "" ||
        artista.value.trim() === "" ||
        descricao.value.trim() === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    try {

        await push(ref(db, "musicas"), {
            nome: nome.value,
            artista: artista.value,
            descricao: descricao.value
        });

        nome.value = "";
        artista.value = "";
        descricao.value = "";

        alert("Música adicionada!");

    } catch (erro) {

        console.error(erro);
        alert("Erro ao salvar no Firebase!");

    }
});


onValue(ref(db, "musicas"), (snapshot) => {

    mural.innerHTML = "";

    quantidade.textContent = snapshot.size;

    if (!snapshot.exists()) {
        mural.innerHTML = "<p>Nenhuma música adicionada ainda 🎵</p>";
        return;
    }

    snapshot.forEach((item) => {

        const musica = item.val();

        mural.innerHTML += `
            <div class="card">

                <h3>Nome: ${musica.nome}</h3>

                <p>Artista: ${musica.artista}</p>

                <p>Descrição: ${musica.descricao}</p>

                <button class="excluir"
                    onclick="excluir('${item.key}')">
                    🗑️ Excluir
                </button>

            </div>
        `;
    });
});


window.excluir = async (id) => {

    try {

        await remove(ref(db, "musicas/" + id));

    } catch (erro) {

        console.error(erro);
        alert("Erro ao excluir!");
    }
};