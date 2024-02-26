// element toggle function
const elementToggleFunc = function(elem) {
    elem.classList.toggle("active");
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() {
    elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// momorize position of the window
let previousScrollPosition = window.scrollY || document.documentElement.scrollTop;

// add event to all nav link
navigationLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        const targetPage = document.getElementById(this.dataset.navLink);

        pages.forEach(page => {
            if (page === targetPage) {
                page.classList.add("active");
                link.classList.add("active");
            } else {
                page.classList.remove("active");
                const correspondingLink = document.querySelector(`[data-nav-link="${page.dataset.page}"]`);
                correspondingLink.classList.remove("active");
            }
        });

        // update url
        window.location.hash = this.dataset.navLink;

        // update position of the window
        window.scrollTo(0, previousScrollPosition);
    });
});

// check if there is a hash in the URL and simulate a click on the corresponding link
window.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash.substring(1);
    const targetLink = document.querySelector(`[data-nav-link="${hash}"]`);
    if (targetLink) {
        targetLink.click();
    }
});

// update the current position of the window before scrolling
window.addEventListener("scroll", function() {
    previousScrollPosition = window.scrollY || document.documentElement.scrollTop;
});
