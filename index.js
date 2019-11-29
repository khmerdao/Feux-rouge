

function rmvfeux_red()
{
    document.querySelector("#rouge").innerHTML =
    `
    `;
}

function feux_orange()
{
    document.querySelector("#orange").innerHTML =
    `
    <img src="./feuorange.jpg"></div>
    `;
    setTimeout(rmvfeux_orange, 2000);
}

function rmvfeux_orange()
{
    document.querySelector("#orange").innerHTML =
    `
    `;
}

function feux_red()
{
    feux_orange();
    document.querySelector("#rouge").className = "pipi";
    document.querySelector("#rouge").innerHTML =
    `
    <img src="./feurouge.jpg"></div>
    `;
    setTimeout(rmvfeux_red, 5000);
}

let button  = document.querySelector("#bouton1");
setTimeout((button.addEventListener("click", feux_red)), 3000); 
