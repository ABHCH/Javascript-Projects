const data = [
    {
        id:1,
        img:'https://rukminim1.flixcart.com/image/756/907/kwfaj680/kurta/k/a/c/l-05sk68-blue-armaan-ethnic-original-imag943dzhdyg4dt.jpeg?q=50',
        author:'Abhishek Chaturvedi',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore impedit earum, voluptate illum excepturi ullam minus molestiae eius quo. Velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab non accusantium modi molestiae veniam tempora vitae eaque illum vel'
    },
    {
        id:2,
        img:'https://rukminim1.flixcart.com/image/412/494/kuyf8nk0/ethnic-set/c/a/w/42-03kp19-peach-armaan-ethnic-original-imag7yg4qnb3r4uy.jpeg?q=50',
        author:'Komal chaturvedi',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore impedit earum, voluptate illum excepturi ullam minus molestiae eius quo. Velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab non accusantium modi molestiae veniam tempora vitae eaque illum vel'
    },
    {
        id:3,
        img:'https://rukminim1.flixcart.com/image/412/494/kpsnzww0/kurta/z/l/b/xl-grey-sws2902-allan-peter-original-imag3y6tzaaxwkhy.jpeg?q=50',
        author:'Mehak chaturvedi',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore impedit earum, voluptate illum excepturi ullam minus molestiae eius quo. Velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab non accusantium modi molestiae veniam tempora vitae eaque illum vel'
    }
]

// select the item
const authorImage = document.querySelector('.author-image');
const authorName = document.querySelector('.author-name');
const description = document.querySelector('.description');
const nextButton = document.querySelector('.next-btn');
const prevbutton = document.querySelector('.prev-btn');
const randomButton = document.querySelector('.random-btn');

let currentItem = 0;
// for loading the DOM Content
window.addEventListener('DOMContentLoaded', (e) =>{
    showPerson(data[currentItem]);
})

const showPerson = (item) => {
    authorImage.src = item.img;
    authorName.textContent = item.author;
    description.textContent = item.description;
}
showPerson(data[currentItem]);

nextButton.addEventListener("click", () => {
   currentItem++;
   
   if(currentItem > data.length - 1){
       currentItem = 0;
   }
   showPerson(data[currentItem]);

})

prevbutton.addEventListener("click", () => {
    currentItem--;
    if(currentItem < data.length - 1){
        currentItem  = data.length - 1;
    }
    showPerson(data[currentItem]);
})

randomButton.addEventListener("click", () =>{
    currentItem = Math.floor(Math.random() * data.length - 1);
    showPerson(data[currentItem]);
})
