/* =========================
   AUTO EXPERT ALGER
   JAVASCRIPT FUNCTIONS
========================= */



// ================= HEADER SCROLL EFFECT =================


const header = document.getElementById("header");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



// ================= SCROLL PROGRESS BAR =================


const progressBar = document.getElementById("progressBar");


function updateProgressBar(){

    if(!progressBar) return;

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progressBar.style.width = percent + "%";

}


window.addEventListener("scroll", updateProgressBar);

updateProgressBar();







// ================= MOBILE MENU =================


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


hamburger.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});



document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});







// ================= SCROLL REVEAL =================


const reveals = document.querySelectorAll(".reveal");


function revealAnimation(){


    reveals.forEach(item=>{


        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            item.classList.add("active");

        }


    });


}



window.addEventListener("scroll", revealAnimation);

revealAnimation();







// ================= COUNTER ANIMATION =================


const counters = document.querySelectorAll("[data-target]");


let counterStarted = false;



function startCounter(){


    const stats = document.querySelector(".stats");


    if(!stats) return;


    const position = stats.getBoundingClientRect().top;


    if(position < window.innerHeight && !counterStarted){


        counterStarted = true;


        counters.forEach(counter=>{


            let target = Number(counter.dataset.target);

            let suffix = counter.dataset.suffix || "";

            let count = 0;


            let speed = target / 80;



            let update = ()=>{


                count += speed;


                if(count < target){


                    counter.innerText = Math.ceil(count) + suffix;


                    requestAnimationFrame(update);


                }else{


                    counter.innerText = target + suffix;


                }


            };


            update();



        });



    }



}



window.addEventListener("scroll",startCounter);







// ================= FAQ ACCORDION =================



const faqButtons = document.querySelectorAll(".faq-item button");



faqButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const item = button.parentElement;


        item.classList.toggle("active");



    });



});








// ================= CONTACT FORM =================



const form = document.getElementById("appointmentForm");

const modal = document.getElementById("successModal");

const closeModal = document.getElementById("closeModal");

const modalWhatsapp = document.getElementById("modalWhatsapp");




form.addEventListener("submit",(e)=>{


    e.preventDefault();



    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let vehicle = document.getElementById("vehicle").value;

    let service = document.getElementById("service").value;

    let message = document.getElementById("message").value;



    let whatsappMessage =

`Bonjour Auto Expert Alger,

Je souhaite prendre rendez-vous.

Nom: ${name}

Téléphone: ${phone}

Véhicule: ${vehicle}

Service: ${service}

Message:
${message}`;



    let whatsappURL =

    "https://wa.me/213557753524?text="

    + encodeURIComponent(whatsappMessage);



    modalWhatsapp.href = whatsappURL;



    modal.classList.add("show");



    form.reset();



});







// ================= CLOSE MODAL =================



closeModal.addEventListener("click",()=>{


    modal.classList.remove("show");


});




modal.addEventListener("click",(e)=>{


    if(e.target === modal){

        modal.classList.remove("show");

    }


});







// ================= SMOOTH SCROLL =================


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        let target=document.querySelector(this.getAttribute("href"));


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







// ================= IMAGE LAZY LOADING =================


document.querySelectorAll("img").forEach(img=>{


    img.loading="lazy";


});







// ================= ACTIVE NAV LINK ON SCROLL =================


const sectionsWithIds = document.querySelectorAll("section[id]");

const navAnchorLinks = document.querySelectorAll(".nav-links a");


function highlightActiveLink(){


    let current = "";


    sectionsWithIds.forEach(section=>{


        const sectionTop = section.offsetTop - 130;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });


    navAnchorLinks.forEach(link=>{


        link.classList.remove("active-link");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }


    });


}


window.addEventListener("scroll", highlightActiveLink);

highlightActiveLink();
