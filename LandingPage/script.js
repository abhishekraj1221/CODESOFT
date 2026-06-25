
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// ================================
// Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});



// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ================================
// Contact Form Validation
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.border = "2px solid red";

        }

        else {

            input.style.border = "1px solid #ccc";

        }

    });

    if (valid) {

        alert("Message Sent Successfully!");

        form.reset();

    }

    else {

        alert("Please fill all fields.");

    }

});



// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
