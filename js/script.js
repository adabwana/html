// Basic JavaScript for HTML Learning Template
// This file demonstrates fundamental JavaScript concepts

// DOM Content Loaded - ensures the page is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML Learning Template loaded successfully!');

    // Initialize all interactive features
    initializeNavigation();
    initializeFormHandling();
    initializeDynamicContent();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Add active class to clicked link
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Highlight current section on scroll
    window.addEventListener('scroll', highlightCurrentSection);
}

function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Form handling
function initializeFormHandling() {
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Validate form
            if (validateForm(formObject)) {
                // Show success message
                showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');

                // Reset form
                this.reset();
            }
        });
    }
}

function validateForm(data) {
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showMessage('Please fill in all required fields.', 'error');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return false;
    }

    return true;
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    // Style the message
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        font-weight: bold;
        ${type === 'success' ?
            'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' :
            'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;

    // Insert message before the form
    const form = document.querySelector('form');
    form.parentNode.insertBefore(messageDiv, form);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Dynamic content examples
function initializeDynamicContent() {
    // Add current date to footer
    const footer = document.querySelector('footer p:first-child');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2024', currentYear);
    }

    // Create a dynamic counter
    createCounter();

    // Add interactive list items
    makeListsInteractive();
}

function createCounter() {
    const counterSection = document.createElement('section');
    counterSection.innerHTML = `
        <h2>JavaScript Interactivity</h2>
        <p>Click the buttons below to see JavaScript in action:</p>
        <div class="counter-container">
            <button id="decrease">-</button>
            <span id="counter">0</span>
            <button id="increase">+</button>
            <button id="reset">Reset</button>
        </div>
        <p id="counter-message">Counter: 0</p>
    `;

    // Insert after the contact section
    const contactSection = document.getElementById('contact');
    contactSection.parentNode.insertBefore(counterSection, contactSection.nextSibling);

    // Add counter functionality
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const messageDisplay = document.getElementById('counter-message');

    document.getElementById('increase').addEventListener('click', () => {
        count++;
        updateCounter();
    });

    document.getElementById('decrease').addEventListener('click', () => {
        count--;
        updateCounter();
    });

    document.getElementById('reset').addEventListener('click', () => {
        count = 0;
        updateCounter();
    });

    function updateCounter() {
        counterDisplay.textContent = count;
        messageDisplay.textContent = `Counter: ${count}`;

        // Change color based on value
        if (count > 0) {
            counterDisplay.style.color = '#27ae60';
        } else if (count < 0) {
            counterDisplay.style.color = '#e74c3c';
        } else {
            counterDisplay.style.color = '#2c3e50';
        }
    }
}

function makeListsInteractive() {
    // Add click handlers to list items
    const listItems = document.querySelectorAll('ul li, ol li');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('completed');

            if (this.classList.contains('completed')) {
                this.style.textDecoration = 'line-through';
                this.style.opacity = '0.6';
            } else {
                this.style.textDecoration = 'none';
                this.style.opacity = '1';
            }
        });

        // Add cursor pointer to indicate interactivity
        item.style.cursor = 'pointer';
    });
}

// Animation examples
function initializeAnimations() {
    // Add fade-in animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add some CSS for the counter buttons
    const style = document.createElement('style');
    style.textContent = `
        .counter-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin: 1rem 0;
            padding: 1rem;
            background-color: #f8f9fa;
            border-radius: 8px;
        }

        .counter-container button {
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
            border: 2px solid #3498db;
            background-color: white;
            color: #3498db;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .counter-container button:hover {
            background-color: #3498db;
            color: white;
        }

        #counter {
            font-size: 2rem;
            font-weight: bold;
            min-width: 3rem;
            text-align: center;
        }

        #counter-message {
            margin-top: 1rem;
            font-style: italic;
        }
    `;
    document.head.appendChild(style);
}

// Utility functions that might be useful for students
function getElementInfo(element) {
    return {
        tagName: element.tagName,
        id: element.id,
        className: element.className,
        innerText: element.innerText.substring(0, 50) + '...'
    };
}

function logAllHeadings() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log('Page headings:');
    headings.forEach((heading, index) => {
        console.log(`${index + 1}. ${heading.tagName}: ${heading.textContent}`);
    });
}

// Make utility functions available globally for console testing
window.getElementInfo = getElementInfo;
window.logAllHeadings = logAllHeadings;

// Console welcome message with instructions
console.log(`
🎉 Welcome to the HTML Learning Template!

Try these commands in the console:
- logAllHeadings() - See all headings on the page
- getElementInfo(document.querySelector('h1')) - Get info about an element

Happy coding! 🚀
`);
