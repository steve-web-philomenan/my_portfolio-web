
// declaration de variable
const pop_1 = document.querySelector('.pop_1');
const pop_2 = document.querySelector('.pop_2');
const pop_3 = document.querySelector('.pop_3');
const pop_4 = document.querySelector('.pop_4');
const pop_5 = document.querySelector('.pop_5');
const font_end = document.querySelector('.font-end');
const back_end = document.querySelector('.back-end');
const Maquette = document.querySelector('.maquette');
const Site_web = document.querySelector('.site-web');
const Cv = document.querySelector('.cv');
const Reply = document.querySelector('.bx-reply');
const Try = document.querySelector('.try');
const Span = document.querySelector('.Sp');
const popop_click_explore = document.querySelector('.popop_click_explore');
const overlay = document.querySelector('.popup_all');
const title_explore = document.querySelector('.explore_titre')
console.log(Try, Span, popop_click_explore, overlay);
//insere le text sur explore
Try.addEventListener('click', () =>{
    Span.textContent = "+243";
    Span.style.fontSize = "2rem"
    Span.style.textDecoration = "underline"
    Span.style.color = "yellow"
    Try.style.cursor ="pointer"
    title_explore.addEventListener('click', () =>{
    Span.style.display = 'none';
    console.log('ça_marche');
  })
})
// document.addEventListener('DOMContentLoaded' ,function(){
//   document.querySelector('.popup_all').addEventListener('click', function(event){
//     if(event.target === this){
//         this.style.display = 'none';
//     }
//   })
// })
overlay.addEventListener('click', ()=>{
    overlay.style.display = 'none';
    font_end.style.display = 'none';
    back_end.style.display = 'none';
    Maquette.style.display = 'none';
    Site_web.style.display = 'none';
    Cv.style.display = 'none';
    font_end.classList.remove('popop_click_explore');
    back_end.classList.remove('popop_click_explore');
    Maquette.classList.remove('popop_click_explore');
    Site_web.classList.remove('popop_click_explore');
    Cv.classList.remove('popop_click_explore');
    console.log('overlay_ça_marche');
    
});

pop_1.addEventListener('click', () =>{
  console.log('font end_ça_marche');
              font_end.style.display = 'flex';
              overlay.style.display = 'block';
              font_end.classList.add('popop_click_explore');
  font_end.addEventListener('click', ()=> {
              font_end.classList.remove('popop_click_explore');
              font_end.style.display = 'none';
              font_end.style.transition = 'all 0.4s';
              console.log('font end_et_disparu');
        })
});
pop_2.addEventListener('click', () =>{
  console.log('back end_ça_marche');
            back_end.style.display = 'flex';
            overlay.style.display = 'block';
            back_end.classList.add('popop_click_explore');
        back_end.addEventListener('click', ()=> {
            back_end.classList.remove('popop_click_explore');
            back_end.style.display = 'none';
            console.log('back_end_et_disparu');
        })

});

pop_3.addEventListener('click', () =>{
          console.log('maquette ça marche');
          Maquette.style.display = 'flex';
          overlay.style.display = 'block';
          Maquette.classList.add('popop_click_explore');
        Maquette.addEventListener('click', ()=> {
          Maquette.classList.remove('popop_click_explore');
          Maquette.style.display = 'none';
          console.log('Maquette_et_disparu');
        })

});
pop_4.addEventListener('click', () =>{
  console.log('site web ça marche');
            overlay.style.display = 'block';
            Site_web.style.display = 'flex';
            Site_web.classList.add('popop_click_explore');
        Site_web.addEventListener('click', ()=> {
            Site_web.classList.remove('popop_click_explore');
            Site_web.style.display = 'none';
            console.log('Site_web_et_disparu');
        })

});
pop_5.addEventListener('click', () =>{
  console.log('cv ça marche');
            Cv.style.display = 'flex';
            overlay.style.display = 'block';
            Cv.classList.add('popop_click_explore');
        Cv.addEventListener('click', ()=> {
            Cv.classList.remove('popop_click_explore');
            Cv.style.display = 'none';
            console.log('Cv_et_disparu');
        })
});

//retour sur portfo
Reply.addEventListener('click', (e) =>{
   console.log(e);
   window.open("../index.html");
}) 

// //creation d'un div sur le dom 
// let info = document.createElement('div');
// //action de place le div dans le document sur le body
// document.body.appendChild(info);
// // Event Listener qui déclenchera un évènement qand il  sera chargée (évènement « load ») 
// window.addEventListener('load', () => {
//     let mot = window.prompt("Votre nom"); //action 1
//     info.classList.add("welcom"); // nous metton la class welcom sur info (div)

// info.innerHTML = mot + " est Connecté "; // je melange le prompte + le mot "est connecté" comme ecrit su le div

//     info.addEventListener('mouseout' , () => {
//         console.log(info);
//         info.classList.add("welcom_out");
//     })
//     window.addEventListener('click' , () => {
//         console.log(info);
//         info.classList.add("welcom_out");
//     })


// });
// supprime mon profil
const Leftimg = document.querySelector('.profil-top-left');
console.log(Leftimg);
Leftimg.addEventListener('click', function() {
    function wait () {
        return new Promise ((resolve) => {
            window.setTimeout(resolve, 5000);
        })
    }
    async function Profil() {
        await wait();
        Leftimg.style.display = 'none'
        console.log('bingo');
    }
    Profil();
});




