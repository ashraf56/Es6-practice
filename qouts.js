let loadData=()=>{
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(json => Displayqot(json))
 
}

let Displayqot=(quote)=>{
let blockqout= document.getElementById('blockquote');

blockqout.innerHTML=` <h1>All Quote</h1>
<p> ${quote.quote} </p>
<button type="button" class="btn btn-primary" onclick='loadData()' >Refresh</button>
`
}
loadData();