# 4shipping

Als eerst wilde ik weten uit hoeveel componenten de mockup van Jan bestond. Mijn inziens waren dit er 3; 
de kaart, de rollout met informatie, en de menubar. 

## De kaart

De kaart wilde ik via een API met google maps laten tonen. Ik heb de documentatie van google maps erbij gepakt,
en uitgezocht of dat met Vue ook makkelijker kon. De API kreeg ik vrij vlot aan de praat en kreeg de map te zien. 
Het volgende was de kaart zo groot als het scherm te maken. De menubar en de rollout kan daar dan overheen'floaten' 
met een z-index. Met behulp van bootstrap classes en eigen classes met een costum height van het gehele scherm lukte dit.

De mockup had ook een searchbar. In het kader van seperation of concern heb ik hier een eigen component van gemaakt.
Ik wilde de searchbar ook werkend krijgen. Door een tweede API call met google 'places' kreeg de searchbar een autocomplete
functie, waardoor ik toegang kreeg tot de coordinaten van die plek. Met een costum event en een method kon ik die coordinaten 
doorgeven aan het kaart component, en worden de coordinaten op dat component dynamisch aangepast. Ik liep nog tegen het probleem
aan dat de google instance in de searchbar component niet herkend werd, maar door te zoeken naar de lazypromise kon ik dit
oplossen.

Totaal ongeveer 4 uur aan besteed. 
        
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

Totaal ongeveer 3 uur aan besteed, inclusief het vormgeven van de iconen.

## De Rollout
De rollout toont de informatie afhankelijk van de knop die ingedrukt wordt. Om dit te bewerkstelligen heb ik binnen de rollout
de te tonen informatie afhankelijk gemaakt van de variabele 'activeComponent'. Deze variabele ontvangt zijn waarde via een eventBus,
die geactiveerd wordt zodra de gebruiker ergens op klikt. Op deze manier is de mappenstructuur overzichtelijk te houden en kon ik
opnieuw het principe van seperation of concern toepassen.

Als content heb ik alleen de eerste menuoptie 'kaart' nagemaakt. De overige menu opties bestaan alleen uit een titel, maar kunnen wel 
dynamisch getoond worden. Ik heb onderscheid gemaakt tussen de kaart items met icoon, en 
de kaart items zonder icoon. Allebei verliep vlot door beide item lijsten in kaart.vue beschikbaar te maken en te binden aan een nieuw
component; kaart-content-button.vue en kaart-content-text.vue. Door de image name in kaart items met icoon te definieren, kon deze 
dynamisch in het kaart-button-component als onderdeel het img path gebruikt worden. Hetzelfde principe voor de tekst onder het icoon.
Zo kan hetzelfde component vaker gebruikt worden en voorkom ik dubbele code.

De hoogte van de rollout wilde ik in eerste instantie
volledig aan de gebruiker over laten. Door na een klik de hoogte van de rollout relatief te maken aan de positie van de muis
op het scherm zou dit moeten werken. Dit werkte ook, maar omdat dit afhankelijk is van de plaats van de muis, werkte dit
niet op tablets en telefoonschermen. Ik had uit kunnen zoeken hoe dit met een 'touchhold' oid had gekund ipv een 'mouseout',
maar dan werkte het niet meer op computerscherm. Uiteindelijk de suggestie van Jan aangehouden waarin hij 3 hoogteniveaus
voorstelt. In tegenstelling tot mijn initiele aanpak kreeg ik dit relatief makkelijk voor elkaar. 

De positie van de rollout en het menu t.o.v de kaart ben ik ook redelijk wat tijd aan kwijt
geweest. Het was even uitzoeken en uittesten hoe dit met de minst mogelijke code kon. Ook de content van de rollout scrollbaar 
maken kostte wat meer tijd dan waar ik op anticipeerde. Zonder de rollout te manipuleren met classes viel de content óf buiten zijn
container div, of werd niet langer zichtbaar. Ik heb in meerdere files aanpassingen gedaan om dit toch voor elkaar te krijgen.
Door de scrollbaarheid van de content binnen de rollup.vue te bepalen, hoeft dit niet in elk individueel component opnieuw gedaan te 
worden. Hierna heb ik Jan een e-mail gestuurd met de resultaten, en feedback ontvangen.

Totaal ongeveer 8 uur aan besteed. 

## Feedback
'Voor de iconen wordt Fontawesome gebruikt, en de rolloutmenu hoeft alleen functioneel te zijn voor tablet en telefoonschermen.
Voor de feedback waren er twee knoppen waarmee de hoogte aangepast kon worden. Dit kon beter op de manier dat de gebruiker de rollout
groter kan maken, en bij loslaten de hoogte terugschiet naar 1 van 3 mogelijke standaard hoogtes.'

