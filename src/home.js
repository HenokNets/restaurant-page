export function loadHome() {
    const content = document.getElementById('content');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Gourmet Haven';
    
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Experience culinary excellence at our restaurant. We serve the finest dishes made from fresh, local ingredients.';
    
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Established in 2010, we\'ve been delighting customers with our innovative cuisine and warm atmosphere.';
    
    content.appendChild(heading);
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
}