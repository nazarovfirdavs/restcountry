let countriesELem = document.querySelector(".countries");
let dropDown = document.querySelector(".dropDown");
let dropElem = document.querySelector(".drop");
let region = document.querySelectorAll(".region");
let search = document.querySelector(".search");
let toggle = document.querySelector(".toggle");
let moon = document.querySelector(".moon")
async function getCountry() {
    let url = await fetch("https://restcountries.com/v3.1/all");
    let res = await url.json();
    console.log(res);
    res.forEach(element => {
        ShowCountry(element)
    });
}
getCountry()
function ShowCountry(data) {
        let country = document.createElement("div")
        country.classList.add(".country")
        country.innerHTML = `<div class="country-img">
        <img src="${data.flags.png}" alt="">
    </div>
    <div class="country-info">
        <h5 class ="countryName">${data.name.common}</h5>
        <p><strong>Population</strong>: ${data.population};</p>
        <p class ="regionName"><strong>Region</strong>: ${data.region};</p>
        <p><strong>Capital</strong>: ${data.capital}.</p>
    </div>`
    countriesELem.appendChild(country)
    country.addEventListener("click", ()=>{
        showCountryDetail()
    })
}
dropDown.addEventListener("click", ()=>{
    dropElem.classList.toggle("showDropDown")
    console.log("hello");
})
let regionName = document.getElementsByClassName("regionName")
let countryName = document.getElementsByClassName("countryName")
region.forEach(element => {
    element.addEventListener("click", ()=>{
        console.log(element)
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText)
            if (elem.innerText.includes(element.innerText) || element.innerText =="All") {
                elem.parentElement.parentElement.style.display = 'grid'
            }else(
               elem.parentElement.parentElement.style.display = 'none'
               )
        })
    })
});

//search qismi
search.addEventListener("input", ()=>{
    console.log(search.value.toLowerCase())
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = 'grid'
        }else(
           elem.parentElement.parentElement.style.display = 'none'
           )
    })
})
//dark mode qismi
toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})
let back = document.querySelector(".back");
let countryModal = document.querySelector(".countryModal");
back.addEventListener("click", ()=>{
    countryModal.classList.toggle("show")
})
function showCountryDetail() {
    countryModal.classList.toggle("show")
}