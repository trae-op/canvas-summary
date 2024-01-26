navigateTo(window.location.hash.substring(2));
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(2); // Remove the '#' symbol
    navigateTo(hash);
});

function navigateTo(view) {
    switch (view) {
        case 'skills': {
            updateMetaTags('Skills', 'My skills', location.href);
            break;
        }
        case 'contacts': {
            updateMetaTags('Contacts', 'My contacts', location.href);
            break;
        }
        case 'company': {
            updateMetaTags('Companies', 'Companies where I worked', location.href);
            break;
        }
        default: {
            break;
        }
    }
}