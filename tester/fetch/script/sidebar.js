let html = `
<div class = "toggle-button" id = "toggle-button"
onclick = "show()">
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
        <a href="https://www.vg.no">VG</a>
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

document.getElementById('sidebar').innerHTML = html;