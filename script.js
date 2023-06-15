//const contactinfo =document.getElementById("contactinfo");
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabContent, tabButton;

  // Get all elements with class="tab-content" and hide them
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all elements with class="tab-button" and remove the class "active"
  tabButton = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to be the first one
document.getElementsByClassName("tab-button")[0].click();
