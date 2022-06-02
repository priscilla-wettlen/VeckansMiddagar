let myDinners = ['Köttfarsås', 'Pulled Pork Nachos', 'Pozole', 'Lasagna', 'Köttfarslimpa',
  'Birria', 'Fisk + Pizza', 'Falafel']

//console.log(myDinners.length)
  

    
const main = document.querySelector("main")
const middagar = document.querySelector(".dinners")

main.appendChild(middagar)


const shuffled = myDinners.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 5);

function displayDinners() {
  for (let i in selected) {
    const para = document.createElement("p", ".para")
    middagar.appendChild(para)
    para.innerHTML += selected;
  }
}
displayDinners()