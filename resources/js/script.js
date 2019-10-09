//Hamburger menu icon to X change

function myFunction(x) {
      x.classList.toggle("change");
      document.getElementById("mobile-menu").classList.toggle("display");
  }
 
    //Hide menu when menu item clicked
    $('.mob-menu a').on('click', function(){
      $('.mob-menu').hide();
    });

