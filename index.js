// Store the wallet amount to your local storage with key "amount"


// Architect to create a wallet in local storage
class Balance{

    constructor(amt){
        this.balance=amt
    }
}

// Taking the input amount from the user
document.querySelector("#add_to_wallet").addEventListener("click", ()=>{

    let amt = document.querySelector("#amount").value;

    let wallet = [new Balance(amt)];

    localStorage.setItem("wallet", JSON.stringify(wallet));

    showAmount();
});

// Showing the amount on the dom
showAmount();
function showAmount(){
let showAmt = JSON.parse(localStorage.getItem("wallet"))||[];

document.querySelector("#wallet").innerText = showAmt[0].balance
}

// Redicreting to movies booking page
document.querySelector("#book_movies").addEventListener("click", ()=>{
    window.location.href="movies.html"
})
