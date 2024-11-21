// Класс для управления каруселью
class Carousel {
    constructor(carouselSelector, popupSelector) {
        this.carouselInner = document.querySelector(`${carouselSelector} .carousel-inner`);
        this.items = document.querySelectorAll(`${carouselSelector} .carousel-item`);
        this.prevButton = document.querySelector(`${carouselSelector} .prev`);
        this.nextButton = document.querySelector(`${carouselSelector} .next`);
        this.popup = document.querySelector(popupSelector);
        this.popupTitle = document.querySelector(`${popupSelector} #popup-title`);
        this.popupText = document.querySelector(`${popupSelector} #popup-text`);
        this.popupImage = document.querySelector(`${popupSelector} #popup-image`);
        this.closePopupButton = document.querySelector(`${popupSelector} .close`);

        this.totalSlides = 3; // Общее количество слайдов
        this.index = 0; // Начальный индекс

        this.init(); // Инициализация
        this.updateCarousel(false); // Установить начальное положение без анимации
    }

    // Метод для обновления карусели
    updateCarousel(animated = true) {
        this.carouselInner.style.transition = animated ? 'transform 1s ease' : 'none';
        this.carouselInner.style.transform = `translateX(-${this.index * 67}%)`;
    }

    // Метод для обработки клика на "Prev"
    prev() {
        if (this.index > 0) {
            this.index--;
            this.updateCarousel();
        }
    }

    // Метод для обработки клика на "Next"
    next() {
        if (this.index < this.totalSlides - 1) {
            this.index++;
            this.updateCarousel();
        }
    }

    // Метод для открытия попапа
    openPopup(title, text, imageSrc) {
        this.popupTitle.textContent = title || ''; // Проверяем title
        this.popupText.innerHTML = text || ''; // Проверяем text
        if (imageSrc) {
            this.popupImage.setAttribute('src', imageSrc); // Устанавливаем картинку
            this.popupImage.style.display = 'block';
        } else {
            this.popupImage.style.display = 'none'; // Скрываем картинку, если её нет
        }
        this.popup.style.display = 'flex'; // Показываем попап
    }

    // Метод для закрытия попапа
    closePopup() {
        this.popup.style.display = 'none';
    }

    // Метод для инициализации событий
    init() {
        // Добавляем события на кнопки
        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());

        // Добавляем событие клика на элементы карусели
        this.items.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.getAttribute('data-title');
                const text = item.getAttribute('data-text');
                const imageSrc = item.getAttribute('data-popup-image');
                this.openPopup(title, text, imageSrc);
            });
        });

        // Закрытие попапа при клике на крестик
        this.closePopupButton.addEventListener('click', () => this.closePopup());

        // Закрытие попапа при клике вне содержимого
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.closePopup();
            }
        });
    }
}

// Создание экземпляра карусели
document.addEventListener("DOMContentLoaded", () => {
    new Carousel('.carousel', '#popup');
});
