---
title: "Murmel: Nederlands spraak-naar-tekst model met claim op beste WER voor het Nederlands"
date: 2026-04-09
description: "The AI Factory lanceert Murmel, een Nederlands spraak-naar-tekst model dat beweert beter te presteren dan Voxtral-small van Mistral. Maar hoe stevig zijn de onderbouwing en de evaluatiemethodologie?"
auteur: "Redactie"
linkedin_tekst: "The AI Factory lanceert Murmel, een Nederlands spraak-naar-tekst model dat claimt de beste WER voor het Nederlands te halen. Interessant, maar er zijn vragen over de evaluatiemethodologie en de herkomst van de trainingsdata. #spraaktechnologie #ASR #Nederland"
---

The AI Factory B.V. uit Amsterdam heeft Murmel gelanceerd, een spraak-naar-tekst model dat specifiek is ontwikkeld voor het Nederlands. Volgens de makers presteert het model beter dan alle open-source alternatieven op een benchmark van Nederlandstalige audio.

## Wat is Murmel?

Murmel is niet alleen een model, maar een compleet transcriptieplatform: naast het onderliggende ML-model biedt het een webinterface, REST API en Python SDK. The AI Factory zegt daarbij de nadruk te leggen op drie pijlers: *digitale soevereiniteit* (verwerking en opslag uitsluitend in Nederland, geen afhankelijkheid van Amerikaanse clouddiensten), *duurzaamheid* (groene GPU-infrastructuur via Leafcloud in Amsterdam, waarbij restwarmte wordt benut voor stadsverwarming), en *snelheid* (35× real-time, dus een uur audio in circa twee minuten).

Het bedrijf wordt geleid door dr. Maarten Sukel, gepromoveerd in Multimodal Machine Learning aan de Universiteit van Amsterdam.

## Prestatieclaim

Op een benchmark van negen uur Nederlandstalig parlementair audiomateriaal haalt Murmel een Word Error Rate (WER) van 17,3%. Ter vergelijking: Voxtral-small van Mistral — aangeduid als de beste concurrent — zou uitkomen op 20,8% WER.

## Evaluatie

De claim is opvallend, maar roept ook vragen op. Ten eerste: *hoe is geëvalueerd?* Een WER van 17,3% op parlementaire audio is een specifiek domein — spraakmakend, maar niet representatief voor alle gebruikssituaties zoals conversationele spraak, dialecten of telefonische kwaliteit. Het is onduidelijk of de benchmark openbaar is, door een onafhankelijke partij is uitgevoerd, of gereproduceerd kan worden.

Ten tweede: *waarom juist Voxtral-small als referentie?* Voxtral-small is een lichtgewicht open-source model — geen directe concurrent van een commercieel aanbod. Een vergelijking met Whisper large-v3, of met andere commerciële transcriptiediensten, zou een completer beeld geven.

Ten derde: *wat is de herkomst van de trainingsdata?* Murmel is getraind op "duizenden uren Nederlandstalig spraakmateriaal uit alle provincies en met alle dialecten en sprekerprofielen." Dat klinkt veelbelovend, maar de vraag is of die data afkomstig zijn uit rechtmatig gelicentieerde of gecrawlde bronnen. In een tijd van toenemende aandacht voor auteursrecht en de EU AI Act is transparantie over trainingsdata een serieuze kwestie.

## Marktrespons

Ondanks de openstaande vragen is de marktreactie opmerkelijk: binnen een week na lancering zegt The AI Factory meer dan 100 aanvragen van gemeenten, universiteiten en ministeries te hebben ontvangen. Het platform werkt met een freemiummodel; betaalde abonnementen starten vanaf €29 per maand.

Lees meer via de [inzending voor de Computable Awards 2026](https://www.computable.nl/awards/2026/inzendingen/tech-startup/the-ai-factory-murmel-het-nederlandse-spraak-ai-model-dat-elk-alternatief/).
