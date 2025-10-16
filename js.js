// Declaration des variables
const scroll_bar = document.querySelector("header");
let menuburger = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");
let Affichemyname = document.querySelector(".img-about");
let p = document.querySelector(".pop_po");
let Open_explorez = document.querySelector(".btn1");
const header = document.querySelector("header")
const forward = document.getElementById('forward'); 
console.log(forward);



// Scroll_Bar
window.addEventListener("scroll", function(){
    scroll_bar.classList.toggle("sticky", this.window.scrollY > 0);
});

// menu_burger
// menuburger.onclick = () =>{
//     menuburger.classList.toggle('bx-x');
//     navigation.classList.toggle('open');
// }
menuburger.addEventListener("click", () =>{
    menuburger.classList.toggle('bx-x');
    navigation.classList.toggle('open');
});
// menuburger.addEventListener("mouseover", () =>{
//     menuburger.classList.add('img-about');
//     p.classList.add('pop-pop-show_name');
// });

// pour affiche mon nom sur la photo about
//   Affichemyname.click = () =>{
//       Affichemyname.classList.toggle('img-about');
//     Affichemyname.classList.toggle('pop-pop-show_name');
// }
//affiche mon genere par IA
Affichemyname.addEventListener("mousemove", () =>{
p.classList.add('pop-pop-show_name');
p.style.transition ="0.4s ease";

});
Affichemyname.addEventListener("mouseout", () =>{
p.classList.remove('pop-pop-show_name');
});
p.addEventListener("mousemove", () =>{
p.classList.add('pop-pop-show_name');
});
p.addEventListener("mouseout", () =>{
p.classList.add('pop-pop-show_name');
});

// ouvrir explorez
Open_explorez.addEventListener('click' , () =>{
  console.log("bingo");
    window.location.assign("./all pages/Explorez.html");
  
});
console.log( window.location);
// Consulte mon adresse 
const Open_Google_maps = document.querySelector(".Open_Google_maps");
  Open_Google_maps.addEventListener('click' , () =>{
    window.open("https://www.google.com/search?q=33+rue+des+chantiers+78000+versailles&rlz=1C1GCEA_enFR1165FR1165&oq=33&gs_lcrp=EgZjaHJvbWUqDAgCECMYJxiABBiKBTIGCAAQRRg5MgoIARAuGLEDGIAEMgwIAhAjGCcYgAQYigUyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBwgFEAAYgAQyBwgGEAAYgAQyCggHEC4YsQMYgAQyBwgIEAAYgAQyCggJEAAYsQMYgATSAQk0MzI0ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8", 'location', 'width=707, height=800');
  
});
console.log( window.location);

// recupere le cookie pour ameliore l'utilsation client 


// Créer un object depuis une chaine JSON avec la fonction JSON.parse()
const steveIdentite = '{"name":"Lumumba","firstname":"styve","age":21,"ville":"versailles","email":"tambwestyve@gmail.com","code":78000,"rue":"chantiers"}';
let obj = JSON.parse(steveIdentite);
document.getElementById("steve_identite").innerHTML = obj.firstname + " " +  obj.name + " " + obj.age + " ans " + obj.ville + " " + obj.email + " " + obj.code + ".";
console.log(obj.rue);
console.log(steveIdentite);

//Analyse un tableau JSON avec  JSON.parse()
const steve_prefer_car = '["BMW", "MERCEDES", "AUDI", "PORSCHE", "RENAULT", "PEUGEOT", "CITROEN", "FERARI", "HONDA", "HYUNDAI"]';
let MAvoiture = JSON.parse(steve_prefer_car);
document.getElementById("steve_prefer_car").innerHTML = MAvoiture[9];

//Créer une chaine depuis un objet Javascript avec Json.stringify()
const wife = {name:"debora-wife", postnom:"philo", age:19, ville:"limay"};
const mywife = JSON.stringify(wife);
document.getElementById("steve_wife_identite").innerHTML = mywife;

//Créer une chaine depuis un objet Javascript avec Json.stringify()
const maListefamily = ["Micho", "chantal", "styve", "michael", "emma"];
const Mafamily = JSON.stringify(maListefamily);
document.getElementById("maListefamily").innerHTML = Mafamily;

//Stocker et récupere des donnes depuis le localStorage
//Créer une chaine depuis un objet Javascript avec Json.stringify()
const infoDeborah = {name:"debora", postnom:"philomena", age:22, ville:"limay 78000", email:"debora@gmail.com", profession:"sage femme"};
const myJSON = JSON.stringify(infoDeborah);
localStorage.setItem("info philo", myJSON); // stockage des données
// recuperation des données et l'affichage
let info = localStorage.getItem("info philo");
let obj1 = JSON.parse(info);
document.getElementById("InfoDesb").innerHTML = "Elle s'appel" +" "+ obj1.name + " " + obj1.postnom + " " + obj1.age + " ans " + obj1.ville + " " + obj1.email + " " + obj1.profession + ".";
