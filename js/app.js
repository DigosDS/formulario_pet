let btn = document.getElementById('btn');
let div = document.getElementById('resultado');
const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

const arrPet = []

function cadastrar() {

    let nomeInput = document.getElementById('nome').value
    let especieInput = document.getElementById('especie').value
    let categoriaInput = document.getElementById('categoria').value
    let pesoInput = document.getElementById('peso').value
    let alturaInput = document.getElementById('altura').value
    let dataInput = document.getElementById('data').value
    let fotoInput = document.getElementById('foto').value

    const pet = {
        nome: nomeInput,
        especie: especieInput,
        categoria: categoriaInput,
        peso: pesoInput,
        altura: alturaInput,
        data: dataInput,
        foto: fotoInput
    }
    arrPet.push(pet)
    imprimir()
    console.log(arrPet); 

}


function imprimir()
{

        div.innerHTML= '';

    for(let i= 0; arrPet.length; i++){

        div.innerHTML += `
        <tr> 
        <th scope="row">${i+1}</th>
        <td>${arrPet[i].nome}</td>
        <td>${arrPet[i].especie}</td>
        <td>${arrPet[i].peso}</td>
        <td>${arrPet[i].altura}</td>
        <td>${arrPet[i].categoria}</td>
        <td>${arrPet[i].data}</td>
        <td>
        <button>Ver foto</button> 
        <dialog>${arrPet[i].foto} <button>Ok</button> </dialog> </td>
        </tr>        
         `
    }
}

btn.addEventListener('click', cadastrar)
