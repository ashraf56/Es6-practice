// let loadMeal=(serchtx)=>{
//     let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchtx}`
//     fetch(url)
//     .then(response => response.json())
//     .then(json => allmeal(json.meals))
//     .catch(error => {
//       console.error('Error:', error);
//     })

// }

let loadMeal2=async(serchtx)=>{
  let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchtx}`
  let res= await fetch(url);
  let res2= await res.json();
  allmeal(res2.meals)
  

}


let allmeal=(meals)=>{
   console.log(meals);

let Meal=document.getElementById('meal-container');
Meal.innerHTML='';
meals=meals.slice(0,6)
let ot=document.getElementById('not-found');

if(meals.length === 0){
  ot.classList.remove('d-none');
}
else{
  ot.classList.add('d-none');
}


meals.forEach(meal => {

let div=document.createElement('div');
div.classList.add('col');
div.innerHTML=`

<div class="card h-100">
  <img src="${meal.strMealThumb}" class="img-thumbnail " alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 300) }  </p>
    <button type="button" onclick="idmeal(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
   See more
  </button>
  </div>
</div>
`
Meal.appendChild(div);

});
}

//for modal view
let idmeal=Mealid=>{
let url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`
fetch(url)
.then(response => response.json())
.then(json => SHowDetail(json.meals[0]))
}


let SHowDetail=(meal)=>{
document.getElementById('exampleModalLabel').innerText=meal.strMeal;
document.getElementById('md-body').innerHTML=`
<img src="${meal.strMealThumb}" class="img-thumbnail " alt="...">
<p class="card-text pt-4">${meal.strInstructions}  </p> 
<p class="card-text">${meal.strYoutube}  </p>


`

}


//for serch data

document.getElementById('serch').addEventListener('click', function(){

  let serchtx=document.getElementById('input-serch').value ;
   
    loadMeal2(serchtx)
  
})

// let serchMEal=()=>{
//     let serchtx=document.getElementById('input-serch').value ;
   
//     loadMeal2(serchtx)
// }

loadMeal2()