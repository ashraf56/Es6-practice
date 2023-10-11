let count=0;

document.getElementById('bt-click').addEventListener('click',function () {
    let p=document.getElementById('ptag');
    p.innerHTML=`${count++}`

 


if (typeof(Storage) !== "undefined") {
  
    // Add a number to local storage
    localStorage.setItem("myNumber", p.innerHTML);
    
  } else {
    console.log("Sorry, local storage is not supported in your browser.");
  }

 
  })

  let show=()=>{
    let p=document.getElementById('ptag');
    let myNumber = localStorage.getItem("myNumber");
    if (myNumber === null) {
      myNumber = "No number found";
    }
   p.innerText =myNumber;
    

  } 
  show();