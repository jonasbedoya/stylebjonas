let intro = document.getElementById('welcome');
function Switch() {
  intro.style.opacity = 0;
  intro.innerHTML = 'soul';
  console.log(intro.innerHTML);
  intro.style.opacity = 1;
}

setTimeout('Switch()', 10000);
// consts
// menu prices
let hmenu = document.getElementById('haircut_menu');
let tmenu = document.getElementById('treatments_menu');
let cmenu = document.getElementById('color_menu');
let backmenu = document.getElementById('serv_back');
const haircutlist = document.getElementById('haircut_list_prices');
const tl = new TimelineMax();

const inithmenu = hmenu.style.gridColumn;
const inittmenu = tmenu.style.gridColumn;
const initcmenu = cmenu.style.gridColumn;
const initrhmenu = hmenu.style.gridRow;
const initrtmenu = hmenu.style.gridRow;
const initrcmenu = hmenu.style.gridRow;

const servicescard = document.getElementById("services_card_grid");

var arrOfP1tags = document.getElementsByTagName("p1");
var arrOfServImgtags = document.getElementsByClassName("div_img");
var arrOfA1tags = document.getElementsByTagName("a1");

const haircutbutton = document.getElementById("haircut_button");
const treatmentsbutton = document.getElementById("treatments_button");
const colorbutton = document.getElementById("color_button");
const haircolor = haircutbutton.style.color;

let haircutgrid = document.getElementById('haircut_grid');
let treatmentsgrid = document.getElementById('treatments_grid');
let colorgrid = document.getElementById('color_grid');

// addEventListener
hmenu.addEventListener('click', () => {    
  animatemenu();
  haircutlistshow();    
});
tmenu.addEventListener('click', () => {    
  animatemenu();
  treatmentslistshow();    
});
cmenu.addEventListener('click', () => {    
  animatemenu();
  colorlistshow();    
});
backmenu.addEventListener('click', backtomenuanimate);

