// 1. Typing Effect for Hero
const typingSpan = document.getElementById('typing-text');
const titles = ["a Frontend Developer.", "a MERN Learner.", "a Creative Designer."];
let wordIdx = 0;
let charIdx = 0;

function typeEffect() {
    if (charIdx < titles[wordIdx].length) {
        typingSpan.textContent += titles[wordIdx].charAt(charIdx);
        charIdx++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIdx > 0) {
        typingSpan.textContent = titles[wordIdx].substring(0, charIdx - 1);
        charIdx--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIdx = (wordIdx + 1) % titles.length;
        setTimeout(typeEffect, 500);
    }
}

// 2. Navbar Scroll Style Change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. Inject 9 Projects via Loop
const projects = [
    { name: "Taj Institute", type: "Education", img: "https://images.unsplash.com/photo-1547916105-e44d6aa9cc28?w=600", live: "https://tajinstitute.netlify.app", github: "https://github.com/shoaib-ahmed-laghari/Taj-Institute.git" },
    { name: "Personal Portfolio", type: "Personal", img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400", live: "#", github: "#" },
    { name: "Weather Pro", type: "API Web App", img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400", live: "#", github: "#" },
    { name: "Task Tracker", type: "Productivity", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400", live: "#", github: "#" },
    { name: "Admin Panel", type: "Dashboard", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", live: "#", github: "#" },
    { name: "FitApp", type: "Fitness", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400", live: "#", github: "#" },
    { name: "Quiz Master", type: "Game", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", live: "#", github: "#" },
    { name: "Travel Blog", type: "CMS", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400", live: "#", github: "#" },
    { name: "Photo Gallery", type: "Grid System", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400", live: "#", github: "#" }
];

const projectWrap = document.getElementById('project-container');
projectWrap.innerHTML = ""; // Container clear karne ke liye

projects.forEach(p => {
    projectWrap.innerHTML += `
        <div class="col-md-4">
            <div class="card project-card border-0 shadow-lg rounded-4 h-100 overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img src="${p.img}" class="card-img-top project-img" alt="${p.name}">
                </div>
                <div class="card-body p-4">
                    <span class="badge bg-primary-soft text-primary mb-2">${p.type}</span>
                    <h5 class="fw-bold mb-3">${p.name}</h5>
                    <p class="small text-muted mb-4">A modern solution built with clean code and high performance.</p>
                    <div class="d-flex gap-2">
                        <a href="${p.live}" class="btn btn-primary btn-sm rounded-pill px-3 flex-grow-1">
                            <i class="bi bi-box-arrow-up-right me-1"></i> Live Demo
                        </a>
                        <a href="${p.github}" class="btn btn-outline-dark btn-sm rounded-pill px-3 flex-grow-1">
                            <i class="bi bi-github me-1"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Run Typing Animation
document.addEventListener('DOMContentLoaded', typeEffect);