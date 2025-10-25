const metaphors = document.querySelectorAll(".metaphor");
const explanationPanel = document.getElementById("explanation-panel");
const explanationText = document.getElementById("explanation-text");

// Handle click on metaphor spans
metaphors.forEach(span => {
  span.addEventListener("click", () => {
    const explanation = span.dataset.explanation;
    explanationText.textContent = explanation;
    explanationPanel.classList.remove("hidden");

    // Brief color flash to indicate interaction
    span.style.backgroundColor = "#ffe082";
    setTimeout(() => (span.style.backgroundColor = ""), 400);
  });
});
