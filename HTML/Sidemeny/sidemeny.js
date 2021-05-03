window.onload = function(){
    
    
    let dropdown = document.getElementsByClassName("dropdown-btn");
    let size = dropdown.length;
    console.log(dropdown[0]);
    
    for (let i = 0; i < 5; i++) {
        console.log(i);
    
    
    /*     console.log(dropdown.item(i));
     */  /* dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      }); */
    }
}

function show() {

    document.getElementById('sidebar').classList.toggle('active');
}
