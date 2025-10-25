// Select all metaphor spans
const metaphors = document.querySelectorAll(".metaphor");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");

// Add click event for each metaphor
metaphors.forEach(span => {
  span.addEventListener("click", () => {
    const explanation = span.dataset.explanation;
    explanationText.textContent = explanation;
    explanationBox.classList.remove("hidden");

    // Brief highlight animation for feedback
    span.style.backgroundColor = "#ffd54f";
    setTimeout(() => (span.style.backgroundColor = "#fff4a3"), 500);
  });
});
