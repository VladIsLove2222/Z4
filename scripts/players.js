document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupLinks = document.getElementById('popup-links');
    const closePopup = document.querySelector('.closep');
  
    // Данные для ссылок
    const popupData = {
      1: [
        { href: 'miniatures.html', src: 'img/crew.jpg', alt: 'Link 1' },
        { href: 'npc.html', src: 'img/sam.jpg', alt: 'Link 2' },
      ],
      2: [
        { href: 'miniatures.html', src: 'img/wili_mini.jpg', alt: 'Link 3' },
        { href: 'characters.html', src: 'img/wilgelm.jpg', alt: 'Link 4' },
      ],
      3: [
        { href: 'miniatures.html', src: 'img/gektor_mini.jpg', alt: 'Link 5' },
        { href: 'characters.html', src: 'img/gektor.jpg', alt: 'Link 6' },
      ],
      4: [
        { href: 'miniatures.html', src: 'img/betrin_mini.jpg', alt: 'Link 7' },
        { href: 'characters.html', src: 'img/betrin.jpg', alt: 'Link 8' },
      ],
      5: [
        { href: 'miniatures.html', src: 'img/ourten_mini.jpg', alt: 'Link 9' },
        { href: 'characters.html', src: 'img/ourten.jpg', alt: 'Link 10' },
      ],
      6: [
        { href: 'miniatures.html', src: 'img/ash_mini.jpg', alt: 'Link 11' },
        { href: 'characters.html', src: 'img/ash.jpg', alt: 'Link 12' },
      ],
      7: [
        { href: 'miniatures.html', src: 'img/kaira_mini.jpg', alt: 'Link 13' },
        { href: 'characters.html', src: 'img/kaira.jpg', alt: 'Link 14' },
      ],
    };
  
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const popupId = item.getAttribute('data-popup');
        const imgSrc = item.src;
  
        // Установка изображения в попапе
        popupImage.src = imgSrc;
  
        // Очистка и добавление уникальных ссылок
        popupLinks.innerHTML = '';
        popupData[popupId].forEach(link => {
          const a = document.createElement('a');
          a.href = link.href;
          const img = document.createElement('img');
          img.src = link.src;
          img.alt = link.alt;
          a.appendChild(img);
          popupLinks.appendChild(a);
        });
  
        // Показ попапа
        popup.style.display = 'flex';
      });
    });
  
    // Закрытие попапа
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  