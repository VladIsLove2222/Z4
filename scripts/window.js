document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
  
    // Открыть модальное окно
    document.querySelector(".map").addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        caption.textContent = event.target.title;
      }
    });
  
    // Закрытие модального окна при клике на кнопку "закрыть"
    document.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Закрытие модального окна при клике вне содержимого
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Закрытие модального окна при нажатии клавиши Esc
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  });
  