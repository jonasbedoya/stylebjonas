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
backmenu.addEventListener('click', backtomenu);

haircutbutton.addEventListener('click', haircutlistshow);
function haircutlistshow(){
  haircutgrid.classList.add('selected');
  haircutlist.classList.add('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  haircutlist.classList.remove('colist_prices');
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
  colorgrid.classList.add('selected');
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  treatmentsgrid.classList.remove('selected');

}

// funcs
function backtomenu(){
  haircutbutton.style.color = haircolor;
  treatmentsbutton.style.color = haircolor;
  colorbutton.style.color = haircolor;
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  haircutlist.classList.remove('colist_prices');

  if (haircutgrid.classList.contains('active')){
    haircutgrid.classList.remove('active');
    haircutgrid.style.animation = 'show 1s ease-in-out';
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
    treatmentsgrid.style.animation = 'show 1s ease-in-out';
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
      colorgrid.style.animation = 'show 1s ease-in-out';
      colorgrid.style.gridColumn = initcmenu;
      colorgrid.style.gridRow = initrcmenu;
      for (var i = 0;i < arrOfP1tags.length; i++){
        arrOfP1tags[i].classList.remove('diss');
        arrOfServImgtags[i].classList.remove('diss');
        arrOfA1tags[i].style.display = "inline-block"
      }
  }
  tl.fromTo(backmenu, {autoAlpha: 0}, {autoAlpha: 1, duration: 2});
  backmenu.style.display = 'none';
  haircutlist.style.display = 'none';
}
function animatemenu(){
  servicescard.style.paddingBottom = '0.3%';
  haircutgrid.style.margin = 'auto';
  treatmentsgrid.style.margin = 'auto';
  colorgrid.style.margin = 'auto';
  servicescard.style.gridTemplateRows = 'auto';
  haircutlist.style.display = 'flex';
  backmenu.style.display = 'block';
  if (!haircutgrid.classList.contains('active')){
    haircutgrid.classList.add('active');
    haircutgrid.style.animation = 'erase 1s ease-in-out';
    haircutgrid.style.gridColumn = '2/5';
    haircutgrid.style.gridRow = '1';
  } 
  if (!treatmentsgrid.classList.contains('active')){
    treatmentsgrid.classList.add('active');
    treatmentsgrid.style.animation = 'erase 1s ease-in-out';
    treatmentsgrid.style.gridColumn = '5/8';
    treatmentsgrid.style.gridRow = '1';
    // haircutlist.classList.add('trlist_prices');
  } 
  if(!colorgrid.classList.contains('active')){
    colorgrid.classList.add('active');
    colorgrid.style.animation = 'erase 1s ease-in-out';
    colorgrid.style.gridColumn = '8/11';
    colorgrid.style.gridRow = '1';
    // haircutlist.classList.add('colist_prices');
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
