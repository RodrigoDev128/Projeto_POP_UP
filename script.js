

const form = document.querySelector('form')

const nomeinp = document.querySelector('#nome')
const emailinp = document.querySelector('#email')
const idadeinp = document.querySelector('#idade')

const nomelab = document.querySelector('#nomelab')
const emaillab = document.querySelector('#emaillab')
const idadelab = document.querySelector('#idadelab')

const popname = document.querySelector('#popname')
const popemail = document.querySelector('#popemail')
const popidade = document.querySelector('#popidade')
const closepop = document.querySelector('#closepop')

const btn = document.querySelector('#btn')





//VALIDAÇÕES

const valiName = () => { 
    if (!nomeinp.value) {
       // alert(`Por favor preencha o seu nome`)
       nomelab.classList.add('erro')
       popname.style.display = 'flex'
       closepop.style.visibility = 'visible'
    }else {
        return true
    }
}

const valiEmail = () => { 
    if (!emailinp.value) {
       // alert(`Por favor preencha o seu email`)
        emaillab.classList.add('erro')
        popemail.style.display = 'flex'
       closepop.style.visibility = 'visible'
    }else {
        return true
    }
}

const valiIdade = () => { 
    if (!idadeinp.value) {
       // alert(`Por favor preencha a sua idade`)
        idadelab.classList.add('erro')
        popidade.style.display = 'flex'
        closepop.style.visibility = 'visible'    
    }else {
        return true
    }
}


//EVENT LISTENERS 

//Erros
nomeinp.addEventListener('input', () => {
    nomelab.classList.remove('erro')
})

emailinp.addEventListener('input', ()=> {
    emaillab.classList.remove('erro')
})

idadeinp.addEventListener('input', ()=> {
    idadelab.classList.remove('erro')
})

//pop-ups
closepop.addEventListener('click', ()=> {
    popname.style.display = 'none'
    popemail.style.display = 'none'
    popidade.style.display = 'none'
    closepop.style.visibility = 'hidden'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let vname = valiName()
    let vemail = valiEmail()
    let vidade = valiIdade()

    localStorage.setItem('nome', nomeinp.value)
    localStorage.setItem('email', emailinp.value)
    localStorage.setItem('idade', idadeinp.value)








    if (vname & vemail & vidade === true) {
        window.location.href = form.action = 'index2.html'
    }
    
})


