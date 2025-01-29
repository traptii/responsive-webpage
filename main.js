function toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    let content = document.querySelector(".content");

    sidebar.classList.toggle("expanded");
    content.classList.toggle("collapsed");
}

function adjustPageSize() {
    const width = window.innerWidth;
    const pageContainer = document.querySelector('.page-container'); 

    pageContainer.style.transform = 'scale(1)';

    // Check screen width and apply corresponding scaling
    if (width >= 992 && width <= 1600) {
        pageContainer.style.transform = 'scale(0.9)';
    } else if (width >= 700 && width <= 767) {
        pageContainer.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width <= 700) {
        pageContainer.style.transform = 'scale(0.75)';
    } else if (width <= 600) {
        pageContainer.style.transform = 'scale(0.5)';
    }
}

// Call the function initially and on window resize
window.addEventListener('resize', adjustPageSize);
adjustPageSize(); // To apply the initial page scaling