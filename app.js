const testimonial = [
    {
        name: 'Paul & Lyndsey',
        loc: 'Durham',
        product: 'Hero Trio',
        review: '"We’ve been using our Life Supplies products for over a month and have just refilled. We’re loving it all, but our favourite is the cleanser – it’s invigorating, moisturising and the grapefruit scent wakes you up in the morning!"',
        img: 'images/testimonials-1.webp'
    },
    {
        name: 'Vida',
        loc: 'Surrey',
        product: 'Maverik Toothpaste',
        review: '“What a great way to reduce plastic use. The refillable pump bottle is stylish and functional. The toothpaste itself is easy to dispense and has a lovely mild peppermint taste. Really pleased!”',
        img: 'images/testimonials-2.webp'
    }
];
let currentItem=0;
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const img=document.getElementById('test-img');
const author= document.getElementById('reviewAuthor');
const geoLocation = document.getElementById('geoLocation');
const product = document.getElementById('product');
const review = document.getElementById('review');
const shopbtn = document.querySelector('.test-shop-btn');

window.addEventListener('DOMContentLoaded', ()=>{
    debugger;
    displayTestimonials();
    displayBtns(currentItem)
})

function displayBtns(currentItem){
    if(currentItem==1){
        nextBtn.classList.add('btn-opacity');
        previousBtn.classList.remove('btn-opacity');
    }
    else if(currentItem==0){
        previousBtn.classList.add('btn-opacity');
        nextBtn.classList.remove('btn-opacity');
    }
}

const nextBtn = document.querySelector('.next-btn');
const previousBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click',()=>{
    currentItem++;
    displayBtns(currentItem);
    displayTestimonials();
});

previousBtn.addEventListener('click',()=>{
    currentItem--;
    displayBtns(currentItem);
    displayTestimonials();
})

function displayTestimonials(){ 
    let item = testimonial[currentItem];
    img.src= item.img;
    author.textContent = item.name;
    geoLocation.textContent = item.loc;
    product.textContent = item.product;
    review.textContent = item.review;
    shopbtn.innerHTML = 'Shop ' + item.product;
}