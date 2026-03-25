/* ==========================================
           1. SMOOTH SCROLL til sektioner
           ==========================================
           Når du klikker på en knap med href="#services",
           scroller siden SMOOTH ned til den sektion i stedet for at hoppe.
        */

// Find ALLE links der starter med # (f.eks. href="#contact")
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  // Tilføj en "lytter" der lytter efter klik
  link.addEventListener("click", function (event) {
    // Stop normal link-adfærd (hoppe til sektion)
    event.preventDefault();

    // Find den sektion linket peger på
    // this.getAttribute('href') = "#contact" eller "#services"
    var targetSection = document.querySelector(this.getAttribute("href"));

    // Hvis sektionen findes
    if (targetSection) {
      // Scroll smooth til sektionen
      targetSection.scrollIntoView({
        behavior: "smooth", // Blød animation
        block: "start", // Scroll til toppen af sektionen
      });
    }
  });
});

/* ==========================================
           2. SCROLL ANIMATIONER - Fade ind når du scroller
           ==========================================
           Kortene (service-card og contact-method) fader ind
           når de kommer ind i skærmen mens du scroller.
        */

// INDSTILLINGER for hvornår animationen starter
var animationSettings = {
  threshold: 0.1, // Start når 10% af elementet er synligt
  rootMargin: "0px 0px -100px 0px", // Start 100px før elementet er synligt
};

// LAV EN "OBSERVER" - den kigger efter elementer der kommer ind på skærmen
var scrollObserver = new IntersectionObserver(function (elementer) {
  // For hvert element der kommer ind/ud af skærmen
  elementer.forEach(function (element) {
    // Hvis elementet ER synligt
    if (element.isIntersecting) {
      // Gør det synligt (fade ind)
      element.target.style.opacity = "1";
      // Flyt det til normal position (fra translateY(30px) til translateY(0))
      element.target.style.transform = "translateY(0)";
    }
  });
}, animationSettings);

// AKTIVER OBSERVER - kig efter service-card og contact-method
document
  .querySelectorAll(".service-card, .contact-method")
  .forEach(function (element) {
    scrollObserver.observe(element); // Start med at "observere" elementet
  });
