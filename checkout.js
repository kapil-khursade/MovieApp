// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


// Showing the amount on the dom
showAmount();
function showAmount(){
let showAmt = JSON.parse(localStorage.getItem("wallet"))||[];

document.querySelector("#wallet").innerText = showAmt[0].balance;
}

// ṣhowing Movie
let movieData = JSON.parse(localStorage.getItem("bookmovie"));
console.log(movieData)
showMovie(movieData);

function showMovie(movieData){

    let card = document.createElement("div");

    let poster = document.createElement("img");
    poster.src = movieData.Poster;

    let title = document.createElement("h4");
    title.innerText = movieData.Title;

    card.append(poster, title);

    document.querySelector("#movie").append(card)
}


// booking data
let user = document.querySelector("#user-detail>form")
user.addEventListener("submit", (event)=>{
    event.preventDefault();

    let name=user.user_name.value;

    let seat = user.number_of_seats.value;

    let total = Number(seat)*100;

    console.log(total)
    deductMoney(total)
})


// deducting the money
function deductMoney(total){

    showAmt=JSON.parse(localStorage.getItem("wallet"));

        if(showAmt!=undefined&&total<=showAmt[0].balance&&showAmt[0].balance!=0){
            // creat tickt
            
            let remaing= showAmt[0].balance - total;

            showAmt[0].balance = remaing;

            localStorage.setItem("wallet", JSON.stringify(showAmt));
            showAmount();
            alert("Booking Successful!");
            window.location.href="movies.html"

        }else{
            alert("Insufficient Balance !");
            window.location.href="index.html"
        }

    localStorage.setItem("bookmovie", JSON.parse({}));
    
}