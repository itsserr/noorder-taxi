# Noorder Taxi — werken op een (andere) pc

De website staat op GitHub: **github.com/itsserr/noorder-taxi**
Cloudflare zet elke `git push` automatisch live op **noordertaxi.nl** (binnen ~2 min).

## Eenmalig installeren op een nieuwe pc
1. Installeer **Git** → https://git-scm.com
2. Installeer **Node.js** (versie 22) → https://nodejs.org
3. Installeer **Claude Code** (desktop app).
4. Log in bij **GitHub** met het account `itsserr` (nodig om te kunnen pushen).

## Project binnenhalen
```bash
git clone https://github.com/itsserr/noorder-taxi.git
cd noorder-taxi
npm install
```
Open daarna de map `noorder-taxi` in **Claude Code**.

## Dagelijks gebruik
- Nieuwste versie ophalen (doe dit vóór je begint):
```bash
git pull
```
- Iets aanpassen en live zetten:
```bash
git add -A
git commit -m "korte omschrijving van de wijziging"
git push
```
Na `git push` bouwt Cloudflare automatisch en staat het binnen ~2 min live.

- Lokaal bekijken vóór live (optioneel):
```bash
npm run dev
```
Open dan http://localhost:3000

## Goed om te weten
- **Ophalen** (`clone` / `pull`) van deze repo kan zonder inloggen; **pushen** vereist inloggen bij GitHub (account `itsserr`).
- Werk je op meerdere pc's? Doe altijd eerst `git pull` voordat je begint, en `git push` als je klaar bent. Zo blijft alles gelijk.
- De reserveringen komen binnen via **Web3Forms** op info@noordertaxi.nl (sleutel staat in `lib/constants.ts`).
- Belangrijke bestanden: teksten/gegevens in `lib/constants.ts`, regio-pagina's in `lib/regions.ts`, pagina's in `app/`, secties in `components/`.
