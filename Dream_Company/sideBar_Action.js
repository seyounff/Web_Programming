const section_js = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.sidebar ul li a');

const observer_js_options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};


const observer_js = new IntersectionObserver((entries, observer_js) => {
    entries.forEach(entry => {
        const index = Array.from(section_js).indexOf(entry.target);
        
        if (entry.isIntersecting) {
            menuItems[index].style.color = "#A9F5F2"; 
        } else {
            menuItems[index].style.color = "white";
        }
    });
}, observer_js_options);

section_js.forEach(section => {
    observer_js.observe(section);
});
