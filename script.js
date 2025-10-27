document.addEventListener('DOMContentLoaded', () => {
  const metaphors = document.querySelectorAll('.metaphor');
  const panel = document.getElementById('explain-panel');
  const explainText = document.getElementById('explain-text');
  const closeBtn = document.getElementById('close-panel');
  const toggleAll = document.getElementById('toggle-all');
  const toggleTheme = document.getElementById('toggle-theme');
  const citeBtns = document.querySelectorAll('.cite-btn');
  const replyBtns = document.querySelectorAll('.reply-btn');
  const saveReflection = document.getElementById('save-reflection');

  // Metaphor Click
  metaphors.forEach(m => {
    m.addEventEffect('click', () => {
      const explanation = m.dataset.explanation || 'Ingen förklaring tillgänglig';
      explainText.innerHTML = `
        <div style="margin-bottom: 8px;">
          <strong>Markerad fras:</strong> ${m.textContent.trim()}
        </div>
        <div>${explanation}</div>`;
      panel.classList.add('open');
      m.style.transition = 'box-shadow 0.18s ease';
      m.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
      setTimeout(() => (m.style.boxShadow = ''), 420);
    });
  });

  // Close Panel
  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
    explainText.textContent = 'Klicka på en markerad fras för att se dess retoriska funktion.';
  });

  // Toggle All Metaphors
  let allShown = false;
  toggleAll.addEventListener('click', () => {
    allShown = !allShown;
    if (allShown) {
      const combined = Array.from(metaphors)
        .map(m => `<p><strong>${m.textContent.trim()}</strong><br>${m.dataset.explanation}</p>`)
        .join('');
      explainText.innerHTML = combined || 'Inga metaforer funna';
      panel.classList.add('open');
      toggleAll.textContent = 'Dölj alla metaforer';
      metaphors.forEach(m => (m.style.backgroundColor = '#FFFF99'));
    } else {
      explainText.textContent = 'Klicka på en markerad fras för att se dess retoriska funktion.';
      panel.classList.remove('open');
      toggleAll.textContent = 'Visa alla metaforer';
      metaphors.forEach(m => (m.style.backgroundColor = '#FFFF99'));
    }
  });

  // Dark Mode Toggle
  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleTheme.textContent = document.body.classList.contains('dark-mode') ? 'Ljust läge' : 'Mörkt läge';
  });

  // Cite Functionality
  citeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const postContent = btn.closest('.post').querySelector('.post-content').textContent.trim();
      const replyArea = document.getElementById('reply-area');
      replyArea.value += `> ${postContent}\n\n`;
      document.getElementById('reply-form').style.display = 'block';
      replyArea.focus();
    });
  });

  // Reply Functionality
  replyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('reply-form').style.display = 'block';
      document.getElementById('reply-area').focus();
    });
  });

  // Save Reflection
  saveReflection.addEventListener('click', () => {
    const reflection = document.getElementById('reflection-input').value;
    if (reflection) {
      localStorage.setItem(`reflection-${Date.now()}`, reflection);
      alert('Reflektion sparad!');
      document.getElementById('reflection-input').value = '';
    }
  });

  // Collaborative Annotation (Placeholder)
  metaphors.forEach(m => {
    m.addEventListener('dblclick', () => {
      const annotation = prompt('Lägg till en anteckning för denna metafor:');
      if (annotation) {
        localStorage.setItem(`annotation-${m.textContent}-${Date.now()}`, annotation);
        alert('Anteckning sparad!');
      }
    });
  });
});
