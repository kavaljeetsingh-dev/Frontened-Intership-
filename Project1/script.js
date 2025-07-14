function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12;
  h = h ? h : 12; // 0 should be 12

  document.getElementById('hours').textContent = h.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
  document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
