let loadUser=()=>{

    fetch('https://randomuser.me/api/?gender=male')
    .then(response => response.json())
    .then(json => genarate(json))

}

let genarate=(data)=>{
    console.log(data.results[0]);

let name=document.getElementById('name');
let picture=document.getElementById('imgs');
let adress=document.getElementById('locations');

name.innerHTML=` ${data.results[0].name.title}
${data.results[0].name.first} ${data.results[0].name.last}
`
picture.innerHTML=`
<img src="${data.results[0].picture.large}" class="img-thumbnail rounded-circle" alt="...">


`
adress.innerHTML=` 
<span class="fw-semibold" style="font-size: 14px;">${data.results[0].location.city} , ${data.results[0].location.country}</span>
 <br>
<span class="fw-semibold" style="font-size: 13px;" >Age: ${data.results[0].dob.age}</span>
 <br>
<span class="fw-semibold " style="font-size: 12px;" > ${data.results[0].email} </span>
 <br>






`


}
loadUser();

