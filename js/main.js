document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#side-menu-button').addEventListener('click', function() {
        if (document.body.className.includes('side-menu')) {
            document.body.className = document.body.className.replace('side-menu', '');
        } else {
            document.body.className += ' side-menu';
        }
    })

});