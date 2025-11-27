document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // FORMULARIO
    // ===========================
    const form = document.querySelector('.contact-form');
    if (form) {
        /* SELECTORES */
        const inputName = document.querySelector('#name');
        const inputEmail = document.querySelector('#email');
        const inputMessage = document.querySelector('#message');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameValue = inputName.value.trim();
            const emailValue = inputEmail.value.trim();
            const messageValue = inputMessage.value.trim();

            if (nameValue === '' || emailValue === '' || messageValue === '') {
                alert('⚠ Por favor completa todos los campos antes de enviar.');
                return;
            }

            alert(`¡Gracias ${nameValue}! Tu mensaje ha sido enviado correctamente. 📨`);
            form.reset();
        });
    }
    // ===========================
    // GALERÍA 
    // ===========================

    /* SELECTORES */
    const searchInput = document.querySelector('#searchInput');
    const searchBtn = document.querySelector('#searchBtn');
    const searchMessage = document.querySelector('#searchMessage');
    const clearBtn = document.querySelector('#clearBtn');

    if (searchBtn && clearBtn) {

        const galleryItems = document.querySelectorAll('.gallery-item');

        searchBtn.addEventListener('click', () => {
            const userSearch = searchInput.value.trim().toLowerCase();

            if (userSearch === '') {
                alert('⚠ Por favor escribe qué deseas buscar en la galería.');
                return;
            }

            let matches = 0;

            galleryItems.forEach(item => {
                const altText = item.querySelector('img').alt.toLowerCase();

                if (altText.includes(userSearch)) {
                    item.style.display = "block";
                    matches++;
                } else {
                    item.style.display = "none";
                }
            });

            if (matches === 0) {
                searchMessage.textContent = `❌ No se encontraron resultados para "${userSearch}".`;
            } else {
                searchMessage.textContent = `🔎 Resultados para "${userSearch}": ${matches} coincidencia(s).`;
            }

            searchMessage.classList.remove('hidden');
        });

        // Botón para limpiar búsqueda
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchMessage.textContent = '';
            searchMessage.classList.add('hidden');

            galleryItems.forEach(item => {
                item.style.display = "block";
            });
        });
    }

});
