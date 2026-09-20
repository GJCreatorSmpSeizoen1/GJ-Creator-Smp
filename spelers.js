const spelers = [
    {
        id: "jorn",
        naam: "Jorn",
        rol: "Creator",
        status: "levend",
        zichtbaar: true,
        zichtbaarVanaf: "2026-09-20T22:05:00+02:00",
        kills: 0,
        events: 0,
        skin: "https://mc-heads.net/avatar/Jorn/300",
        beschrijving: "Jorn is een deelnemer van GJ Creator SMP Seizoen 1."
    },

    {
        id: "sem",
        naam: "Sem",
        rol: "Creator",
        status: "levend",
        zichtbaar: true,
        zichtbaarVanaf: "2026-09-20T22:05:00+02:00",
        kills: 0,
        events: 0,
        skin: "https://mc-heads.net/avatar/Sem/300",
        beschrijving: "Sem is een deelnemer van GJ Creator SMP Seizoen 1."
    },

    {
        id: "riley",
        naam: "Riley",
        rol: "Creator",
        status: "levend",
        zichtbaar: true,
        zichtbaarVanaf: "2026-09-20T22:15:00+02:00",
        kills: 0,
        events: 0,
        skin: "https://mc-heads.net/avatar/Riley/300",
        beschrijving: "Riley is een deelnemer van GJ Creator SMP Seizoen 1."
    },

    {
        id: "demiano",
        naam: "Demiano",
        rol: "Creator",
        status: "levend",
        zichtbaar: true,
        zichtbaarVanaf: "2026-09-20T22:15:00+02:00",
        kills: 0,
        events: 0,
        skin: "https://mc-heads.net/avatar/Demiano/300",
        beschrijving: "Demiano is een deelnemer van GJ Creator SMP Seizoen 1."
    }
];

Nu kunnen we op je Home een grote "VOLGENDE LINE-UP" countdown zetten. Gebruik daarvoor bijvoorbeeld:

:::writing{variant="code" id="lineup-countdown" title="Countdown voor volgende line-up"}

<div class="lineup-box">

    <span class="hero-label">
        VOLGENDE LINE-UP
    </span>

    <h2 id="lineupTitle">
        Riley & Demiano
    </h2>

    <p id="lineupText">
        Worden bekendgemaakt over:
    </p>

    <div id="lineupCountdown">
        00:00:00
    </div>

</div>

<style>
.lineup-box {
    margin: 30px 0;
    padding: 30px;
    text-align: center;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
}

.lineup-box h2 {
    margin: 8px 0;
    font-size: 28px;
}

.lineup-box p {
    color: var(--muted);
    margin: 8px 0 18px;
}

#lineupCountdown {
    font-size: clamp(32px, 8vw, 58px);
    font-weight: 900;
    letter-spacing: 3px;
}

.lineup-done {
    color: #35e58a;
}
</style>

<script>
const volgendeLineup = new Date(
    "2026-09-20T22:15:00+02:00"
);

function updateLineupCountdown() {

    const nu = new Date();
    const verschil = volgendeLineup - nu;

    const countdown =
        document.getElementById("lineupCountdown");

    const title =
        document.getElementById("lineupTitle");

    const text =
        document.getElementById("lineupText");

    if (!countdown) return;

    if (verschil <= 0) {

        title.textContent = "Riley & Demiano";
        text.textContent = "Zijn nu bekendgemaakt!";
        countdown.textContent = "LINE-UP LIVE";
        countdown.classList.add("lineup-done");

        return;
    }

    const uren = Math.floor(
        verschil / (1000 * 60 * 60)
    );

    const minuten = Math.floor(
        (verschil % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconden = Math.floor(
        (verschil % (1000 * 60)) /
        1000
    );

    countdown.textContent =
        String(uren).padStart(2, "0") + ":" +
        String(minuten).padStart(2, "0") + ":" +
        String(seconden).padStart(2, "0");
}

updateLineupCountdown();

setInterval(updateLineupCountdown, 1000);
</script>

Dus het schema is nu:

Tijd| Gebeurtenis
22:05| 🔓 Jorn & Sem zichtbaar
22:05 → 22:15| ⏱️ Countdown naar volgende lineup
22:15| 🔓 Riley & Demiano zichtbaar

De tijden zijn ingesteld op 20 september 2026, Nederlandse tijd (CEST).
