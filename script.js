(() => {
  let remaining = 1 * 86400 + 2 * 3600 + 13 * 60 + 28;
  const timer = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };
  const pad = n => String(n).padStart(2, '0');
  const render = () => {
    const d = Math.floor(remaining / 86400);
    const h = Math.floor((remaining % 86400) / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;
    if (timer.days) timer.days.textContent = pad(d);
    if (timer.hours) timer.hours.textContent = pad(h);
    if (timer.minutes) timer.minutes.textContent = pad(m);
    if (timer.seconds) timer.seconds.textContent = pad(s);
  };
  render();
  window.setInterval(() => { if (remaining > 0) remaining -= 1; render(); }, 1000);
})();
