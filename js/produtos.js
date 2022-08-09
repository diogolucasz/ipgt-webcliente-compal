let produtos = [
    {
        nome        : "SUMMO",
        img         : "img/prodsummo.png",
        descricao   : "Esta obra da Frutologia é feita apenas e só com uma das melhores criações da natureza: a fruta, eterna de fonte de inspiração, prazer e saúde. Apenas e só fruta, meticulosamente escolhida, cuidadosamente espremida, carinhosamente combinada. A ela apenas se juntou o conhecimento e arte da Frutologia para um resultado singular e inesquecível. O novo Compal Summo é 100% de fruta espremida, nada mais para além da fruta.",
        destino     : "summo.html"
    },
    {
        nome        : "VITAL",
        img         : "img/prodvital.png",   
        descricao   : "Mantendo o sabor único das suas combinações de fruta, agora os néctares Compal Vital são ainda mais naturais. Após muita pesquisa e experimentação conseguimos adoçar esta gama recorrendo apenas ao extrato da folha de Stevia, uma planta originária da América do Sul com uma extraordinária capacidade adoçante que torna possível criarmos néctares deliciosos. Compal Vital é a primeira gama de bebidas em Portugal com metade das calorias e adoçada só com Stevia, um ingrediente 100% natural.",
        destino     : "#"
    },
    {
        nome        : "VEGGIE",
        img         : "img/prodvegan.png",
        descricao   : "A gama Compal Veggie define a revolução da Frutologia, que junta vegetais e fruta numa combinação perfeita entre sabor e prazer. Disponível nas variedades Beterraba/Maçã, Cenoura/Maçã/Gengibre e Tomate, Compal Veggie oferece-lhe sabores verdadeiramente intensos, sofisticados e surpreendentes. Simples, temperado ou em cocktail é um sumo de sabor fresco, ideal para saborear pela manhã ou ao fim da tarde.",
        destino     : "#"
    },
];

produtos.forEach(function (produto){
    let cartao = `
    <div class="col-12 col-md-4">
        <div class="card bg-light text-center text-dark mb-4">
            <img src="${produto.img}" class="card-img-top" alt="Imagem do Produto">
            <div class="card-body">
                <h5 class="card-title font-escuroverde">${produto.nome}</h5>
                <p class="card-text text-left font-escuroverde">${produto.descricao}</p>
                <a href="${produto.destino}" class="btn text-center text-light bg-escuroverde mt-2"><i class="fas fa-compress"></i> Descobre mais aqui</a>
            </div>
        </div>
    </div>
    `;
    document.getElementById("listaprodutos").innerHTML += cartao;
});