const searchButton = document.getElementById("searchButton");
const inputField = document.getElementById("inputField");
const flag = document.getElementById("countryFlag");
const displayCountryInfo = document.getElementById("countryInfo");
const displayCountryName = document.getElementById("countryName");
const displayCountryCurrency = document.getElementById("countryCurrency");
const displayCountryLanguage = document.getElementById("countryLanguage");
const errorMessage = document.getElementById("errorMessage");

function clearInputField () {
    inputField.value = null;
}

inputField.addEventListener("keyup", async (e) => {
    try {
        if (e.key === "Enter") {
            const query = inputField.value;
            response = await axios.get(
                `https://restcountries.eu/rest/v2/name/${query}`)

            console.log(response.data[0]);

            const countryName = response.data[0].name;
            const subareaName = response.data[0].subregion;
            const population = response.data[0].population;
            const capital = response.data[0].capital;
            let currency = [];
            let language = [];

            flag.innerHTML = "";
            errorMessage.textContent = "";
            const flagOfCountry = document.createElement("img");
            flagOfCountry.style.width = "400px";
            flagOfCountry.style.height = "210px";
            flagOfCountry.setAttribute('src', response.data[0].flag);
            flag.appendChild(flagOfCountry);

            function getCountryInfo () {
                const countryInfo = countryName + " is situaded in " + subareaName + ". It has a population of " + population + " people.";
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
                } if (countryName == "zimbabwe" || countryName == "Zimbabwe") {
                    capitalCurrency = "The capital is " + capital + " and you can pay with " + currency.slice(0, currency.length -2).join(", ") + " and " + currency.slice(length-2, length-1) + ".";
                }
                displayCountryCurrency.textContent = "\n" + capitalCurrency;

                console.log("You can pay with: " + currency.join(" and "));
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
                } if (language.length > 2) {
                    languageOfCountry = "They speak " + language[0] + ", " + language.slice(1).join(" and ") + ".";
                }
                displayCountryLanguage.textContent = languageOfCountry;

                console.log(languageOfCountry)
            }

            getCountryInfo();
            getCurrency();
            getLanguage();
            clearInputField();
        }

    } catch (e) {
        console.error("COUNTRY DOES NOT EXIST!")
        flag.innerHTML = "";
        displayCountryName.textContent = "";
        displayCountryInfo.textContent = "";
        displayCountryCurrency.textContent = "";
        displayCountryLanguage.textContent = "";
        clearInputField();
        errorMessage.textContent = "THIS COUNTRY DOES NOT EXIST ON THIS BEAUTIFUL PLANET, TRY SOMETHING ELSE!"
    }

});

searchButton.addEventListener("click", async () => {
    try {
        const query = inputField.value;
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${query}`)

        console.log(response.data[0])

        const countryName = response.data[0].name;
        const subareaName = response.data[0].subregion;
        const population = response.data[0].population;
        const capital = response.data[0].capital;
        let currency = [];
        let language = [];

        flag.innerHTML = "";
        errorMessage.textContent = "";
        const flagOfCountry = document.createElement("img");
        flagOfCountry.style.width = "400px";
        flagOfCountry.style.height = "210px";
        flagOfCountry.setAttribute('src', response.data[0].flag);
        flag.appendChild(flagOfCountry);

        function getCountryInfo() {
            const countryInfo = countryName + " is situaded in " + subareaName + ". It has a population of " + population + " people.";
            console.log(countryInfo);

            displayCountryName.textContent = countryName;
            displayCountryInfo.textContent = countryInfo;

            console.log("The capital is " + capital);
        }

        function getCurrency() {
            let capitalCurrency = [];
            for (let i = 0; i < response.data[0].currencies.length; i++) {
                currency[i] = response.data[0].currencies[i].name + "'s";
            }
            if (currency.length === 1) {
                capitalCurrency = "The capital is " + capital + " and you can pay with " + currency + ".";
            }
            if (currency.length === 2) {
                capitalCurrency = "The capital is " + capital + " and you can pay with " + currency.join(" and ") + ".";
            }
            if (countryName == "zimbabwe" || countryName == "Zimbabwe") {
                capitalCurrency = "The capital is " + capital + " and you can pay with " + currency.slice(0, currency.length - 2).join(", ") + " and " + currency.slice(length - 2, length - 1) + ".";
            }
            displayCountryCurrency.textContent = "\n" + capitalCurrency;

            console.log("You can pay with: " + currency.join(" and "));
        }

        function getLanguage() {
            let languageOfCountry = [];
            for (let i = 0; i < response.data[0].languages.length; i++) {
                language[i] = response.data[0].languages[i].name;
            }
            if (language.length === 1) {
                languageOfCountry = "They speak " + language + ".";
            }
            if (language.length === 2) {
                languageOfCountry = "They speak " + language.join(" and ") + ".";
            }
            if (language.length > 2) {
                languageOfCountry = "They speak " + language[0] + ", " + language.slice(1).join(" and ") + ".";
            }
            displayCountryLanguage.textContent = languageOfCountry;

            console.log(languageOfCountry)
        }

        getCountryInfo();
        getCurrency();
        getLanguage();
        clearInputField();

    } catch (e) {
    console.error("COUNTRY DOES NOT EXIST!")
    flag.innerHTML = "";
    displayCountryName.textContent = "";
    displayCountryInfo.textContent = "";
    displayCountryCurrency.textContent = "";
    displayCountryLanguage.textContent = "";
    clearInputField();
    errorMessage.textContent = "THIS COUNTRY DOES NOT EXIST ON THIS BEAUTIFUL PLANET, TRY SOMETHING ELSE!"
}

});











