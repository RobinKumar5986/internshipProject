const products=[
    {
        id:1,
        title:"AIR FORCE",
        price:5000,
        colors:[
            {
                code:"black",
                img:"./img/air.png"
            },
            {
                code :"darkblue",
                img:"./img/air2.png"
            },
        ],
    },
    {
        id:2,
        title:"JORDEN",
        price:3000,
        colors:[
            {
                code:"lightgray",
                img:"./img/jordan.png"
            },
            {
                code :"green",
                img:"./img/jordan2.png"
            },
        ],
    },
    {   
        id:3,
        title:"PUMA",
        price:4000,
        colors:[
            {
                code:"lightgray",
                img:"./img/blazer.png"
            },
            {
                code :"green",
                img:"./img/blazer2.png"
            },
        ],
    },
    {   
        id:4,
        title:"BATA",
        price:6000,
        colors:[
            {
                code:"black",
                img:"./img/crater.png"
            },
            {
                code :"white",
                img:"./img/crater2.png"
            },
        ],
    },
    {   
        id:5,
        title:"HIPPIE",
        price:2000,
        colors:[
            {
                code:"lightgray",
                img:"./img/hippie.png"
            },
            {
                code :"black",
                img:"./img/hippie2.png"
            },
        ],
    }
];

const wrapper=document.querySelector(".sliderWrapper")

// let chosenProduct=products[0]
const currentImg=document.querySelector(".productImg")
const currentTitl=document.querySelector(".productTitle")
const currentPrice=document.querySelector(".productPrice")
const currentColor=document.querySelectorAll(".color")
const currentSize=document.querySelectorAll(".size")


const manuItem=document.querySelectorAll(".menueItem")
manuItem.forEach((item,index) => { 
    item.addEventListener("click",() => {
        //changing the current sullide to the next
        wrapper.style.transform=`translateX(${-100*index}vw)`;

        //changing the chossen product

        chosenProduct=products[index]
        //Changing the product
        currentTitl.textContent=chosenProduct.title
        currentPrice.textContent=chosenProduct.price
        currentImg.src=chosenProduct.colors[0].img
        //new coloe
        currentColor.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;

        });
    });
});
currentColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentImg.src=chosenProduct.colors[index].img
    });
});

currentSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentSize.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        });
        size.style.backgroundColor="green"
        size.style.color="white"
    });
});

const productButton=document.querySelector(".productButton")
const payment=document.querySelector(".payment")
const close=document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});
close.addEventListener("click",()=>{
    payment.style.display="none"
});