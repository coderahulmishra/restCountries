const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const container = document.querySelector(".countryDetails .container");
const backBtn = document.querySelector("#backBtn");

backBtn.addEventListener("click",() => {
    window.history.back();
})

function fetchCountry(Image,Name,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages){
    const countryImageContainer = document.createElement("div");
    const countryImage = document.createElement("img");
    const countryValuesContainer = document.createElement("div");
    const countryName = document.createElement("p");
    const countryDetail = document.createElement("div");
    const firstDetailContainer = document.createElement("div");
    const countryNativeName = document.createElement("p");
    const countryNativeNameValue = document.createElement("span");
    const countryPopulationName = document.createElement("p");
    const countryPopulationNameValue = document.createElement("span");
    const countryRegionName = document.createElement("p");
    const countryRegionNameValue = document.createElement("span");
    const countrySubRegionName = document.createElement("p");
    const countrySubRegionNameValue = document.createElement("span");
    const countryCapitalName = document.createElement("p");
    const countryCapitalNameValue = document.createElement("span");
    const secondDetailContainer = document.createElement("div");
    const coutnryTopLevelDomain = document.createElement("p");
    const coutnryTopLevelDomainValue = document.createElement("span");
    const coutnryCurrencies = document.createElement("p");
    const coutnryCurrenciesValue = document.createElement("span");
    const coutnryLanguages = document.createElement("p");
    const coutnryLanguagesValue = document.createElement("span");
    const countryBorder = document.createElement("div");
    const borderTitile = document.createElement("p");

    countryImageContainer.classList.add("countryImageContainer");
    countryValuesContainer.classList.add("countryValuesContainer");
    countryName.setAttribute("id","countryName");
    countryDetail.classList.add("countryDetail");
    firstDetailContainer.classList.add("firstDetailContainer");
    countryNativeName.setAttribute("id","nativeName");
    countryPopulationName.setAttribute("id","population");
    countryRegionName.setAttribute("id","region");
    countrySubRegionName.setAttribute("id","subRegion");
    countryCapitalName.setAttribute("id","capital");
    secondDetailContainer.classList.add("secondDetailContainer");
    coutnryTopLevelDomain.setAttribute("id","topLevelDomain");
    coutnryCurrencies.setAttribute("id","currencies");
    coutnryLanguages.setAttribute("id","languages");
    countryBorder.classList.add("countryBorder");

    countryImage.src = Image;
    countryName.textContent = Name;
    countryNativeName.textContent = "Native Name: ";
    countryNativeNameValue.textContent = nativeName;
    countryPopulationName.textContent = "Population: ";
    countryPopulationNameValue.textContent = population;
    countryRegionName.textContent = "Region: ";
    countryRegionNameValue.textContent = region;
    countrySubRegionName.textContent = "Sub Region: ";
    countrySubRegionNameValue.textContent = subRegion;
    countryCapitalName.textContent = "Capital: ";
    countryCapitalNameValue.textContent = capital;
    coutnryTopLevelDomain.textContent = "Top Level Domain: ";
    coutnryTopLevelDomainValue.textContent = topLevelDomain;
    coutnryCurrencies.textContent = "Currencies: ";
    coutnryCurrenciesValue.textContent = currencies;
    coutnryLanguages.textContent = "Languages: ";
    coutnryLanguagesValue.textContent = languages;
    borderTitile.textContent = "Border Countries: ";


    container.appendChild(countryImageContainer);
    countryImageContainer.appendChild(countryImage);
    container.appendChild(countryValuesContainer);
    countryValuesContainer.appendChild(countryName);
    countryValuesContainer.appendChild(countryDetail);
    countryDetail.appendChild(firstDetailContainer);
    firstDetailContainer.appendChild(countryNativeName);
    countryNativeName.appendChild(countryNativeNameValue);
    firstDetailContainer.appendChild(countryPopulationName);
    countryPopulationName.appendChild(countryPopulationNameValue);
    firstDetailContainer.appendChild(countryRegionName);
    countryRegionName.appendChild(countryRegionNameValue);
    firstDetailContainer.appendChild(countrySubRegionName);
    countrySubRegionName.appendChild(countrySubRegionNameValue);
    firstDetailContainer.appendChild(countryCapitalName);
    countryCapitalName.appendChild(countryCapitalNameValue);
    countryDetail.appendChild(secondDetailContainer);
    secondDetailContainer.appendChild(coutnryTopLevelDomain);
    coutnryTopLevelDomain.appendChild(coutnryTopLevelDomainValue);
    secondDetailContainer.appendChild(coutnryCurrencies);
    coutnryCurrencies.appendChild(coutnryCurrenciesValue);
    secondDetailContainer.appendChild(coutnryLanguages);
    coutnryLanguages.appendChild(coutnryLanguagesValue);
    countryValuesContainer.appendChild(countryBorder);
    countryBorder.appendChild(borderTitile);
}

fetch(`https://restcountries.com/v3.1/name/${urlParams.get("name")}?fullText=true`)
.then((res) => res.json())
.then((data) => {
    data.map((el) => {         
        fetchCountry(el.flags.svg,el.name.common,"",el.population.toLocaleString("en-IN"),el.region,el.subregion,el.capital.join(", "),el.tld[0],el.currencies[0]);
    })
})

