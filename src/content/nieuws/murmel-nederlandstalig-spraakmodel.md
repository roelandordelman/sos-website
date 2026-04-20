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

Op een benchmark van 1.662 parlementaire audiosegmenten (totaal circa 9 uur) haalt Murmel een Word Error Rate (WER) van 17,3%. Ter vergelijking: Voxtral-small van Mistral — aangeduid als de beste concurrent — zou uitkomen op 20,8% WER. De overige geëvalueerde modellen scoorden allemaal hoger dan 16% WER op vrouwelijke sprekers.

## Evaluatie

De claim is onderbouwd met meer detail dan aanvankelijk bekend, maar roept nog steeds vragen op. De benchmark bestaat uit 1.662 segmenten parlementaire audio — een specifiek en relatief formeel domein. Hoe het model presteert op conversationele spraak, dialecten of telefonische kwaliteit blijft onduidelijk. Ook is niet vermeld of de benchmark openbaar beschikbaar is of door een onafhankelijke partij is geverifieerd.

De keuze voor Voxtral-small als voornaamste vergelijkingspunt is opvallend: dit is een lichtgewicht open-source model, geen commercieel alternatief. Een vergelijking met Whisper large-v3 of andere marktleiders zou een vollediger beeld geven.

## Trainingsdata

The AI Factory geeft inmiddels meer inzicht in de herkomst van de trainingsdata. Het model is getraind op duizenden uren Nederlands spraakaudio afkomstig uit:

- Parlementaire debatten
- Uitzendingen van de publieke omroep
- Diverse openbare bronnen

De data vertegenwoordigt breed Nederlands: formeel en informeel taalgebruik, regionale accenten, en zowel moedertaalsprekers als niet-moedertaalsprekers. De gebruikte bronnen lijken overwegend publiek toegankelijk, al wordt niet expliciet vermeld welke licenties van toepassing zijn — een relevante vraag in het licht van de EU AI Act.

## Bredere ambitie

Dr. Sukel plaatst Murmel in een groter kader: Nederlandse en Europese organisaties zouden AI-technologie meer moeten *produceren* in plaats van alleen consumeren. Hij positioneert Murmel als een eerste stap naar vergelijkbare taalmodellen voor andere Europese talen.

## Marktrespons

Ondanks de openstaande vragen is de marktreactie opmerkelijk: binnen een week na lancering zegt The AI Factory meer dan 100 aanvragen van gemeenten, universiteiten en ministeries te hebben ontvangen. Het platform werkt met een freemiummodel; betaalde abonnementen starten vanaf €29 per maand.

Lees meer via de [inzending voor de Computable Awards 2026](https://www.computable.nl/awards/2026/inzendingen/tech-startup/the-ai-factory-murmel-het-nederlandse-spraak-ai-model-dat-elk-alternatief/) en het [blogbericht van The AI Factory](https://the-ai-factory.com/insights/murmel-dutch-speech-to-text).
