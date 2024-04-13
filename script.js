document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.hamburger-button');
    var menu = document.querySelector('.menu-content');
    var closeButton = document.querySelector('.close-button');

    button.addEventListener('click', function() {
        menu.classList.add('show'); // Adds class to show menu and close button
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('show'); // Removes class to hide menu and close button
    });
});
