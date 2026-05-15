document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const galleryImages = document.querySelectorAll('.lightbox-trigger');

    // Open lightbox
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImg.src = img.src;
            captionText.textContent = img.alt;
        });
    });

    // Close functions
    const closeModal = () => {
        modal.classList.remove('show');
    };

    closeBtn.addEventListener('click', closeModal);

    // Close when clicking empty space background
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});
