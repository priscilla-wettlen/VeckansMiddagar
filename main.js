let myDinners = {
  kfsas: {
    name: "Köttfarssås",
    veg: false,
    quick: false,
    lyxmat: false,
    img: "img/kfsas.jpeg"
  },
  ppnachos: {
    name: "Pulled Pork Nachos",
    veg: false,
    quick: true,
    lyxmat: false,
    img: "img/ppnachos.png"
  },
  pozole: {
    name: "Pozole",
    veg: false,
    quick: false,
    lyxmat: true,
    img: "img/pozole.jpeg"
  },
  lasagne: {
    name: "Lasagne",
    veg: false,
    quick: false,
    lyxmat: false,
    img: "img/lasagne.jpeg"
  },
  kflimpa: {
    name: "Köttfarslimpa",
    veg: false,
    quick: false,
    lyxmat: false,
    img: "img/kflimpa.jpeg"
  },
  birria: {
    name: "Birria",
    veg: false,
    quick: false,
    lyxmat: true,
    img: "img/birria.jpeg"
  },
  fiskpizza: {
    name: "Fisk(F) and Pizza(P)",
    veg: false,
    quick: true,
    lyxmat: false,
    img: "img/fiskpizza.jpeg"
  },
  falafel: {
    name: "Falafel",
    veg: true,
    quick: true,
    lyxmat: false,
    img: "img/falafel.jpeg"
  },
  alfredo: {
    name: "Pasta Alfredo",
    veg: true,
    quick: true,
    lyxmat: false,
    img: "img/alfredo.jpeg"
  },
  tikka: {
    name: "Chicken Tikka Masala",
    veg: false,
    quick: true,
    lyxmat: false,
    img: "img/tikka.jpeg"
  },
  psalad: {
    name: "Pasta Sallad",
    veg: true,
    quick: true,
    lyxmat: false,
    img: "img/pastasalad.jpeg"
  },
  caesar: {
    name: "Caesar Sallad",
    veg: false,
    quick: true,
    lyxmat: false,
    img: "img/cesar.jpeg"
  },
  tiktok: {
    name: "Tiktok Soppa",
    veg: true,
    quick: false,
    lyxmat: false,
    img: "img/tiktok.png"
  },
  hamb: {
    name: "Hamburgers",
    veg: false,
    quick: false,
    lyxmat: false,
    img: "img/hamb.jpeg"
  },
  tacos: {
    name: "Tacos",
    veg: false,
    quick: false,
    lyxmat: false,
    img: "img/tacos.jpeg"
  },
  tamales: {
    name: "Tamales",
    veg: false,
    quick: false,
    lyxmat: true,
    img: "img/tamales.jpeg"
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
    const li = document.createElement("li", ".li");
    const para = document.createElement("p", ".para");
    const img = document.createElement("img", ".img");
    img.setAttribute("src", selected[value].img)
    main.appendChild(dinners)
    dinners.appendChild(ul)
    ul.appendChild(li);
    li.appendChild(para)
    li.appendChild(img)
    para.innerHTML = para.innerHTML += selected[value].name
  }
}
displayDinners()