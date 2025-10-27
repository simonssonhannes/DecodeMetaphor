// small UI logic: show explanation in panel when a metaphor is clicked
document.addEventListener('DOMContentLoaded', () => {
  const metaphors = document.querySelectorAll('.metaphor');
  const panel = document.getElementById('explainPanel');
  const text = document.getElementById('explainText');
  const closeBtn = document.getElementById('closePanel');
  const toggleAll = document.getElementById('toggleAll');

  metaphors.forEach(m => {
    m.addEventListener('click', () => {
      const explanation = m.dataset.explanation || 'Ingen förklaring tillgänglig';
      text.innerHTML = `<div style="margin-bottom:8px"><em>Markerad fras:</em> <strong>${m.textContent.trim()}</strong></div>` +
                       `<div>${explanation}</div>`;
      panel.classList.add('open');

      // small flash effect
      m.style.transition = 'box-shadow .18s ease, transform .12s ease';
      m.style.boxShadow = '0 10px 20px rgba(11,90,167,0.12)';
      setTimeout(()=> m.style.boxShadow = '', 420);
    });
  });

  // close panel
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  // "show all explanations" toggles data-explanations inline
  let allShown = false;
  toggleAll.addEventListener('click', () => {
    allShown = !allShown;
    if (allShown) {
      // show combined explanations in panel
      const combined = Array.from(metaphors).map(m => `<p><strong>${m.textContent.trim()}</strong><br>${m.dataset.explanation}</p>`).join('');
      text.innerHTML = combined || 'Inga metaforer funna';
      panel.classList.add('open');
      toggleAll.textContent = 'Dölj förklaringar';
    } else {
      text.textContent = 'Klicka på en markerad fras i inlägget för att se hur den används retoriskt.';
      panel.classList.remove('open');
      toggleAll.textContent = 'Visa förklaringar';
    }
  });
});
