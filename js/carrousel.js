// Define an array of objects for each image's heading and text
const carouselDescriptions = [
  {
    heading: "Capoeira",
    text: "Van mijn 15e tot mijn 25e was ik actief bezig met Capoeira, een kunstvorm die vechtsport en dans met elkaar verweeft. Hoewel ik nu niet meer oefen, blijft Capoeira een deel van mijn leven, dankzij mijn liefde voor Brazilië en de rijke cultuur die ik daar heb leren kennen.",
  },
  {
    heading: "Duiken",
    text: "Al 15 jaar verken ik de wereld onder water. Met mijn 3* brevet mag ik tot 40 meter diepte duiken, waar de diepte zorgt voor een serene stilte en de onderwaterwereld in mysterie gehuld blijft.",
  },
  {
    heading: "PlayStation",
    text: "Sinds de allereerste generatie PlayStation ben ik erbij geweest. Elke console die volgde, heb ik gespeeld en meegemaakt, waardoor gaming voor mij meer is dan een hobby – het is een reis vol avontuur en nostalgie.",
  },
  {
    heading: "Binge Watching",
    text: "Ik duik graag in films en series op verschillende streamingdiensten. Met een speciale voorliefde voor Braziliaanse films en verhalen van Vlaamse bodem, geniet ik van het brede aanbod en de unieke verhalen die elk land te bieden heeft.",
  },
  {
    heading: "Virtual Reality",
    text: "VR is voor mij een constant evoluerende passie. Met mijn PlayStation VR en elke generatie van de Meta Quest heb ik al veel virtuele werelden verkend. Nu wacht ik vol spanning op het moment dat ik de Apple Vision Pro kan aan mijn collectie toevoegen",
  },
  {
    heading: "Programmeren",
    text: "Na het online verkennen van JavaScript, Python en Swift, heb ik de stap gezet naar een graduaatsopleiding programmeren bij Thomas More. Mijn doel? Zorgen dat programmeren geen geheimen meer voor me heeft en mijn eigen apps leren ontwikkelen.",
  },
];

// Function to update heading and text
function updateCarouselDescription(index) {
  document.getElementById("carousel-heading").textContent =
    carouselDescriptions[index].heading;
  document.getElementById("carousel-text").textContent =
    carouselDescriptions[index].text;
}

// Listen for carousel slide changes
const carousel = document.getElementById("carouselExampleControlsNoTouching");
carousel.addEventListener("slid.bs.carousel", function () {
  const activeIndex = Array.from(
    carousel.querySelectorAll(".carousel-item")
  ).indexOf(carousel.querySelector(".carousel-item.active"));
  updateCarouselDescription(activeIndex);
});

// Initialize with the first image's description
updateCarouselDescription(0);
