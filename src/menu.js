export function loadMenu() {
    const content = document.getElementById('content');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
    
    const appetizersHeading = document.createElement('h3');
    appetizersHeading.textContent = 'Appetizers';
    
    const item1 = document.createElement('p');
    item1.textContent = 'Truffle Fries - $12';
    
    const item2 = document.createElement('p');
    item2.textContent = 'Bruschetta - $10';
    
    const item3 = document.createElement('p');
    item3.textContent = 'Caesar Salad - $11';
    
    const mainsHeading = document.createElement('h3');
    mainsHeading.textContent = 'Main Courses';
    
    const item4 = document.createElement('p');
    item4.textContent = 'Grilled Salmon - $28';
    
    const item5 = document.createElement('p');
    item5.textContent = 'Filet Mignon - $35';
    
    const item6 = document.createElement('p');
    item6.textContent = 'Chicken Parmesan - $24';
    
    content.appendChild(heading);
    content.appendChild(appetizersHeading);
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    content.appendChild(mainsHeading);
    content.appendChild(item4);
    content.appendChild(item5);
    content.appendChild(item6);
}