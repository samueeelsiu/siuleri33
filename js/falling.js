const MAX_FALLING_ITEMS = 30;
const INTERVAL_MS = 400;
const fallDuration = () => 5000 + Math.random() * 3000;

function createFallingItem() {
  const existing = document.querySelectorAll('.falling-item');
  if (existing.length > MAX_FALLING_ITEMS) return;

  const isEmoji = Math.random() < 0.3;
  const item = document.createElement(isEmoji ? 'div' : 'img');
  const random = fallImages[Math.floor(Math.random() * fallImages.length)];

  if (random.endsWith('.PNG') || random.endsWith('.JPG')) {
    item.src = random;
  } else {
    item.textContent = random;
    item.style.fontSize = `${Math.floor(Math.random() * 20) + 24}px`;
  }

  const size = Math.floor(Math.random() * 30) + 30;
  const left = Math.random() * 100;
  const rotate = Math.random() * 360;
  const duration = fallDuration();
  const opacity = 0.6 + Math.random() * 0.4;

  item.classList.add('falling-item');
  item.style.position = 'fixed';
  item.style.left = `${left}vw`;
  item.style.top = `-60px`;
  item.style.width = `${size}px`;
  item.style.opacity = opacity;
  item.style.zIndex = 9999;
  item.style.pointerEvents = 'none';
  item.style.transition = `transform ${duration}ms linear, top ${duration}ms linear`;
  item.style.transform = `rotate(${rotate}deg)`;

  document.body.appendChild(item);

  // 加入横向风吹效果（曲线左右摆动）
  const wave = 20 * Math.sin(Date.now() / 300);
  requestAnimationFrame(() => {
    item.style.top = "110vh";
    item.style.transform = `translateX(${wave}px) rotate(${rotate + 180}deg)`;
  });

  setTimeout(() => {
    item.remove();
  }, duration + 100);
}

setInterval(createFallingItem, INTERVAL_MS);