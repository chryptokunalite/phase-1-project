//ON DOM LOAD...
document.addEventListener('DOMContentLoaded',function(){
//Fetch dog images



//create dog cards...==>
function createDogCards(dog){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${dog.dogUrl}">
    <div class="content">
        <h4>${dog.breed}</h4>
        <p>${dog.description}</p>
    </div>
    `
//==>...and render dog to DOM
document.querySelector('#dogs').appendChild(card)
}
console.log(createDogCards)


});







