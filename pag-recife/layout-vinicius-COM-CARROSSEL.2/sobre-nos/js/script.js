// Política de privacidade

document.getElementById("privacy-policy-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("privacy-policy").style.display = "flex"; 
});


function closePrivacyPolicy() {
    document.getElementById("privacy-policy").style.display = "none"; 
}

window.addEventListener("click", function(event) {
    var privacyPolicy = document.getElementById("privacy-policy");
    var content = document.querySelector(".privacy-policy-content");

    if (privacyPolicy.style.display === "flex" && !content.contains(event.target) && !event.target.matches("#privacy-policy-link")) {
        privacyPolicy.style.display = "none";
    }
});
