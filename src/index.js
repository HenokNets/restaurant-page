import "./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function initializePage() {
    // Load home page by default
    loadHome();
    
    document.getElementById('home-btn').addEventListener('click', () => {
        clearContent();
        loadHome();
    });
    
    document.getElementById('menu-btn').addEventListener('click', () => {
        clearContent();
        loadMenu();
    });
    
    document.getElementById('contact-btn').addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}

console.log("Webpack is working!");
initializePage();