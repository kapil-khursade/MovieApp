// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// Showing account balance
showAmount();
function showAmount(){
let showAmt = JSON.parse(localStorage.getItem("wallet"))||[];

document.querySelector("#wallet").innerText = showAmt[0].balance
}


// Searchin optionns

function searchMovie(){
    let querry= document.querySelector("#search").value;
    console.log(querry);

    let x=fetch(`https://www.omdbapi.com/?apikey=69c1c94&s=${querry}`)

    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        let movieData = res.Search;
        console.log(movieData);
        appendMovie(movieData);
    });
}

function appendMovie(movieData){

    document.querySelector("#movies").innerHTML=null;
    
    movieData.forEach((el)=>{

        let card = document.createElement("div");

        let poster = document.createElement("img");
        poster.src = el.Poster;

        let title = document.createElement("h4");
        title.innerText = el.Title;

        let book = document.createElement("button");
        book.innerText="Book Now";
        book.addEventListener("click", ()=>{
            localStorage.setItem("bookmovie", JSON.stringify(el));
            window.location.href="checkout.html"
        })

        card.append(poster, title, book);

        document.querySelector("#movies").append(card);
    })
}
