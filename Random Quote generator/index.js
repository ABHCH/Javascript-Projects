// selectors

const quote = document.querySelector('.quotes');
const quote_author = document.querySelector('.quotes-author');
const button = document.querySelector('.btn');
const voiceReco = document.querySelector('#voice');

const fetchData = () =>{
    fetch(`https://api.quotable.io/random`)
.then((res) => res.json()).then((data) => display(data));
}

const display = (data) => {
    // this is a object destructring
    const{content,author} = data;
    quote.textContent = `${content}`
    quote_author.textContent = ` -  ${author}`;

    voiceReco.addEventListener("click", () => {
        let sound = new SpeechSynthesisUtterance(`${quote.textContent}`);
        speechSynthesis.speak(sound);
    })
};

button.addEventListener("click", fetchData);
