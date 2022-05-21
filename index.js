
async function searchData(){
    // let api_key="3040a61a";
    let searchInput=document.querySelector("#searchMovie").value;
    let result=await fetch(`http://www.omdbapi.com/?apikey=3040a61a&s=${searchInput}`);
    let output=await result.json();
    movieData(output);
    // console.log(output)

}
let timerId;
function debounce (func, wait){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(func, wait);
}
function movieData(data)
{
    document.querySelector("#box").innerHTML="";
    data.Search.forEach(element => {
        
   
    var card=document.createElement("div");
    card.setAttribute("class","card")

    var div=document.createElement("div");
    div.setAttribute("class","div")

    var poster=document.createElement("img")
    poster.src=element.Poster;

    var title=document.createElement("p")
    title.innerText=element.Title;

    div.append(poster,title);
    card.append(div);
    document.querySelector("#box").append(card);

    div.addEventListener("click",()=>{
        document.querySelector(".card").innerHTML=""
         var boxes=document.createElement("div");
        boxes.setAttribute("class","cards")
      
        var poster=document.createElement("img")
        poster.src=element.Poster;
        poster.setAttribute("class","poster")
    
        var title=document.createElement("p")
        title.innerText="Title :" +element.Title;
        title.setAttribute("class","title")

        var release_year=document.createElement("p")
        release_year.innerText="Year : "+element.Year;
        release_year.setAttribute("class","year")

        var rating=document.createElement("p")
        rating.innerText="Rating : "+element.imdbID;
        rating.setAttribute("class","rating")

       
        boxes.append(poster,title,release_year,rating)
        console.log(boxes)
        document.querySelector("#mainAll").append(boxes)
    });
    
    })
    
    
   

    

}
