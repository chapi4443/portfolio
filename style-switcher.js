/*toggle styleswitcher */
const styleSwitcherToggle = document.querySlector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
  document.querySlector(".style-switcher").classList.toggle("open");

});

//theme style switcher on scroll//
const alternateStyles= document .querySlectorAll(".alternate-style");
