var qtHomens = document.getElementById('qtHomens')
var qtMulheres = document.getElementById('qtMulheres')
var qtCriancas = document.getElementById('qtCriancas')

var bovina = document.getElementById('bovina')
var frango = document.getElementById('frango')
var refrigerante = document.getElementById('linguica')
var refrigerante = document.getElementById('refrigerante')
var cerveja = document.getElementById('cerveja')

var img = document.getElementById('img')
var resultado = document.getElementsByClassName('results')[0]

function calcular(){

    // Calculando quantidade de carne bovina
    var hBovina = (500 * qtHomens.value) / 1000
    var mBovina = (300 * qtMulheres.value) / 1000
    var cBovina = (200 * qtCriancas.value) / 1000
    var totBovina = hBovina + mBovina + cBovina
    bovina.innerHTML = totBovina.toFixed(1)
    
    // Calculando quantidade de carne de frango
    var hFrango = (200 * qtHomens.value) / 1000
    var mFrango = (200 * qtMulheres.value) / 1000
    var cFrango = (100 * qtCriancas.value) / 1000
    var totFrango = hFrango + mFrango + cFrango
    frango.innerHTML = totFrango.toFixed(1)

    // Calculando quantidade de linguiça
    var hlinguica = (200 * qtHomens.value) / 1000
    var mlinguica = (200 * qtMulheres.value) / 1000
    var clinguica = (200 * qtCriancas.value) / 1000
    var totlinguica = hlinguica + mlinguica + clinguica
    linguica.innerHTML = totlinguica.toFixed(1)

    // Calculando quantidade de refrigerante
    var hrefrigerante = (300 * qtHomens.value) / 1000
    var mrefrigerante = (400 * qtMulheres.value) / 1000
    var crefrigerante = (200 * qtCriancas.value) / 1000
    var totrefrigerante = hrefrigerante + mrefrigerante + crefrigerante
    refrigerante.innerHTML = totrefrigerante.toFixed(1)

    // Calculando quantidade de cerveja
    var hcerveja = (800 * qtHomens.value) / 1000
    var mcerveja = (500 * qtMulheres.value) / 1000
    var ccerveja = 0
    var totcerveja = hcerveja + mcerveja + ccerveja
    cerveja.innerHTML = totcerveja.toFixed(1)

    img.classList.add("invisible")
    resultado.classList.remove("invisible")
}