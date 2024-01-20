
const filterButtons = document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;
for(let i=0; i<filterButtons.length; i++)
{
        for(let j=0; j<filterButtons.length; j++){
            if(filterButtons[i].className == "active")
            {
                console.log(filterButtons[i].getAttribute("data-target"))
                for(let k=0; k<items.length; k++){
                    items[k].style.display="none";
                    if(filterButtons[i].getAttribute("data-target")==items[k].getAttribute("data-id"))
                    {
                        items[k].style.display="block"; 
                    }
                }
                
            }
        }
    filterButtons[i].addEventListener("click",function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block"; 
            }
        }

    })
}


window.onscroll=function(){
    
    const docScrollTop = document.documentElement.scrollTop;
    if(window.innerWidth>991){
        
        if (docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

const navbar = document.querySelector(".navbar");
    a=navbar.querySelectorAll("a");
    a.forEach(function(element){
        element.addEventListener("click",function(){
            for(let i=0; i<a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active")
            document.querySelector(".navbar").classList.toggle("show");
        })
    })

const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})

