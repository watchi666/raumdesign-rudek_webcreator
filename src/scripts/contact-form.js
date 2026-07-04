const form = document.getElementById('kontaktformular');

if (form) {
  const status = document.getElementById('form-status');
  const message = document.getElementById('message');
  const counter = document.getElementById('zeichen-stand');
  const email = form.dataset.email;

  if (message && counter) {
    const updateCounter = () => {
      const len = message.value.length;
      counter.textContent = String(len);
      counter.parentElement.classList.toggle('nah', len > 1350);
    };
    message.addEventListener('input', updateCounter);
    updateCounter();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('Name') || '').trim();
    const from = String(data.get('E-Mail') || '').trim();
    const phone = String(data.get('Telefon') || '').trim();
    const text = String(data.get('Nachricht') || '').trim();

    if (!name || !from || !text) {
      status.textContent = 'Bitte Name, E-Mail und Nachricht ausfüllen.';
      return;
    }

    const subject = `Anfrage von ${name} über raumdesign-rudek.de`;
    const bodyLines = [text, '', `Name: ${name}`, `E-Mail: ${from}`];
    if (phone) bodyLines.push(`Telefon: ${phone}`);
    const body = bodyLines.join('\n');
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    status.innerHTML = `Ihr E-Mail-Programm sollte sich jetzt öffnen. Falls nicht: <a href="${mailtoUrl}">E-Mail direkt öffnen</a> oder <button type="button" id="kopier-knopf" class="text-link">Text kopieren</button> und selbst an ${email} senden.`;

    const copyBtn = document.getElementById('kopier-knopf');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(`${subject}\n\n${body}`);
          copyBtn.textContent = 'Kopiert!';
        } catch {
          copyBtn.textContent = 'Kopieren fehlgeschlagen';
        }
      });
    }
  });
}
