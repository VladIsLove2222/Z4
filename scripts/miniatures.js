document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            title: 'Вильгельм Сиккиния',
            description: 'Миниатюрная фигурка Вильгельма - персонажа команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.  ',
            images: ['img/wili_mini.jpg', 'img/wilgelm.jpg']
        },
        {
            id: 2,
            title: 'Гектор',
            description: 'Миниатюрная фигурка Гектора - персонажа команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.',
            images: ['img/gektor_mini.jpg', 'img/gektor.jpg']
        },
        {
            id: 3,
            title: 'Бетрин Харви',
            description: 'Миниатюрная фигурка Бетрин - персонажа команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.',
            images: ['img/betrin_mini.jpg', 'img/betrin_mini.jpg']
        },
        {
            id: 4,
            title: 'Уртен Дривер',
            description: 'Миниатюрная фигурка Уртера - персонажа команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.',
            images: ['img/ourten_mini.jpg', 'img/ourten_mini.jpg']
        },
        {
            id: 5,
            title: 'Эш',
            description: 'Миниатюрная фигурка Эша - персонажа команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.',
            images: ['img/ash_mini.jpg', 'img/ash_mini.jpg']
        },
        {
            id: 6,
            title: 'Каира',
            description: 'Миниатюрная фигурка Каиры - персонажа команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.',
            images: ['img/kaira_mini.jpg', 'img/kaira_mini.jpg']
        },
        {
            id: 7,
            title: 'Храбрые Сердцем',
            description: 'Миниатюрная фигурки команды приключеницев "Brave of Hearts". Размер фигурки: 1/32.',
            images: ['img/crew.jpg', 'img/crew.jpg']
        },
        {
            id: 8,
            title: 'Тайсон',
            description: 'Миниатюрная фигурка совы - зверя-спутника Гектора.  Размер фигурки: 1/32.',
            images: ['img/taison_mini.jpg', 'img/taison_mini.jpg']
        }
        // Добавьте больше товаров, если нужно
    ];

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', () => {
            const productId = parseInt(product.dataset.id, 10);
            const productData = products.find(p => p.id === productId);

            if (productData) {
                modalTitle.textContent = productData.title;
                modalDescription.textContent = productData.description;
                modalImage.src = productData.images[0];
                modal.style.display = 'flex';
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
