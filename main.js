const countryButton = document.getElementById("countryButton")

    countryButton.addEventListener("click", () => {
        console.log("WAT GEBEURT ER NA KLIK")
        async function getCountryInfo () {

            const response = await axios.get(
                `https://restcountries.eu/rest/v2/name/netherlands`)
            console.log(response.data);
            const countryName = response.data[0].name
            const subareaName = response.data[0].subregion
            const population = response.data[0].population

            const flag = document.getElementById("countryFlag")
            const flagOfCountry = document.createElement("img")
            flagOfCountry.setAttribute('src', response.data[0].flag);
            document.body.appendChild(flagOfCountry);

            console.log(countryName + " is situaded in " + subareaName + ". It has a population of " + population + " people.");
        }
        getCountryInfo();
    });




/*
const flag = document.getElementById("flagBelgium")
const flagOfBelgium = document.createElement("img")
flagOfBelgium.setAttribute('src', "https://restcountries.eu/data/bel.svg")
document.body.appendChild(flagOfBelgium);*/
