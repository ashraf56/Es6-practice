let fetchdata=[];
let Category1=async()=>{
 let url=`https://openapi.programming-hero.com/api/news/categories`
let res= await fetch(url);
let alldata = await res.json();
console.log(alldata.data.news_category)
    
  
  }

  let Category =()=>{
fetch(`https://openapi.programming-hero.com/api/news/categories`)
.then (responce => responce.json())
.then(data=> showCategory(data.data.news_category))
  }


  let showCategory =(data)=>{
let showAllCategory=document.getElementById('category');


data.forEach(datas => {

showAllCategory.innerHTML +=` 
<a class="nav-link" onclick="showNews('${datas.category_id}','${datas.category_name}')">${datas.category_name}</a>`
    
});

  }


  let showNews=(category_id,category_name)=>{
let url=` https://openapi.programming-hero.com/api/news/category/${category_id}`

fetch(url).then(res=> res.json()).then (data =>{
  fetchdata = data.data;
  ShowAllNEWS(data.data ,category_name)
}
  )

  }


  let ShowAllNEWS=(data, category_name)=>{
// console.log(data.length,category_name );
document.getElementById('cid').innerHTML=`${data.length} items about`;
document.getElementById('cname').innerText=category_name;
let allNews=document.getElementById('all-news');
allNews.innerHTML='';
data.forEach(singleElement => {
  allNews.innerHTML+=`
  <div class="card mb-3 bg-dark text-light" style="width:100%;" >
  <div class="row ">
    <div class="col-md-3">
      <img src="${singleElement.thumbnail_url }" class="img-fluid rounded-start w-100" alt="...">
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">${singleElement.title } <span class="badge rounded-pill text-bg-warning">${singleElement.others_info.is_trending
          ? 'trending': 'normal'
        }</span>
        </h5>
        <p class="card-text">${singleElement.details.slice(0,400)}....</p>
        <p class="card-text"></p>
      </div>

      <div class="card-footer border-0  d-flex justify-content-between">
      <div class="d-flex gap-2">
      <img src="${singleElement.author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
      <div>
      <p class="m-0 p-0">${singleElement.author.name ? singleElement.author.name : "not Available"}</p>
      <p class="m-0 p-0">${singleElement.author.published_date}</p>
      </div>
      
      </div>
      <div class="d-flex align-items-center">
      <i class="fas fa-eye"></i>
      <p class="m-0 px-2"> ${singleElement.total_view ? singleElement.total_view : 'not available'}</p>
      </div>
      <div class="d-flex gap-2 pt-3">
     
      <p>${singleElement.rating.number}</p>
      </div>
      
      <button type="button" class="btn btn-dark"  onclick="showdta('${singleElement._id}')  "    data-bs-toggle="modal" data-bs-target="#exampleModal">
       <i class="fa-sharp fa-solid fa-arrow-right" ></i>
    </button>
    

      </div>

    </div>
  </div>
</div>

  `
});

  }

let showdta=news_id=>{
  let url=`https://openapi.programming-hero.com/api/news/${news_id}`
 fetch(url).then (res => res.json()).then(data => newsDetail(data.data[0]))
}

let newsDetail=data=>{
console.log(data.title);
let{ image_url, title,details ,author}=data
document.getElementById('exampleModalLabel').innerText=`${data.title}`
document.getElementById('modals-body').innerHTML=`
<img src="${image_url }" class="img-fluid rounded-start " alt="...">
<h5 class="card-title">${title }</h5>
<p class="card-text">${details} </p>
<p class="card-text">${author.name} </p>

`
}


let trend=()=>{

  const trendingNews = fetchdata.filter(singleData => singleData.others_info.is_trending === true);
  const category_name = document.getElementById("cname").innerText;
  ShowAllNEWS(trendingNews, category_name);

}
  Category();





let my;

if(my !== 'undefined'){
  console.log('it is undefined');
}
else{
  console.log('it is not ');
}
