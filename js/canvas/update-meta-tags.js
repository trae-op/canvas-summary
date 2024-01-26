function updateMetaTags(title, description, url, image) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage && image) {
        ogImage.setAttribute('content', image);
    }
    if (ogUrl) ogImage.setAttribute('content', url);

    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', image);
    if (twitterUrl) twitterUrl.setAttribute('content', url);
}