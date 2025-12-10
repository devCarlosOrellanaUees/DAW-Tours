document.addEventListener('DOMContentLoaded', () => {
    cargarGaleria();

    // ===========================
    // FORMULARIO
    // ===========================
    const form = document.querySelector('.contact-form');
    if (form) {
        /* SELECTORES */
        const inputName = document.querySelector('#name');
        const inputEmail = document.querySelector('#email');
        const inputMessage = document.querySelector('#message');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            event.preventDefault();

            const data = {
                name: inputName.value,
                email: inputEmail.value,
                message: inputMessage.value
            };

            try {
                const response = await fetch('http://localhost:3000/api/contacto', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                alert(`✔ ${result.message}`);
                form.reset();

            } catch (error) {
                alert("❌ Ocurrió un error al enviar el mensaje.");
                console.error(error);
            }


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
    const galleryContent = document.querySelector('.galleryContent');

    if (searchBtn && clearBtn) {


        searchBtn.addEventListener('click', () => {
            const term = searchInput.value.trim().toLowerCase();

            if (term === '') {
                alert("⚠ Escribe algo para buscar");
                return;
            }

            const resultado = galleryData.filter(item =>
                item.descripcion.toLowerCase().includes(term) ||
                item.img.toLowerCase().includes(term)
            );

            if (resultado.length === 0) {
                searchMessage.textContent = `❌ No se encontraron resultados para "${term}".`;
                searchMessage.classList.remove('hidden');
                galleryContent.innerHTML = "";
                return;
            }

            searchMessage.classList.add('hidden');
            renderGaleria(resultado); // vuelve a pintar la galería
        });


        // Botón para limpiar búsqueda
        clearBtn.addEventListener('click', () => {
            searchInput.value = "";
            searchMessage.classList.add('hidden');
            renderGaleria(galleryData);
        });

    }

});


// ======================
// FUNCIÓN PARA CARGAR GALERÍA DESDE API
// ======================
async function cargarGaleria() {
    console.log("entrooo JS")
    try {
        const response = await fetch('http://localhost:3000/api/galeria');
        const data = await response.json();
        console.log(data)

        galleryData = data.data; // Guardamos para búsqueda
        renderGaleria(galleryData);

    } catch (error) {
        console.error("Error al cargar imágenes:", error);
    }
}

// ======================
// RENDERIZAR GALERÍA
// ======================
function renderGaleria(array) {
    galleryContent.innerHTML = ""; // limpiar

    array.forEach(item => {
        galleryContent.innerHTML += `
            <div class="gallery-item">
                <a href="img/${item.img}" class="lightbox">
                    <img src="img/${item.img}" alt="${item.descripcion}">
                </a>
            </div>
        `;
    });
}