Voor de kaart.vue component heb ik de iconen direct aangepast naar die van fontawesome en de images verwijderd. De menubalk iconen
waren op fontawesome niet beschikbaar, en heb ik als images bewaard in /src/components/menu/assets.

Om de rollout te krijgen zoals Jan voor ogen had, moest de hoogte van de rollout real-time aangepast worden wanneer de gebruiker
'touches and drags'. Op het moment dat losgelaten wordt, wordt de hoogte gelijk aan de dichtsbijzijnde standaardhoogte. 
Dit betekende dat ik een aantal gegevens moest weten. Hoe groot is het scherm van de gebruiker, waar op het scherm bevind zijn vinger
zich, en wat is het percentage ten opzichte van het volledige scherm. Dit percentage kon ik vervolgens aan een variabele (setHeight) in 
Data meegeven, en de hoogte van het component binnen de template gelijk maken aan deze variabele. Hier heb ik de methode 
'startTouchHandler' voor gemaakt.
Ook de logica voor na het loslaten viel me mee; wanneer de variabele in Data tussen A en B is, maakt de variabele dan C. Hiervoor heb
ik de methode 'endTouchHandler' gemaakt.

In eerste instantie ben ik op zoek gegaan naar een 'vue touch' package. https://www.npmjs.com/package/vue2-touch-events kon mij hierbij 
helpen. Met v-touch:tap en v-touch:moving kwam ik een eind, maar ik liep tegen problemen aan op het moment dat losgelaten werd. Na het
v-touch:moving werd er geen signaal doorgegeven dat het bewegen afgelopen is. Dit had ik wel nodig om de 'endTouchHandler' method te 
activeren. Ik heb gekeken of ik dit zelf kon doen, via de variabele 'isAdjusting' en deze met lifecycle hooks beforeUpdate en afterUpdate
te wijzigen naar true of false. Via een watcher kon ik dan, wanneer false van toepassing is, de endTouchHandler activeren. Dit werkte
niet omdat de setHeight real time werd aangepast en elke aanpassing hieraan als update geld.

Ik ben op zoek gegaan naar een andere manier dan de v-touch package om de aanraking en beweging te herkennen. VanillaJs had ik ook een
oplossing voor. Binnen de lifecycle hook 'Mounted', heb ik met javascript een eventlistener gezet op de knop bovenaan de rollup. Deze
luistert naar de touchmove, deze activeert de startTouchHandler bij elke beweging die de gebruiker maakt. Met javascript kon ik wel
een signaal krijgen wanneer het bewegen opgehouden is. Binnen dezelfde lifecycle hook heb ik een listener gezet op het event 'touchend', 
die de endTouchHandler activeerd. Dit werkte naar verwachting, en bracht aanzienlijk minder code en complexiteit mee dan het eerder 
genoemde package.

In totaal ongeveer 10 uur mee bezig geweest. Vond ik zelf aan de lange kant, maar dit kwam vooral door het zoeken naar en uittesten van
oplossingen om toch dat signaal te krijgen dat de vue touch package me niet gaf. De logica voor de methodes had ik vlot door, en toen ik 
verder ging via VanillaJs was het snel klaar.


## Refactoring
Ik heb gaandeweg, tijdens het ontwikkelen, een aanzienlijke tijd besteed aan refactoring. Steeds wanneer een functionaliteit af en
werkend was, doorliep ik de code om te kijken of hetzelfde ook met minder code kon. Of mijn benamingen logisch waren, en of mijn
code ook door een andere developer te begrijpen is. Of de code herbruikbaar en weerbaar is,  en verantwoordelijkheden gescheiden.

Ook nadat de opdracht af was, heb ik nog enige tijd besteed aan het doorlopen van flow en wijzigingen aangebracht. Code kan altijd 
schoner, netter en beter. Vooral na het lezen van 'Clean code' van Robert C. Martin ben ik me bewust van mijn verantwoordelijkheid
hiervoor. De opdracht had sneller gekund, met dezelfde functionaliteit, maar de prijs hiervoor is hoog op het moment dat er 
aanpassingen gedaan moeten worden en code niet leesbaar, logisch, begrijpelijk en weerbaar is.

Ik ben vanaf woensdag 22 februari elke dag wel een aantal uur met de opdracht bezig geweest. Ik had ook met minder kunnen doen, maar
de tijd was er toch, er is altijd wel iets te doen/verbeteren en het opschonen van de code haal ik zelf ook veel voldoening uit.

## Hulp
Ik heb niemand om hulp gevraagd, maar wel referenties en documentaties bekeken.

Voor CSS referenties:
- Stackoverflow,
- W3Schools
- Bootstrap

Gelezen Documentaties:
- https://www.npmjs.com/package/vue2-google-maps
- https://medium.com/dailyjs/google-places-autocomplete-in-vue-js-350aa934b18d
