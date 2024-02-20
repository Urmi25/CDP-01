const toggleButton = document.getElementsByClassName('toggle-button')[0];
const nav = document.getElementsByClassName('nav')[0];

toggleButton.addEventListener('click', ()=> {
    nav.classList.toggle('active');
   
    
})
const form = document.getElementById('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();

})