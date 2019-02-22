# 4shipping

Als eerst wilde ik weten uit hoeveel componenten de mockup van Jan bestond. Mijn inziens waren dit er 3; 
de kaart, de rollout met informatie, en de menubar. 

## De kaart

De kaart wilde ik via een API met google maps laten tonen. Ik heb de documentatie van google maps erbij gepakt,
en uitgezocht of dat met Vue ook makkelijker kon. De API kreeg ik vrij vlot aan de praat en kreeg de map te zien. 
Het volgende was de kaart zo groot als het scherm te maken. De menubar en de rollout kan daar dan overheen'floaten'.
Met behulp van bootstrap classes en eigen classes met een costum height van het gehele scherm lukte dit.

De mockup had ook een searchbar. In het kader van seperation of concern heb ik hier een eigen component van gemaakt.
Ik wilde de searchbar ook werkend krijgen. Door een tweede API call met google 'places' kreeg de searchbar een autocomplete
functie, waardoor ik toegang kreeg tot de coordinaten van die plek. Met een costum event en een method kon ik die coordinaten 
doorgeven aan het kaart component, en worden de coordinaten op dat component dynamisch aangepast. Ik liep nog tegen het probleem
aan dat de google instance in de searchbar component niet herkend werd, maar door te zoeken naar de lazypromise kon ik dit
oplossen.

Totaal ongeveer vier uur aan besteed. Gebruikte links:

For info on the API with google maps:
- https://www.npmjs.com/package/vue2-google-maps

For info on getting the searchbar to work:
- https://medium.com/dailyjs/google-places-autocomplete-in-vue-js-350aa934b18d

For references to the right bootstrap classes:
- https://getbootstrap.com/docs/4.0/getting-started/introduction/

For CSS references:

- Stackoverflow and w3schools

    - positioning: 
        - https://stackoverflow.com/questions/2941189/how-to-overlay-one-div-over-another-div
        - https://www.w3schools.com/cssref/pr_pos_z-index.asp
    - responsive screenheights:
        - https://stackoverflow.com/questions/7357818/how-can-an-html-element-fill-out-100-of-the-remaining-screen-height-using-css
        
## De Menubar
Voor de menubar heb ik eerst de kleurcodes uitgezocht en de iconen nagemaakt. De menubar op zich was vrij simpel; een balk 
bestaande uit vier elementen, de menu opties. De lengte van de bar correct houden bij alle scherm groottes en daarmee white
space aan de onderkant van het document vermijden was tricky. Ook de menuopties werden te klein naar mate de scherm grootte 
kleiner werd. Door zowel de menubar als de elementen daarbinnen relatief te maken aan de grootte van het scherm in combinatie
met een min-height lijkt het probleem opgelost te zijn.

De elementen in de menubar konden dynamisch gegenereerd worden door de menu opties als data aan de menu-component te geven.
Voor elk menu item een nieuw menu-element-compontent. De menu opties in de data konden ook gelijk de naam van de afbeelding 
dragen, en de naam van het menu item. Door dit te binden aan een prop in de menu-element-component, hoeft in de toekomst bij 
een nieuw menu element alleen de data in het menu-component aangepast te worden.

## De Rollout
De rollout toont de informatie afhankelijk van de knop die ingedrukt wordt. De hoogte hiervan wilde ik in eerste instantie
volledig aan de gebruiker over laten. Door na een klik de hoogte van de rollout relatief te maken aan de positie van de muis
op het scherm zou dit moeten werken. Dit werkte ook, maar omdat dit afhankelijk is van de plaats van de muis, werkte dit
niet op tablets en telefoonschermen. Ik had uit kunnen zoeken hoe dit met een 'touchhold' oid had gekund ipv een 'mouseout',
maar dan werkte het niet meer op computerscherm. Uiteindelijk de suggestie van Jan aangehouden waarin hij 3 hoogteniveaus
voorstelt. In tegenstelling tot mijn initiele aanpak kreeg ik dit relatief makkelijk voor elkaar.

 
