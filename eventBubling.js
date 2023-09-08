
const div = document.querySelector('div')


const button = document.querySelector('button')



// event bubling
div.addEventListener('click',()=>{
    console.log('div')
},true)

// capturing
button.addEventListener('click',()=>{
    console.log('button')
},true)