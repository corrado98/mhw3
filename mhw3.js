
function answ(response) {  
  return response.json();
}

function res(event){

const e = event.currentTarget;
const l = document.querySelector('.hidden3');
l.classList.remove('hidden3');
l.classList.add('secondo');
const t = document.querySelector('.title');
t.textContent = "Scopri la tua personalità";
const h = document.querySelectorAll('.hidden2');
for(const j of h){
j.classList.remove('hidden2');
}
const q = document.querySelector('#endbu'); 
const x = document.querySelector('#gallery');
x.innerHTML="";
e.classList.add('hiddenb');
q.addEventListener('click', reset);
const v = document.querySelector('.h');
v.classList.remove('h');
v.classList.add('risultati');
}

function goback(event){
console.log("partito");
const back = document.querySelector('.hiddenb');
back.classList.remove('hiddenb');
back.classList.add('button2');
back.addEventListener('click', res);
}

function req(event){
    const f = event.currentTarget;
    event.preventDefault();
    const r = document.querySelector('#barra');
    const v = encodeURIComponent(r.value);
    const s = 'https://pixabay.com/api/?key=26954894-be96704e052e3e2792a685dbd&image_type=photo&lang=it&q='+v;
    fetch(s).then(answ).then(onJson);
    const ti= document.querySelector('.title');
    const c = document.querySelectorAll('.choice-grid');
    const d = document.querySelectorAll('.question-name');
    const q = document.querySelector('#endbu');
    const x = document.querySelector('.secondo');
    const l = document.querySelector('.risultati');
    l.classList.remove('risultati');
    l.classList.add('h');
    ti.textContent = "Galleria immagini";
    x.classList.remove('secondo');
    x.classList.add('hidden3');
    q.classList.add('hidden2');
    for(const j of c){
     j.classList.add('hidden2');
    }
    for(const k of d){
    k.classList.add('hidden2');
    }  
}

const form1 =document.querySelector('#primo');
form1.addEventListener('submit', req);
form1.addEventListener('submit', goback);

function onJson(json){
console.log('json ricevuto');
const gallery=document.querySelector('#gallery');
gallery.innerHTML='';
let h =json.total;
if(h > 12) h = 12;
for(let i=0; i<h; i++){
    const hit =json.hits[i];
    const img_url=hit.webformatURL;
    //console.log(img_url);
    const cont = document.createElement('div');
    const imm= document.createElement('img');
imm.src=img_url;
cont.appendChild(imm);
gallery.appendChild(cont);
}
}

function onTokenJson(json)
{
  token = json.access_token;
}

function onTokenResponse(response)
{
  console.log(response);
    return response.json()
}

let token;
const ur='https://api.petfinder.com/v2/oauth2/token';
const key = 'A7L5sGBUxB6we8EnZ6aRpWEqBKhZ162E5n1PttHjmafRK7qC8X';
const secret = 'qZOhZk9EENPWL1E2YFEYbZKYTKzAYCk0b1RiYClF';

function pet(json){
  console.log(json);
  const tot= json.animals;
  console.log(tot);
  for(i of tot){
  if(i.primary_photo_cropped != null){
  const t = document.querySelector('.risultati h1');
  t.textContent="Contatti";
  const imm = document.createElement('img');
  const j = document.createElement('a');
  const u= document.createElement('a');
  const img_url = i.primary_photo_cropped.small;
  imm.src = img_url;
  j.textContent = i.name;
  u.textContent = i.contact.email;
  const ris = document.querySelector('.risultati');
  ris.appendChild(imm);
  ris.appendChild(j);
  ris.appendChild(u);
  }
}
}

fetch(ur,
	{
   method: "POST",
   body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
   }
  }
).then(onTokenResponse).then(onTokenJson);



function f2(event){
  const f = event.currentTarget;
  event.preventDefault();
  const tipo = document.querySelector('#barra2');
  const l = document.querySelector('#barra3');
  const x = encodeURIComponent(tipo.value);
  const y = encodeURIComponent(l.value);
 fetch('https://api.petfinder.com/v2/animals?type='+x+'&gender'+y,
  {
    headers:
  {
    'Authorization' : ' Bearer ' + token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(answ).then(pet)

}

const form2 =document.querySelector('.secondo');
form2.addEventListener('submit',f2);