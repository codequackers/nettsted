const header = `
<div class="full_logo">
    <a href="https://www.codequackers.no/">
    <img class="logo" src="logo/cyan_logo_without_txt.png" alt="CodeQuackers Logo" width="50px">
    </a>
    <a href="https://www.codequackers.no/">
    <img class="name" src="logo/name.png" alt="CodeQuackers Logo" width="100px">
    </a>
</div>

<div class="menu">
    <p><a class="basic" href="index.html">Hjem</a></p>
    <p><a class="basic" href="Kursoversikt.html">Kurs</a></p>
    <!-- <p><a class="basic" href="x">Quiz</a></p> -->
    <p><a class="basic" href="kodeeditor/">Kodeeditor</a></p>
</div>
`;

const sidebar = `
<div class="toggle-button" id="toggle-button" onclick="show()">
    <span></span>
    <span></span>
    <span></span>
</div>

<div class="sidebar">
    <h4>Innholdsfortegnelse</h4>
    <br>
    <br>


    <button class="dropdown-btn">KAP.1 - Introduksjon til programmering
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="Introduksjon_av_oss.html">Introduksjon til CodeQuackers</a>
        <a href="Kurs_1_1.html">1.1 Læringsmål - Introduksjon</a>
        <a href="Kurs_1_2.html">1.2 Hva er programmering?</a>
        <a href="Kurs_1_3.html">1.3 Programmeringsspråk</a>
        <a href="Kurs_1_4.html">1.4 Hvor skriver vi koden?</a>
        <a href="Kurs_1_5.html">1.5 Hvor kjører vi koden?</a>
        <a href="Kurs_1_6.html">1.6 Programmering direkte i nettleseren</a>
        <a href="Kurs_1_7.html">1.7 Nettbaserte utviklingsmiljø</a>
        <a href="Quiz1/">QUIZ Kapittel.1 - Introduksjon til programmering</a>
    </div>


    <button class="dropdown-btn">KAP.2 - Variabler
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="Kurs_2_1.html">2.1 Læringsmål Variabler</a>
        <a href="Kurs_2_2.html">2.2 Dataprogram</a>
        <a href="Kurs_2_3.html">2.3 Hva er en variabel?</a>
        <a href="Kurs_2_4.html">2.4 Egenskapene til en variabel</a>
        <a href="Kurs_2_5.html">2.5 Lage variabler</a>
        <a href="Kurs_2_6.html">2.6 Navngiving av variabler</a>
        <a href="Quiz2/">QUIZ Kapittel.2 - Variabler</a>
    </div>

    <button class="dropdown-btn">KAP.3 - Datatyper, konstanter og operatorer
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="Kurs_3_1.html">3.1 Læringsmål Datatyper</a>
        <a href="Kurs_3_2.html">3.2 Datatyper</a>
        <a href="Kurs_3_3.html">3.3 Identifikatorer og literaler</a>
        <a href="Kurs_3_4.html">3.4 Hva er en konstant?</a>
        <a href="Kurs_3_5.html">3.5 Operatorer</a>
        <a href="Kurs_3_6.html">3.6 Aritmetiske operatorer</a>
        <a href="Kurs_3_7.html">3.7 Tilordningsoperatorer</a>
        <a href="Kurs_3_8.html">3.8 Modulus</a>
        <a href="Quiz3/">QUIZ Kapittel.3 - Datatyper, konstanter og operatorer</a>
    </div>


    <button class="dropdown-btn">KAP.4 - Løkker
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="Kurs_4_1.html">4.1 Læringsmål Løkker</a>
        <a href="Kurs_4_2.html">4.2 If-setninger</a>
        <a href="Kurs_4_3.html">4.3 For-løkker</a>
        <a href="Kurs_4_4.html">4.4 While-løkker</a>
        <a href="Quiz4/">QUIZ Kapittel.4 - Løkker</a>
    </div>

</div>
`;

document.querySelector('header').innerHTML = header;
document.getElementById('sidebar').innerHTML = sidebar;