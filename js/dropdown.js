const dropdown = document.querySelector(".dropdown");
const menu = document.querySelector(".menu");


menu.addEventListener("mouseover",()=>{
    dropdown.classList.add("active");
    // const lis = document.querySelectorAll("li");
    // lis.forEach((li) => {
    //     li.addEventListener("mouseleave",()=>{
    //     dropdown.classList.remove("active");
    //     })
    // })

    const ul = document.querySelector("ul");
    ul.addEventListener("mouseleave",()=>{
        dropdown.classList.remove("active");
    })
})


