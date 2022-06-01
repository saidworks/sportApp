(function(d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'scorebat-jssdk'));


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



