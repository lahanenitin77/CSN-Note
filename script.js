document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

function buyNow() {
    document.getElementById("payment").style.display = "block";
}

function paid() {

    let code = prompt("Enter Access Code");

    const validCodes = [
        "CSN10",
        "CSN264",
        "CSN45",
        "CSN95"
        

    ];

    if(validCodes.includes(code)) {
        sessionStorage.setItem("access", "granted");
        window.location.href = "viewer.html";
    } else {
        alert("Invalid Code");
    }
}