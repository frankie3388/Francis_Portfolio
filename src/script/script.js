const button = document.querySelector('.dropbtn');
const menu = document.querySelector('.nav-titles');

button.addEventListener('click', () => {
    menu.classList.toggle('activated');
});

// Intro text animation for ome page
const span = document.querySelector(".alter-intro-text");
const text = "Full Stack Web Developer.";

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    // If we reached the end of the string
    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 150);
}

textTypingEffect(span, text);