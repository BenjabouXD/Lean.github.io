document.addEventListener("DOMContentLoaded", () => {
  const watermark = document.getElementById("watermark");

  if (!watermark) return;

  // Activa el arcoíris al pasar el cursor
  watermark.addEventListener("mouseenter", () => {
    watermark.classList.add("rainbow-active");
  });

  // Vuelve al estado camuflado al quitar el cursor
  watermark.addEventListener("mouseleave", () => {
    watermark.classList.remove("rainbow-active");
  });
});