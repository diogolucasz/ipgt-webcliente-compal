let summo = [
    {
        nome: "<b>Pessego</b>",
        img: "img/pessego.png",
        descricao: "Combinamos diferentes variedades de pêssego e outras frutas com muita paixão e conhecimento para obtermos as receitas mais saborosas",
        ingredientes: "<b>INGREDIENTES:</b> Sumos e polpas de pêssego (50%), Maçã (20%), Pera (15%), Manga (5%), Alperce (5%), Banana (5%)",
        energia: "48Kcal",
        lipidos: "0g",
        acidosgordos: "0g",
        hidratos: "11g",
        acucar: "9,5g",
        fibra: "1,0g",
        proteinas: "0,8g",
        sal: "0g",
    },
    {
        nome: "<b>Frutos Vermelhos</b>",
        img: "img/frutosvermelhos.png",
        descricao: "Combinamos diferentes frutas com muita paixão e conhecimento para obtermos as receitas mais saborosas.",
        ingredientes: "<b>INGREDIENTES:</b> Sumos e polpas de uva tinta (25%), Framboesa (16%), Maçã (16%), Morango (11%), Ameixa (11%), Pera (9%), Banana (6,5%) e Mirtilo (5,5%)",
        energia: "51kcal",
        lipidos: "0g",
        acidosgordos: "0g",
        hidratos: "12g",
        acucar: "10g",
        fibra: "0,7g",
        proteinas: "0,5g",
        sal: "0g",
    },
    {
        nome: "<b>Pera</b>",
        img: "img/pera.png",
        descricao: "Combinamos diferentes variedades de pera e outras frutas com muita paixão e conhecimento para obtermos as receitas mais saborosas.",
        ingredientes: "<b>INGREDIENTES:</b>Sumos e polpas de pera (80%), Uva (13%), Laranja (4%) e Banana (3%).",
        energia: "52kcal",
        lipidos: "0g",
        acidosgordos: "0g",
        hidratos: "12g",
        acucar: "8,7g",
        fibra: "1,9g",
        proteinas: "<0,5g",
        sal: "0g",
    },
];

summo.forEach(function (produto) {
    let cartao = `
    <div class="col-12 col-md-4">
        <div class="card text-center bg-light text-dark mb-4">
            <img src="${produto.img}" class="card-img-top" alt="Imagem do Produto">
            <div class="card-body font-escuroverde">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text">${produto.ingredientes}</p>
                <p>
                    <a class="btn text-center text-light bg-escuroverde" data-toggle="collapse" href="#collapsetabela" role="button" aria-expanded="false" aria-controls="collapsetabela"><i class="fas fa-chevron-down"></i> Tabela Nutricional</a>
                </p>
                <div class="collapse font-escuroverde " id="collapsetabela">
                    <div class="card card-body"> Por cada 100ml
                        <div class="row">
                            <div><b>Energia:</b> </div>
                            <div>${produto.energia}</div>
                        </div>
                        <div class="row">
                            <div><b>Lípidos:</b> </div>
                            <div>${produto.lipidos}</div>
                        </div>
                        <div class="row">
                            <div><b>dos quais acidos gordos:</b> </div>
                            <div>${produto.acidosgordos}</div>
                        </div>
                        <div class="row">
                            <div><b>Hidratos de carbono:</b> </div>
                            <div>${produto.hidratos}</div>
                        </div>
                        <div class="row">
                            <div><b>dos quais açúcares:</b> </div>
                            <div>${produto.acucar}</div>
                        </div>
                        <div class="row">
                            <div><b>Fibra:</b> </div>
                            <div>${produto.fibra}</div>
                        </div>
                        <div class="row">
                            <div><b>Proteínas:</b> </div>
                            <div>${produto.proteinas}</div>
                        </div>
                        <div class="row">
                            <div><b>Sal:</b></div>
                            <div>${produto.sal}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById("listasummo").innerHTML += cartao;
});