let html = `
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

document.querySelector('header').innerHTML = html;