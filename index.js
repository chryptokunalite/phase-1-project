//ON DOM LOAD...
document.addEventListener('DOMContentLoaded',function(){
//Fetch dog images
fetch('http://localhost:3000/dogs')
.then(res => res.json())
.then(dogData => dogData.forEach(dog => createDogCards(dog)))

//create dog cards...==>
function createDogCards(dog){
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class="content" style="background-color:green;color:white;padding:20px;margin:10px;">
        <img src="${dog.dogUrl}" width="678" height="452">
        <h4>${dog.breed}</h4>
        <p>${dog.description}</p>
    </div>
    `
//==>...and render dog to DOM
document.querySelector('#dogs').appendChild(card)
}
console.log(createDogCards)


});







