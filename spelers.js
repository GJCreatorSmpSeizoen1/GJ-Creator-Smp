/* =========================================
   GJ CREATOR SMP
   spelers.js — STAP 4/9

   HIER VOEG JE LATER NIEUWE SPELERS TOE.
========================================= */

const spelers = [

    {
        id: "jorn",
        naam: "Jorn",
        rol: "Creator",

        status: "levend",

        kills: 0,
        deaths: 0,
        events: 0,

        skin: "https://mc-heads.net/avatar/Jorn/300",

        beschrijving:
            "Jorn is een deelnemer en creator van GJ Creator SMP Seizoen 1.",

        deathReason: "",

        deathDate: "",

        deathLog: []
    },


    {
        id: "sem",
        naam: "Sem",
        rol: "Creator",

        status: "levend",

        kills: 0,
        deaths: 0,
        events: 0,

        skin: "https://mc-heads.net/avatar/Sem/300",

        beschrijving:
            "Sem is een deelnemer en creator van GJ Creator SMP Seizoen 1.",

        deathReason: "",

        deathDate: "",

        deathLog: []
    }

];


/* =========================================
   BELANGRIJK

   Voor een nieuwe speler kopieer je
   bijvoorbeeld dit blok:

   {
       id: "speler3",
       naam: "Naam",
       rol: "Creator",
       status: "levend",
       kills: 0,
       deaths: 0,
       events: 0,
       skin: "https://mc-heads.net/avatar/Naam/300",
       beschrijving: "Beschrijving.",
       deathReason: "",
       deathDate: "",
       deathLog: []
   }

   Zet tussen spelers een komma.
========================================= */


/* =========================================
   HULPFUNCTIES
========================================= */

/*
   Zoek een speler op basis van ID.
*/

function getSpelerById(id) {

    return spelers.find(
        speler => speler.id === id
    );

}


/*
   Geef alle levende spelers.
*/

function getLevendeSpelers() {

    return spelers.filter(
        speler => speler.status === "levend"
    );

}


/*
   Geef alle dode spelers.
*/

function getDodeSpelers() {

    return spelers.filter(
        speler => speler.status === "dood"
    );

}


/*
   Totaal aantal kills.
*/

function getTotaleKills() {

    return spelers.reduce(
        (totaal, speler) =>
            totaal + Number(speler.kills || 0),
        0
    );

}


/*
   Totaal aantal deaths.
*/

function getTotaleDeaths() {

    return spelers.reduce(
        (totaal, speler) =>
            totaal + Number(speler.deaths || 0),
        0
    );

}


/*
   Aantal deelnemers.
*/

function getAantalSpelers() {

    return spelers.length;

}


/*
   Aantal levende spelers.
*/

function getAantalLevend() {

    return spelers.filter(
        speler => speler.status === "levend"
    ).length;

}


/*
   Aantal dode spelers.
*/

function getAantalDood() {

    return spelers.filter(
        speler => speler.status === "dood"
    ).length;

}
