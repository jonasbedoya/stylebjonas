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

var arrOfP1tags = document.getElementsByTagName("p1");
var arrOfServImgtags = document.getElementsByClassName("div_img");
var arrOfA1tags = document.getElementsByTagName("a1");

const haircutbutton = document.getElementById("haircut_button");
const treatmentsbutton = document.getElementById("treatments_button");
const colorbutton = document.getElementById("color_button");

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
  haircutlist.classList.add('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  haircutlist.classList.remove('colist_prices');
}

treatmentsbutton.addEventListener('click', treatmentslistshow);
function treatmentslistshow(){
  haircutlist.classList.add('trlist_prices');
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('colist_prices');
}
colorbutton.addEventListener('click', colorlistshow);
function colorlistshow(){
  haircutlist.classList.add('colist_prices');
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('trlist_prices');
}

// funcs
function backtomenu(){
  haircutlist.classList.remove('halist_prices');
  haircutlist.classList.remove('trlist_prices');
  haircutlist.classList.remove('colist_prices');

  if (haircutgrid.classList.contains('active')){
    haircutgrid.classList.remove('active');
    haircutgrid.style.animation = 'hairshow 1s ease-in-out';
    haircutgrid.style.gridColumn = inithmenu;
    for (var i = 0;i < arrOfP1tags.length; i++){
      arrOfP1tags[i].classList.remove('diss');
      arrOfServImgtags[i].classList.remove('diss');
      arrOfA1tags[i].style.display = "inline-block"
    }
  }
  
  if (treatmentsgrid.classList.contains('active')){
    treatmentsgrid.classList.remove('active');
    treatmentsgrid.style.animation = 'treatmentsshow 1s ease-in-out';
    treatmentsgrid.style.gridColumn = inittmenu;
    for (var i = 0;i < arrOfP1tags.length; i++){
      arrOfP1tags[i].classList.remove('diss');
      arrOfServImgtags[i].classList.remove('diss');
      arrOfA1tags[i].style.display = "inline-block"
    }
  }
  if(colorgrid.classList.contains('active')){
      colorgrid.classList.remove('active');
      colorgrid.style.animation = 'colorshow 1s ease-in-out';
      colorgrid.style.gridColumn = initcmenu;
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
  haircutlist.style.display = 'flex';
  backmenu.style.display = 'block';
  if (!haircutgrid.classList.contains('active')){
    haircutgrid.classList.add('active');
    haircutgrid.style.animation = 'hairmove 1.2s ease-in-out';
    haircutgrid.style.gridColumn = '2/5';
  } 
  if (!treatmentsgrid.classList.contains('active')){
    treatmentsgrid.classList.add('active');
    treatmentsgrid.style.animation = 'treatmentsmove 1.2s ease-in-out';
    treatmentsgrid.style.gridColumn = '2/5';
    // haircutlist.classList.add('trlist_prices');
  } 
  if(!colorgrid.classList.contains('active')){
    colorgrid.classList.add('active');
    colorgrid.style.animation = 'colormove 1.2s ease-in-out';
    colorgrid.style.gridColumn = '2/5';
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
