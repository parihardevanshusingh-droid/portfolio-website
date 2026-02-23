window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-opacity-90');
    } else {
        document.querySelector('.navbar').classList.remove('bg-opacity-90');
    }
});