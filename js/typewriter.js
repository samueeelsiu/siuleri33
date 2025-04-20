const text = "敬请期待❤️";
let i = 0;
const speed = 150;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

function typeWriterEffect(text, targetId, speed = 100) {
  let i = 0;
  const target = document.getElementById(targetId);
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
