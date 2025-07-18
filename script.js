function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const termCards = document.querySelectorAll(".term-card");
  const noResults = document.getElementById("noResults");

  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    let matchesFound = false;

    termCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const definition = card.querySelector("p").textContent.toLowerCase();

      // Basic fuzzy match: checks if all query characters are in the text in order
      const fuzzyMatch = (text, query) => {
        let tIndex = 0;
        for (let i = 0; i < query.length; i++) {
          tIndex = text.indexOf(query[i], tIndex);
          if (tIndex === -1) return false;
          tIndex++;
        }
        return true;
      };

      const isMatch = fuzzyMatch(title, query) || fuzzyMatch(definition, query);

      if (isMatch || query === "") {
        card.style.display = "block";
        matchesFound = true;
      } else {
        card.style.display = "none";
      }
    });

    noResults.style.display = matchesFound ? "none" : "block";
  });
});


function calculateDose() {
  const dosePerKg = parseFloat(document.getElementById('dosePerKg').value);
  const weight = parseFloat(document.getElementById('weight').value);
  if (!isNaN(dosePerKg) && !isNaN(weight)) {
    const total = dosePerKg * weight;
    document.getElementById('calcResult').textContent = `Total Dose: ${total} mg`;
  } else {
    document.getElementById('calcResult').textContent = 'Please enter valid numbers';
  }
}

function toggleDefinition(id) {
  const def = document.getElementById(id);
  if (def.style.display === 'none') {
    def.style.display = 'block';
  } else {
    def.style.display = 'none';
  }
} 

