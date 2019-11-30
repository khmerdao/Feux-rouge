

function rmvfeux_red()
{
    document.querySelector("#rouge").innerHTML =
    `
    `;
}

function rmvfeux_orange()
{
    document.querySelector("#orange").innerHTML =
    `
    `;
}

function rmvfeux_vert()
{
    document.querySelector("#vert").innerHTML =
    `
    `;
}



function feux_red()
{
    document.querySelector("#rouge").innerHTML =
    `
    <img src="./feurouge.jpg"></div>
    `;
    setTimeout(rmvfeux_red, 8000); // voyant pendant 2sec
}

function feux_orange()
{
    document.querySelector("#orange").innerHTML =
    `
    <img src="./feuorange.jpg"></div>
    `;
    setTimeout(rmvfeux_orange, 4000); // orange voyant pendant 2s
}

function feux_vert()
{
    document.querySelector("#vert").innerHTML =
    `
    <img src="./feuvert.jpg"></div>
    `;
    setTimeout(rmvfeux_vert, 2000); // vert voyant pendant 2sec
}

function feuxnormale()
{
    feux_vert();
    feux_orange();
    feux_red();
    setTimeout(feuxnormale, 10000); // rajoute 2sec de visibilité au feu rouge
}

function feuxpieton()
{
    feux_orange();
    feux_red();
}

let button  = document.querySelector("#bouton1").addEventListener("click", feuxpieton);
feuxnormale();