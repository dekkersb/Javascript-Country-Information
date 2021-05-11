const countryButton = document.getElementById("countryButton")

    countryButton.addEventListener("click", () => {
        console.log("WAT GEBEURT ER NA KLIK")
        async function getCountryInfo () {

            const response = await axios.get(
                `https://restcountries.eu/rest/v2/name/france`)

            console.log(response.data);

            const countryName = response.data[0].name
            const subareaName = response.data[0].subregion
            const population = response.data[0].population
            const capital = response.data[0].capital
            const currency = response.data[0].currencies[0].name
            const language1 = response.data[0].languages[0].name
/*            const language2 = response.data[0].languages[1].name
            const language3 = response.data[0].languages[2].name*/

            const flag = document.getElementById("countryFlag")
            const flagOfCountry = document.createElement("img")
            flagOfCountry.setAttribute('src', response.data[0].flag);
            flag.appendChild(flagOfCountry);

            const countryInfo = countryName + " is situaded in " + subareaName + ". It has a population of " + population + " people."
            const capitalCurrency = "The capital is " + capital + " and you can pay with " + currency + "'s."
            const languageOfCountry = "They speak " + language1 + "." /*+ ", " + language2 + " and " + language3 + "."*/
            const displayCountryInfo = document.getElementById("countryInfo")
            displayCountryInfo.innerText = countryName + "\n" + countryInfo + "\n" + capitalCurrency + "\n" + languageOfCountry;
        }

        getCountryInfo();
    });




/*
const flag = document.getElementById("flagBelgium")
const flagOfBelgium = document.createElement("img")
flagOfBelgium.setAttribute('src', "https://restcountries.eu/data/bel.svg")
document.body.appendChild(flagOfBelgium);*/
