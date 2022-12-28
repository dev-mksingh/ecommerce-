const toggleMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-modal');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const presentSlide = document.querySelector('.present img');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const orderNumber = document.querySelector('.order-number');
const toCart = document.querySelector('.cart');
const quantityNumber = document.querySelector('.quantity-number');
const basePrice = document.querySelector('.base-price');
const quantity = document.querySelector('.quantity');
const totalAmount = document.querySelector('.total-amount');
const trolley = document.querySelector('.trolley');
const cartCheckout = document.querySelector('.cart-checkout');
const removeItems = document.querySelector('.remove-items');
const checkoutBtn = document.querySelector('.checkout-btn');
const cartModal = document.querySelector('.cart-content-remover');
const closeSlider = document.querySelector('.close-slider-modal');
const sliderModal = document.querySelector('.slider-modal');
const openModal = document.querySelectorAll('.desktop-version .thumbnails img');
const sliderModal2 = document.querySelector('.slider-modal-2');
const previous2 = document.querySelector('.slider-modal-2 .previous');
const next2 = document.querySelector('.slider-modal-2 .next');
const presentSlide2 = document.querySelector('.slider-modal-2 .present img');
let slides = 1;


toggleMenu.addEventListener('click', (evt)=>{
    toggleMenu.classList.toggle('menu-toggle-close');
    menu.classList.toggle('menu-display-modal');
})

previous.addEventListener('click',()=>{
    slides--;
    if(slides<1){
        slides = 4;
    }
    presentSlide.setAttribute('src',`images/image-product-${slides}.jpg`);
})

previous2.addEventListener('click',()=>{
    slides--;
    if(slides<1){
        slides = 4;
    }
    presentSlide2.setAttribute('src',`images/image-product-${slides}.jpg`);
})

next.addEventListener('click',()=>{
    slides++;
    if(slides>4){
        slides = 1;
    }
    presentSlide.setAttribute('src',`images/image-product-${slides}.jpg`);
    
})

next2.addEventListener('click',()=>{
    slides++;
    if(slides>4){
        slides = 1;
    }
    presentSlide2.setAttribute('src',`images/image-product-${slides}.jpg`);
    
})

plus.addEventListener('click', ()=> {
    orderNumber.textContent = Number(orderNumber.textContent)+1;
})

minus.addEventListener('click', ()=> {
    if(Number(orderNumber.textContent)==0) {
        alert('please enter appropriate order number');
    }else {
    orderNumber.textContent = Number(orderNumber.textContent)-1;
    }
})

toCart.addEventListener('click', ()=>{
    if(Number(orderNumber.textContent)!=0){
    quantityNumber.textContent = orderNumber.textContent;
    quantityNumber.style.display = "block";
    quantity.textContent = Number(quantityNumber.textContent);
    totalAmount.textContent = `$ ${Number(quantity.textContent)* Number(basePrice.textContent)}`;
    }else {
        quantityNumber.style.display = "none";
    }
})

trolley.addEventListener('click',()=>{
    cartCheckout.classList.toggle('cart-checkout-close');
    quantity.textContent = Number(quantityNumber.textContent);
    totalAmount.textContent = `$ ${Number(quantity.textContent)* Number(basePrice.textContent)}`;
    if(Number(quantity.textContent)!=0) {
        cartModal.style.display = "none";
    }
    else {
        cartModal.style.display = "flex";
    }
})

removeItems.addEventListener('click',()=>{
    removeItems.parentElement.remove();
    checkoutBtn.style.display = "none";
    quantityNumber.style.display = "none";
    cartModal.style.display = "flex";
})

closeSlider.addEventListener('click',()=>{
    sliderModal2.style.display = "none";
})

for(let i = 0; i<openModal.length; i++) {
    openModal[i].addEventListener('click',()=>{
        slides=i+1;
        sliderModal2.style.display = "block";
        presentSlide2.setAttribute('src',`images/image-product-${slides}.jpg`);
        for(let j = 0; j<openModal.length; j++) {
            if(i==j) {
                openModal[j].style.opacity = 0.3;
            }else {
                openModal[j].style.opacity = 1;
            }
        }
    })
}