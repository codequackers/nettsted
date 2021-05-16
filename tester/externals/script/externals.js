const header = `
<div class="full_logo">
    <img class="logo" src="logo/cyan_logo_without_txt.png" alt="CodeQuackers Logo" width="50px">
    <img class="name" src="logo/name.png" alt="CodeQuackers Logo" width="100px">
</div>

<div class="menu">
    <p><a class="basic" href="x">Hjem</a></p>
    <p><a class="basic" href="x">Kurs</a></p>
    <p><a class="basic" href="x">Quiz</a></p>
    <p><a class="basic" href="x">Kodeeditor</a></p>
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
    <a href="#">Introduksjon til CodeQuackers læringsressurs</a>


    <button class="dropdown-btn">KAP.1 - Introduksjon til programmering
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="#">Test 1</a>
        <a href="#">Test 2</a>
        <a href="#">Test 3</a>
    </div>


    <button class="dropdown-btn">KAP.2 - Variabler
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="#">Test 1</a>
        <a href="#">Test 2</a>
        <a href="#">Test 3</a>
    </div>

    <button class="dropdown-btn">KAP.3 - Datatyper, konstanter og operatorer
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="#">Test 1</a>
        <a href="#">Test 2</a>
        <a href="#">Test 3</a>
    </div>


    <button class="dropdown-btn">KAP.4 - Løkker
        <i class="fas fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a href="#">Test 1</a>
        <a href="#">Test 2</a>
        <a href="#">Test 3</a>
    </div>

</div>
`;

document.querySelector('header').innerHTML = header;
document.getElementById('sidebar').innerHTML = sidebar;