const v_URL= 'images/checked.png';
const q_URL= 'images/unchecked.png';

let q = undefined; 
let x= undefined; 
let z= undefined;

function ch_col(event){

const sel= event.currentTarget;
const a= sel.querySelector('.checkbox');
const el = document.querySelectorAll('.choice-grid div');


for(const j of el){
    if(j!== sel && sel.dataset.questionId === 'one'){
    const el1 = document.querySelectorAll('[data-question-id="one"]');
    
    for(const k of el1 ){
    if(k !== sel){
    const v1 = k.querySelector('.checkbox');
    k.classList.remove('std');
    k.classList.add('opac');
    v1.src =q_URL;
  }
  }
}
  if(j!== sel && sel.dataset.questionId === 'two'){
    const el2 = document.querySelectorAll('[data-question-id="two"]');

    for(const k of el2 ){
      if(k !== sel){
      const v2 = k.querySelector('.checkbox');
      k.classList.remove('std');
      k.classList.add('opac');
      v2.src = q_URL;
  }
} 
}
  if(j!== sel && sel.dataset.questionId === 'three'){
    const el3 = document.querySelectorAll('[data-question-id="three"]');

    for(const k of el3 ){
      if(k !== sel){
    const v3 = k.querySelector('.checkbox');
        k.classList.remove('std');
    k.classList.add('opac'); 
    v3.src = q_URL;
  }
    }
  }
  
  
  if(j === sel){
    sel.classList.remove('std');
    sel.classList.remove('opac');
    sel.classList.add('selected');
    a.src = v_URL;
  }
}
}
function count(event){
const s= event.currentTarget;

if(s.dataset.questionId === 'one'){q = s.dataset.choiceId;}
else if(s.dataset.questionId === 'two'){x = s.dataset.choiceId; }
else {z = s.dataset.choiceId; }

const y = document.querySelector('.hidden');
const v = y.querySelector('div');
const h = y.querySelector('p');


if((q !== undefined && x !== undefined && z !== undefined) && ((q === x && q === z) || (q === x && q !== z) || (q !== x && q === z ) || (q !== x && q !== z && x !== z ))) {
y.classList.remove('hidden');
y.classList.add('end');
f_assign(q,v,h);

}else if((q !== undefined && x !== undefined && z !== undefined) && (q !== x && x === z)){
  y.classList.remove('hidden');
  y.classList.add('end');
  f_assign(x,v,h);
  }

} 

const elem = document.querySelectorAll('.choice-grid div');
for(const i of elem ){
    i.addEventListener('click', ch_col);
    i.addEventListener('click', count);
  }

function f_assign(p,v,h) {
  if(p === 'blep') {v.textContent = RESULTS_MAP.blep.title;
    h.textContent = RESULTS_MAP.blep.contents;} 
  else if(p === 'burger') {v.textContent = RESULTS_MAP.burger.title;
    h.textContent = RESULTS_MAP.burger.contents;} 
  else if(p === 'cart') {v.textContent = RESULTS_MAP.cart.title;
    h.textContent = RESULTS_MAP.cart.contents;}
  else if(p === 'dopey') {v.textContent = RESULTS_MAP.dopey.title;
    h.textContent = RESULTS_MAP.dopey.contents;}
  else if(p === 'happy') {v.textContent = RESULTS_MAP.happy.title;
    h.textContent = RESULTS_MAP.happy.contents;}
  else if(p === 'nerd') {v.textContent = RESULTS_MAP.nerd.title;
    h.textContent = RESULTS_MAP.nerd.contents;}
  else if(p === 'shy') {v.textContent = RESULTS_MAP.shy.title;
    h.textContent = RESULTS_MAP.shy.contents;}
  else if(p === 'sleeping') {v.textContent = RESULTS_MAP.sleeping.title;
    h.textContent = RESULTS_MAP.sleeping.contents;}
  else if(p === 'sleepy') {v.textContent = RESULTS_MAP.sleepy.title;
    h.textContent = RESULTS_MAP.sleepy.contents;}
}

function reset(event){
q = undefined;
x = undefined;
z = undefined;

const all  = document.querySelectorAll('.choice-grid div');
const h = document.querySelector('.end');
const d = event.currentTarget

h.classList.remove('end');
h.classList.add('hidden');

for(const j of all){
const ph = j.querySelector('.checkbox');

j.classList.remove('opac');
j.classList.remove('selected');
j.classList.add('std');
ph.src = q_URL;
}
} 

const button = document.querySelector('#endbu');
button.addEventListener('click', reset);





