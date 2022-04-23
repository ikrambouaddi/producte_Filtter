const btns =document.querySelectorAll('.btn')
const storProduct=document.querySelectorAll('.stor-product');
for (i=0; i< btns.length ; i++){
    btns[i].addEventListener("click",(e)=>{
        e.preventDefault();
        const filter = e.target.dataset.filter
// console.log(filter)
storProduct.forEach((product)=> {
    if(filter == "all"){
        product.style.display ="block";
    }else{
        if(product.classList.contains(filter)){
        product.style.display ="block";
        }else{
            product.style.display ="none";
        }
    }
})
    })
}

const search =document.getElementById("search");
search.addEventListener("keyup",(e)=>{
    e.preventDefault();
    const shearchValue =search.value.toLowerCase().trim();
    for (i=0; i<storProduct.length;i++){
        if(storProduct[i].classList.contains(shearchValue)){
            storProduct[i].style.display = "block";
        }else if(shearchValue == ""){
            storProduct[i].style.display = "block";
        }else{
            storProduct[i].style.display ="none";
        }
    }
})