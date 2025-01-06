document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('nav-container')) {
        fetch('nav.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('nav-container').innerHTML = html;
                initializeMobileMenu();
            })
            .catch(error => console.error('Error loading nav:', error));
    }
});



// highlight current page

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('nav-container')) {
        fetch('nav.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('nav-container').innerHTML = html;
                initializeMobileMenu();
                highlightCurrentPage(); // Add this line
            })
            .catch(error => console.error('Error loading nav:', error));
    }
});

function highlightCurrentPage() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find and highlight the matching link in both desktop and mobile nav
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-page');
        }
    });
}