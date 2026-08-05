export function loadContact() {
    const content = document.getElementById('content');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    
    const address = document.createElement('p');
    address.textContent = 'Address: 123 Gourmet Street, Foodville, FD 12345';
    
    const phone = document.createElement('p');
    phone.textContent = 'Phone: (555) 123-4567';
    
    const email = document.createElement('p');
    email.textContent = 'Email: info@gourmethaven.com';
    
    const hoursHeading = document.createElement('h3');
    hoursHeading.textContent = 'Hours of Operation';
    
    const weekdayHours = document.createElement('p');
    weekdayHours.textContent = 'Monday - Thursday: 11:30 AM - 10:00 PM';
    
    const weekendHours = document.createElement('p');
    weekendHours.textContent = 'Friday - Saturday: 11:30 AM - 11:00 PM';
    
    const sundayHours = document.createElement('p');
    sundayHours.textContent = 'Sunday: 10:00 AM - 9:00 PM';
    
    content.appendChild(heading);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(hoursHeading);
    content.appendChild(weekdayHours);
    content.appendChild(weekendHours);
    content.appendChild(sundayHours);
}