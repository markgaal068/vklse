function myFunction(){
    document.querySelector("html").style.overflow = document.querySelector("html").style.overflow === "hidden" ? " visible " : "hidden";

}


//toggle icon navbar



function hamburger(){
    let menuIcon = document.getElementById("icon");
    let navbar = document.getElementById("navbar");
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//scroll reveal

/*ScrollReveal({
    reset: true,
    distance: '80px',
    duration:  2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .teams-container, .news-container, .contact form', { origin: 'bottom' });*/


    //Email cucc
    function send()  {
        var data = {
            "email": document.getElementById('email').value,
            "name": document.getElementById('nev').value,
            "subject": document.getElementById('subject').value,
            "text": document.getElementById('text').value,
            "tel": document.getElementById('phone').value
        };

        fetch("https://jolly-crab-gaiters.cyclic.app", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Sikeres e-mail küldés!");
                window.location.reload();

            })
            .catch((error) => {
                console.error("Error: ", error);
                alert("Oops!");

            });
    }
