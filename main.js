let myDinners = {
  kfsas: {
    name: "Köttfarssås",
    veg: false,
    quick: false,
    img: "img/kfsas.jpeg"
  },
  ppnachos: {
    name: "Pulled Pork Nachos",
    veg: false,
    quick: true,
    img: "img/ppnachos.png"
  },
  pozole: {
    name: "Pozole",
    veg: false,
    quick: false,
    img: "img/pozole.jpeg"
  },
  lasagne: {
    name: "Lasagne",
    veg: false,
    quick: false,
    img: "img/lasagne.jpeg"
  },
  kflimpa: {
    name: "Köttfarslimpa",
    veg: false,
    quick: false,
    img: "img/kflimpa.jpeg"
  },
  birria: {
    name: "Birria",
    veg: false,
    quick: false,
    img: "img/birria.jpeg"
  },
  fiskpizza: {
    name: "Fisk(F) and Pizza(P)",
    veg: false,
    quick: true,
    img: "img/fiskpizza.jpeg"
  },
  falafel: {
    name: "Falafel",
    veg: true,
    quick: true,
    img: "img/falafel.jpeg"
  },
  alfredo: {
    name: "Pasta Alfredo",
    veg: true,
    quick: true,
    img: "img/alfredo.jpeg"
  }
}

const values = Object.values(myDinners)
console.log(values)

const shuffled = values.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, 5);
    
function displayDinners() {
  for (let value in selected) {
    const main = document.querySelector("main");
    const dinners = document.querySelector(".dinners");
    const ul = document.querySelector(".ul");
    const li = document.createElement("li");
    const para = document.createElement("p", ".para")
    main.appendChild(dinners)
    dinners.appendChild(ul)
    ul.appendChild(li);
    li.appendChild(para)
    para.innerHTML = para.innerHTML += selected[value].name
  }
}
displayDinners()