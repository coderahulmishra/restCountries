const countryCardContainer = document.querySelector(".countries .container")
const input = document.querySelector("#inputBox");
const filter = document.querySelector("#filter");

function countryCard(Image,Name,Population,Region,Capital){
            const countryCard = document.createElement("a");
            const countryImageContainer = document.createElement("div");
            const countryImage = document.createElement("img");
            const countryContentContainer = document.createElement("div");
            const countryName = document.createElement("p");
            const countryPopulation = document.createElement("p");
            const countryPopulationValue = document.createElement("span");
            const countryRegion = document.createElement("p");
            const countryRegionValue = document.createElement("span");
            const countryCapital = document.createElement("p");
            const countryCapitalValue = document.createElement("span");


            countryCard.classList.add("countryCard");
            countryImageContainer.classList.add("countryImageContainer");
            countryContentContainer.classList.add("countryContentContainer");
            countryName.setAttribute("id","countryName");
            countryPopulation.setAttribute("id","countryPopulation");
            countryRegion.setAttribute("id","countryRegion");
            countryCapital.setAttribute("id","countryCapital");

            countryCard.href = `./pages/country.html?name=${Name}`
            countryImage.src = Image;
            countryName.textContent = Name;
            countryPopulation.textContent = "Population: ";
            countryPopulationValue.textContent = Population;
            countryRegion.textContent = "Region: ";
            countryRegionValue.textContent = Region;
            countryCapital.textContent = "Capital: ";
            countryCapitalValue.textContent = Capital;

            countryCard.appendChild(countryImageContainer);
            countryImageContainer.appendChild(countryImage);

            countryCard.appendChild(countryContentContainer);
            countryContentContainer.appendChild(countryName);
            countryContentContainer.appendChild(countryPopulation);
            countryPopulation.appendChild(countryPopulationValue);
            countryContentContainer.appendChild(countryRegion);
            countryRegion.appendChild(countryRegionValue);
            countryContentContainer.appendChild(countryCapital);
            countryCapital.appendChild(countryCapitalValue);

            countryCardContainer.appendChild(countryCard);
}

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
    data.map((el) => {
        console.log(el.capital);
        countryCard(el.flags.svg,el.name.common,el.population.toLocaleString('en-IN'),el.region,el.capital)
    })
})

// fetch("https://restcountries.com/v3.1/name/ind")
// .then((res) => res.json())
// .then((data) => console.log(data))


input.addEventListener("input",(e) => {
    countryCardContainer.innerHTML = ""
    fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
    .then((res) => res.json())
    .then((data2) => {
        data2?.map((el) => {
            countryCard(el.flags.svg,el.name.common,el.population.toLocaleString('en-IN'),el.region,el.capital)
        })
    })
})

filter.addEventListener("change",(e) => {
    countryCardContainer.innerHTML = ""
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((el) => {
            countryCard(el.flags.svg,el.name.common,el.population.toLocaleString('en-IN'),el.region,el.capital)
        })
    })
})