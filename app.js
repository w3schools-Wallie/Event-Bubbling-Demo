const btn = document.querySelector('button')
const ul = document.querySelector('ul')

const h3 = document.querySelector('h3')

h3.innerHTML = `<h1>Hobbies</h1>`

let hobbies = [
    "Studying",
    "Learning React",
    "Basket Ball",
    "Soccer",
    "Writing",
    "Reading",
    "Concerts",
    "Working out"
]

function hideData (){
    ul.toggleAttribute('hidden')//will create the attribut eif it doesnt exist 

    if(ul.hasAttribute('hidden')){
        btn.innerText = "show data"
    }else{
        btn.innerText = "hide data"
    }
}

function appendData (){
    // ul.innerHTML = ''
    for (let i = 0; i < hobbies.length; i++) {
        let li = document.createElement('li')
        li.innerText = hobbies[i]
        ul.append(li)
    }
    btn.removeEventListener('click', appendData)
    btn.addEventListener('click', hideData)
}

btn.addEventListener('click', appendData)


// =====================>

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')

function divName1 (event){
    // console.log(event.target.innerText)
    
    console.log('div1')
}
function divName2 (event){
    event.stopPropagation()
    console.log('div2')
}
function divName3 (event){
    event.stopPropagation()
    console.log('div3')
}

div1.addEventListener('click', divName1)
div2.addEventListener('click', divName2)
div3.addEventListener('click', divName3)
