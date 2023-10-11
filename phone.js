// let loadPhone=async(serch)=>{
//  let url=`https://openapi.programming-hero.com/api/phones?search=${serch}`
// let res= await fetch(url);
// let alldata = await res.json();
// Allphone(alldata.data)
    
  
//   }

let loadPhone2=(serch)=>{
    let url=`https://openapi.programming-hero.com/api/phones?search=${serch}`
    fetch(url)
    .then(response => response.json())
    .then(json => Allphone(json.data))
    .catch(error => {
      console.error('Error:', error);
    })

}






  let Allphone =(phone)=>{
    console.log(phone);
let phonesContainer=document.getElementById('phone-container');
phonesContainer.innerHTML='';

let not=document.getElementById('not-found');
if(phone.length === 0){
  not.classList.remove('d-none')
}
else{
  not.classList.add('d-none')
}

phone.forEach(phones => {
  let div=document.createElement('div');
  div.classList.add('col')
div.innerHTML=`
<div class="card h-100 ">
<div class="text-center w-100">
  <img src="${phones.image}" class="img-thumbnail  w-50" alt="..."></div>
  <div class="card-body ">
    <h5 class="card-title">${phones.phone_name}</h5>
    <p class="card-text">${phones.brand }  </p>
    <p class="card-text">${phones.slug }  </p>
    <button type="button"  class="btn btn-primary" onclick="idphone('${phones.slug}')" data-bs-toggle="modal" data-bs-target="#eampleModal">
   See more
  </button>
  </div>
</div>
`
phonesContainer.appendChild(div)
});

  }

document.getElementById('serch-ph').addEventListener('click',function(){

let Serchs=document.getElementById('phone-serch');
let serch=Serchs.value ;

loadPhone2(serch)
Serchs.value=''

})


const myInput = document.getElementById("phone-serch");

myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let Serchs=document.getElementById('phone-serch');
    let serch=Serchs.value ;
    
    loadPhone2(serch)
    Serchs.value= ''
  }
});

let idphone=async id=>{

     let url= `https://openapi.programming-hero.com/api/phone/${id}`

    let res= await fetch(url);
    let jd=await res.json();
    showOhoneDetail(jd.data);

  }




  
  let showOhoneDetail =(phone)=>{
    console.log(phone);
let modal=document.getElementById('phoneModalLabel')
modal.innerText=phone.name;
 document.getElementById('pmd-body').innerHTML=`
 <img src="${phone.image}" class="img-thumbnail " alt="...">
 <h5 class="card-title">${phone.name}</h5>
 <p class="card-text">${phone.brand }  </p>
 <p class="card-text">${phone.mainFeatures.storage}  </p>
 <p class="card-text">Chipset :${phone.mainFeatures.chipSet}  </p>
 <p class="card-text">Memory :${phone.mainFeatures.memory}  </p>
 <p class="card-text">DisplaySize :${phone.mainFeatures.displaySize}  </p>
 <p class="card-text">ReleaseDate :${phone.releaseDate}  </p>

 `
  }
  loadPhone2('a')