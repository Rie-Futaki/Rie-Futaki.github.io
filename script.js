const $animated_text = document.querySelector(".animated_text");
const text = $animated_text.textContent;
$animated_text.textContent = '';


for (let i = 0; i < text.length; i++){
    const letter = document.createElement('span')
    letter.textContent = text[i]
    letter.style.animationDelay = `${i * 0.3}s`
    $animated_text.appendChild(letter)
}