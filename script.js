/**
 * Club Connect - Core Logic
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Greeting System
    const initGreeting = () => {
        const greetEl = document.getElementById("greeting");
        if (!greetEl) return;

        const hour = new Date().getHours();
        let status = {
            message: "Welcome to Club Connect!",
            icon: "👋"
        };

        if (hour < 12) {
            status = { message: "Good Morning", icon: "☀️" };
        } else if (hour < 17) {
            status = { message: "Good Afternoon", icon: "🌞" };
        } else {
            status = { message: "Good Evening", icon: "🌙" };
        }

        greetEl.innerHTML = `<span>${status.icon}</span> ${status.message}, Explorer!`;
        
        // Auto-hide greeting after 5 seconds
        setTimeout(() => {
            greetEl.style.opacity = "0";
            greetEl.style.transform = "translateX(50px)";
            greetEl.style.transition = "0.5s ease-out";
        }, 5000);
    };

    // 2. Active Link Highlander
    const setActiveLink = () => {
        let currentPath = window.location.pathname.split("/").pop();
        if (currentPath === "" || currentPath === "index.html") currentPath = "index.html";
        
        const navLinks = document.querySelectorAll("nav a");
        
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === currentPath) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    // 3. Reveal on Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll(".club-card, .event-card, .club-detail");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initialize all systems
    initGreeting();
    setActiveLink();
    
    // Add default styles for scroll reveal
    const reveals = document.querySelectorAll(".club-card, .event-card");
    reveals.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
});
