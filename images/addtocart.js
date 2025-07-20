

const product = [
    {
        id: 0,
        image: 'images/product12-removebg-preview.png',
        title: 'golden necklace',
        price: 120,
    },
    {
        id: 1,
        image: 'images/product1-removebg-preview.png',
        title: 'pearl necklace',
        price: 60,
    },
    {
        id: 2,
        image: 'images/product13.png',
        title: 'rose tinted necklace',
        price: 230,
    },
    {
        id: 3,
        image: 'images/ring23.jpeg',
        title: 'green gem ring',
        price:500,
    },
    {
        id: 3,
        image: 'images/LR01302R-6_108-removebg-preview.png',
        title: 'rosering',
        price:500,
    },
    {
        id: 3,
        image: 'images/org22145_2_sdckuurspfo8lig3-removebg-preview.png',
        title: 'green gem ring',
        price:500,
    },


] 
    
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
