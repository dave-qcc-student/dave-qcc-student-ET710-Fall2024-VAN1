const messages = [
    "Welcome to our website!",
    "Explore the latest updates.",
    "Contact us for more information",
    "Thank you for visiting!",
    "...",
    "Main Frame hacked",
    "website will explode in...",
    "3..",
    "2..",
    "1..",
    "💥",
]

const container = document.getElementById("text-container");

for (let index = 0; index < messages.length; index++) {
    setTimeout(function() {
        const paragraph = document.createElement("p"); 
        paragraph.textContent = messages[index];
        paragraph.className = "fade-in"; 

        if (index === messages.length - 1) {
            setTimeout(() => document.body.classList.add("shake"), 500); 
            setTimeout(() => document.body.classList.remove("shake"), 2000); 
        }

        appendElement(paragraph); 
    }, index * 1000);
}

function appendElement(para) {
    container.appendChild(para);
}
