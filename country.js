let loadCNData=()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => allcount(json))
 
}


let allcount=(countries)=>{
let desh=document.getElementById('desh');

countries.forEach(country => {
      // console.log(country);
let div=document.createElement('div');
div.classList.add('col-md-4')
div.classList.add('my-3')
      div.innerHTML=`
    
      <div class="card h-100"  >
      <div id="imgs" class="text-center mt-5" >
      <img src="${country.flags.png}" class="img-thumbnail w-25 " alt="...">
        </div>
      <div class="card-body text-center">
        <h5 class="card-title"> Name: ${country.name.common  } </h5>
        <p class="card-text">capital: ${country.capital ? country.capital[0] :'no Capital'}</p>
        <a  onclick="Details('${country.cca2}')" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      
      `
desh.appendChild(div)
});

}

let Details= (code) =>{
  let url=`https://restcountries.com/v3.1/alpha/${code}`
console.log('deatils com',url);

fetch(url)
.then(response => response.json())
.then(json => displaycountries(json[0]))

}
let displaycountries= (country)=>{
let show=document.getElementById('show');
show.innerHTML=`
<img src="${country.flags.png}" class="img-thumbnail w-25 " alt="...">
<h1>${country.name.common  } </h1>
<h2> ${country.capital ? country.capital[0] :'no Capital'}</h2>

`

}

loadCNData();