



const p = document.querySelector('#paragrafo')

let nome = localStorage.getItem('nome')
let email = localStorage.getItem('email')
let idade = localStorage.getItem('idade')

const olá = ()=> {
    p.innerHTML = `Olá ${nome}, vimos que possui ${idade} anos, logo enviaremos um email para o endereço ${email}.`
}