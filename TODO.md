# Steps

0. SETUP
[X]
   
1. Zoek knop maken -> die haalt data op over Belgie
- [X] knopje maken
- [X] geef hem een id
-[X] knopje selecteren
  - [X] document.getElementById
    
- [X] voeg een event listener toe .addEventListener
- [X] event handler async functie maken (wordt uitgevoerd als je klikt)
- [X] request maken naar de API
  - [X] url belgie opzoeken (API docs)
- [X] axios.get(url endpoint belgie)
- [X] await ervoor zetten
- [X] data loggen

7. Voeg een plaatje toe aan de pagina (de flag van het land)

- [X] zoek de url van het plaatje (uit de response van de api)
- [X] HTML
- [X] div maken (met id)
- [X] div selecteren (getElement)
- [X] createElement -> img
- [X] url toevoegen aan het plaatje `img.src = url`, `img.setAttribute('src', url)`
- [X] appendChild -> aan het divje



8. Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.

- [X] HTML
- [X] Maak een inputveld
- [X] id geven aan het inputveld
- [X] Interacties programmeren
- [X] Input veld selecteren
- [X] Event listener toevoegen aan her inputveld (keyup)
- [X] In het event kijken naar de "code" (event.code)
- [X] Als event.code "Enter" is dan -> data ophalen uit de api



9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.

- [X] selecteer het input veld (const inputfield = document...)
- [X] const query = inputfield.value
- [X] vervang belgium in url voor de "dynamische waarde" (query)