haircutbutton.addEventListener('click', haircutlistshow);
function haircutlistshow(){
  haircutlist.classList.add('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  haircutlist.classList.remove('colist_prices');

  haircutgrid.classList.add('selected');
  treatmentsgrid.classList.remove('selected');
  colorgrid.classList.remove('selected');
}

treatmentsbutton.addEventListener('click', treatmentslistshow);
function treatmentslistshow(){
  haircutlist.classList.add('trlist_prices');
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('colist_prices');

  treatmentsgrid.classList.add('selected');
  haircutgrid.classList.remove('selected');
  colorgrid.classList.remove('selected');
}
colorbutton.addEventListener('click', colorlistshow);
function colorlistshow(){
  haircutlist.classList.add('colist_prices');
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('trlist_prices');

  colorgrid.classList.add('selected');
  haircutgrid.classList.remove('selected');
  treatmentsgrid.classList.remove('selected');
}

// funcs
function backtomenuanimate(){
    // animation
    gsap.fromTo(backmenu,{scale:1, opacity:1},{scale:0,opacity:0});
    gsap.to(servicescard,{xPercent: -70, opacity:0, duration:0.8, delay:0.3, onComplete:function() {
      backtomenu();
      gsap.fromTo(servicescard,{xPercent: null, opacity:0},{xPercent: null, opacity:1});
    }});
}

function backtomenu(){
  haircutbutton.style.margin = null;
  treatmentsbutton.style.margin = null;
  colorbutton.style.margin = null;

  haircutgrid.style.margin = null;
  treatmentsgrid.style.margin = null;
  colorgrid.style.margin = null;

  servicescard.style.paddingBottom = null;
  servicescard.style.gridTemplateRows = null;

  haircutbutton.style.color = haircolor;
  treatmentsbutton.style.color = haircolor;
  colorbutton.style.color = haircolor;
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  haircutlist.classList.remove('colist_prices');

  servicescard.style.display = 'flex';
  servicescard.style.gridTemplateColumns = null;
  servicescard.style.gridTemplateRows = null;

  if (haircutgrid.classList.contains('active')){
    haircutgrid.classList.remove('active');
    // haircutgrid.style.animation = 'show 1s ease-in-out';
    haircutgrid.style.gridColumn = inithmenu;
    haircutgrid.style.gridRow = initrhmenu;
    for (var i = 0;i < arrOfP1tags.length; i++){
      arrOfP1tags[i].classList.remove('diss');
      arrOfServImgtags[i].classList.remove('diss');
      arrOfA1tags[i].style.display = "inline-block"
    }
  }
  if (treatmentsgrid.classList.contains('active')){
    treatmentsgrid.classList.remove('active');
    // treatmentsgrid.style.animation = 'show 1s ease-in-out';
    treatmentsgrid.style.gridColumn = inittmenu;
    treatmentsgrid.style.gridRow = initrtmenu;
    for (var i = 0;i < arrOfP1tags.length; i++){
      arrOfP1tags[i].classList.remove('diss');
      arrOfServImgtags[i].classList.remove('diss');
      arrOfA1tags[i].style.display = "inline-block"
    }
  }
  if(colorgrid.classList.contains('active')){
      colorgrid.classList.remove('active');
      // colorgrid.style.animation = 'show 1s ease-in-out';
      colorgrid.style.gridColumn = initcmenu;
      colorgrid.style.gridRow = initrcmenu;
      for (var i = 0;i < arrOfP1tags.length; i++){
        arrOfP1tags[i].classList.remove('diss');
        arrOfServImgtags[i].classList.remove('diss');
        arrOfA1tags[i].style.display = "inline-block"
      }
  }
  backmenu.style.display = 'none';
  haircutlist.style.display = 'none';
}
function animatemenu(){
  // animation
  gsap.to(servicescard,{opacity:0, duration: 1, onComplete:function() {
    displayservicemenu();
    gsap.fromTo(servicescard,{xPercent: 70},{xPercent: null, opacity:1, duration: 1.2});
    gsap.fromTo(backmenu,{scale:0, opacity:0},{scale:1,opacity:1,delay:1});
  }});
}

function displayservicemenu(){
  // other sutff
  haircutbutton.style.margin = 'auto';
  treatmentsbutton.style.margin = 'auto';
  colorbutton.style.margin = 'auto';
  haircutbutton.style.wordSpacing = null;
  treatmentsbutton.style.wordSpacing = null;
  colorbutton.style.wordSpacing = null;


  servicescard.style.padding = '1% 0%';
  servicescard.style.display = 'grid';
  servicescard.style.gridTemplateColumns = 'repeat(3, 1fr)';
  servicescard.style.gridTemplateRows = '70px auto';
  servicescard.style.background = 'none';

  haircutgrid.style.margin = '0%';
  treatmentsgrid.style.margin = '0%';
  colorgrid.style.margin = '0%';

  haircutlist.style.display = 'flex'
  backmenu.style.display = 'block';

  if (!haircutgrid.classList.contains('active')){
    haircutgrid.classList.add('active');
    haircutgrid.style.gridColumn = '1';
    haircutgrid.style.gridRow = '1';
    if (screen.width <= 500) { // If media query matches
      haircutgrid.style.gridColumn = '1/-1';
      haircutgrid.style.gridRow = '1';
    }
  } 
  if (!treatmentsgrid.classList.contains('active')){
    treatmentsgrid.classList.add('active');
    // treatmentsgrid.style.animation = 'erase 2s ease-in-out';
    treatmentsgrid.style.gridColumn = '2';
    treatmentsgrid.style.gridRow = '1';
    if (screen.width <= 500) { // If media query matches
      treatmentsgrid.style.gridColumn = '1/-1';
      treatmentsgrid.style.gridRow = '2';
    }
  } 
  if(!colorgrid.classList.contains('active')){
    colorgrid.classList.add('active');
    // colorgrid.style.animation = 'erase 2s ease-in-out';
    colorgrid.style.gridColumn = '3';
    colorgrid.style.gridRow = '1';
    if (screen.width <= 500) { // If media query matches
      colorgrid.style.gridColumn = '1/-1';
      colorgrid.style.gridRow = '3';
    }
  } 
// erase everything useless
  if (haircutgrid.classList.contains('active')){
    console.log(arrOfServImgtags);
    for (var i = 0;i < arrOfP1tags.length; i++){
      arrOfP1tags[i].classList.add('diss');
      arrOfServImgtags[i].classList.add('diss');
      arrOfA1tags[i].style.display = "none"
    }
  } else {
    for (var i = 0;i < arrOfP1tags.length; i++){
      arrOfP1tags[i].classList.remove('diss');
      arrOfServImgtags[i].classList.remove('diss');
      arrOfA1tags[i].style.display = "inline-block"
    }
  }
}

// responsive
// responsive();
function responsive() {
  if (screen.width <= 500) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}
