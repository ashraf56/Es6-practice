let addID=()=>{
let name=document.getElementById('names');
let fullname =name.value ;
let roll=document.getElementById('roll');
let ID=roll.value ;
name.value='' ; roll.value=''
// if ( fullname === '' || ID === '' ) {
//      alert('not access ')
//     return 
// } 


console.log(fullname, ID); 
appenddata(fullname,ID)
svaetoStorage(fullname,ID)
}

let appenddata=(fullname,id)=>{

let sec=document.getElementById('sections');

sec.innerHTML +=`
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">${fullname}</h5>
    <p class="card-text">${id}</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
`
} 

let getcart=()=>{
    let cart={};
    let shcart=localStorage.getItem('cart');
    if (shcart) {
        cart=JSON.parse(shcart);
    }
    return cart
}

let svaetoStorage=(fullname,id)=>{

let cart=getcart();
cart[fullname]=id;
let cartingify=JSON.stringify(cart);
localStorage.setItem('cart',cartingify);

}

let displayitem=()=>{
let cr=getcart()
for (const valu in cr) {
   let id=cr[valu]
   appenddata(valu,id)
}

}
displayitem()