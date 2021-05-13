const countryButton = document.getElementById("countryButton")

    countryButton.addEventListener("click", async function()  {

        const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/zimbabwe`)

        console.log(response.data[0])

        const countryName = response.data[0].name;
        const subareaName = response.data[0].subregion;
        const population = response.data[0].population;
        const capital = response.data[0].capital;
        let currency = [];
        let language = [];

        const flag = document.getElementById("countryFlag");
        const flagOfCountry = document.createElement("img");
        flagOfCountry.setAttribute('src', response.data[0].flag);
        flag.appendChild(flagOfCountry);

        function getCountryInfo () {
            const displayCountryInfo = document.getElementById("countryInfo");
            const countryInfo = countryName + " is situaded in " + subareaName + ". It has a population of " + population + " people.";
            const displayCountryName = document.getElementById("countryName");

            console.log(countryInfo);

            displayCountryName.textContent = countryName;
            displayCountryInfo.textContent = countryInfo;

            console.log("The capital is " + capital);
        }

        function getCurrency () {
            let capitalCurrency = [];
            for (let i = 0; i < response.data[0].currencies.length; i++) {
                currency[i] = response.data[0].currencies[i].name + "'s";
            }
            if (currency.length === 1) {
                capitalCurrency = "The capital is " + capital + " and you can pay with " + currency + ".";
            } if (currency.length === 2) {
                capitalCurrency = "The capital is " + capital + " and you can pay with " + currency.join(" and ") + ".";
            } else {
                capitalCurrency = "The capital is " + capital + " and you can pay with " + currency.slice(0, currency.length -2).join(", ") + " and " + currency.slice(length-2, length-1) + ".";
            }
            const displayCountryCurrency = document.getElementById("countryCurrency");
            displayCountryCurrency.textContent = "\n" + capitalCurrency;

            console.log("and you can pay with: " + currency.join(" and "));
        }

        function getLanguage () {
            let languageOfCountry = [];
                for (let i = 0; i < response.data[0].languages.length; i++) {
                language[i] = response.data[0].languages[i].name;
            }
            if (language.length === 1) {
                languageOfCountry = "They speak " + language + ".";
            }
            if (language.length === 2) {
                languageOfCountry = "They speak " + language.join(" and ") + ".";
            } else {
                languageOfCountry = "They speak " + language[0] + ", " + language.slice(1).join(" and ") + ".";
            }
            const displayCountryLanguage = document.getElementById("countryLanguage");
            displayCountryLanguage.textContent = languageOfCountry;

            console.log(languageOfCountry)
        }
        getCountryInfo();
        getCurrency();
        getLanguage();
    });












/*let currency = response.data[].currencies[].name*/

/*
const flag = document.getElementById("flagBelgium")
const flagOfBelgium = document.createElement("img")
flagOfBelgium.setAttribute('src', "https://restcountries.eu/data/bel.svg")
document.body.appendChild(flagOfBelgium);*/
