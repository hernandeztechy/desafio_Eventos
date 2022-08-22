let btnuno = document.getElementById("btn1")
let btndos = document.getElementById("btn2")
let btntres = document.getElementById("btn3")

btnuno.onclick = colorUno
btndos.onclick = colorDos
btntres.onclick = colorTres

btnuno.onmouseover = function(){btnuno.style.backgroundColor='#3d3d3d'}
btnuno.onmouseout = function(){btnuno.style.backgroundColor='#000000'}

btndos.onmouseover = function(){btndos.style.backgroundColor='#3d3d3d'}
btndos.onmouseout = function(){btndos.style.backgroundColor='#000000'}

btntres.onmouseover = function(){btntres.style.backgroundColor='#3d3d3d'}
btntres.onmouseout = function(){btntres.style.backgroundColor='#000000'}

function colorUno()
{
    btnuno.style.backgroundColor='#d31717'
    btndos.style.backgroundColor='#000000'
    btntres.style.backgroundColor='#000000'
}

function colorDos()
{
    btndos.style.backgroundColor='#ffb30f'
    btnuno.style.backgroundColor='#000000'
    btntres.style.backgroundColor='#000000'
}

function colorTres()
{
    btntres.style.backgroundColor='#08af1c'
    btnuno.style.backgroundColor='#000000'
    btndos.style.backgroundColor='#000000'
}
