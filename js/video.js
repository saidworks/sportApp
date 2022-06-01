// const sportEl  = document.querySelector('.sport');
const overview = document.querySelector('.overview');
const sportInfo  = document.querySelector('.sport-info');
const form = document.getElementById('form');
const sports = document.querySelectorAll('.sport');
const search = document.getElementById('search');
const main = document.getElementById('main');
const table = document.querySelector("table");

  



//API logic

const API_URL = "https://www.scorebat.com/video-api/v3/feed/?token=MjAyOTRfMTY1NDAxMjk2Nl83YzhmMDUwNWZmMjVhYzE5ZTRmNTE2NzI0MjYxMzEwMzNjNTc0YjQ4";

//implement search https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/

// get sports names
const sportVideos = getsportsName(API_URL);

//fetch the data from API
async function getsportsName(url){
    const res = await fetch(url);
    const data = await res.json();
    showSports(data.response);
}

const showSports = function(sportVideos) {

  
    for(const sport of sportVideos){
        const videoRow = document.createElement("tr");
        videoRow.innerHTML = `
            <td class="title">${sport.title}</td>
            <td class="competition">${sport.competition}</td>
            <td class="date">${sport.date.split('T')[0]}</td>
            <td class="video">${sport.videos[0].embed}</td>

        `;
        table.appendChild(videoRow);

        form.addEventListener('submit',(e)=> {
            e.preventDefault();
            const searchTerm = search.value;
    
            if(videoRow.textContent.toLowerCase().includes(searchTerm.toLowerCase())){
                videoRow.classList.remove("is-hidden")
    
            }
            else{
                videoRow.classList.add("is-hidden");
    
                }
                })

}
}
