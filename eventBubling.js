
const div = document.querySelector('div')


const button = document.querySelector('button')



// event bubling
div.addEventListener('click',()=>{
    console.log('div')
})

// capturing & stopPropagation
button.addEventListener('click',(event)=>{
    console.log('button')
    event.stopPropagation()

})