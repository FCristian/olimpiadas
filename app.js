// console.log(dados)

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    if (!campoPesquisa){
        section.innerHTML = `
            <p>Digite algo para buscar</p>
            `
        return;
    }

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div> 
            `
        }        
    };

    if (!resultados){
        section.innerHTML = `
            Nada foi encontrado   
            `
    };
    section.innerHTML = resultados;
    
};