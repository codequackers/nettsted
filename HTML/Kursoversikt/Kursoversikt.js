window.onload = function () {


    let dropdown = document.getElementsByClassName("dropdown-btn");
  
    for (let i = 0; i < dropdown.length; i++) {
  
  
      console.log(dropdown.item(i));
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  
  function show() {
    document.getElementById('toggle-button').classList.toggle('inside');
    document.getElementById('Kursoversikt').classList.toggle('active');
  }
  