//Hamburger menu icon to X change

function myFunction(x) {
      x.classList.toggle("change");
      document.getElementById("mobile-menu").classList.toggle("display");
  }


//Accordian items on Guided-rides page

  function initAccordion(accordionElem){
  
    //when panel is clicked, handlePanelClick is called.          
    function handlePanelClick(event){
        showPanel(event.currentTarget);
    }
  //Hide currentPanel and show new panel.  
    
    function showPanel(panel){
      //Hide current one. First time it will be null. 
       var expandedPanel = accordionElem.querySelector(".active");
       if (expandedPanel){
           expandedPanel.classList.remove("active");
       }
       //Show new one
       panel.classList.add("active");
    }
    var allPanelElems = accordionElem.querySelectorAll(".rides-container");
    for (var i = 0, len = allPanelElems.length; i < len; i++){
         allPanelElems[i].addEventListener("click", handlePanelClick);
    }
  }
  
  initAccordion(document.getElementById("rides-layout"));

