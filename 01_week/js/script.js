// Week 01: HTML Basics - Basic JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Week 01: HTML Basics!');

    // Add click handlers to headings to demonstrate JavaScript interaction
    addHeadingInteractions();

    // Add a simple counter to show dynamic content
    addSimpleCounter();

    // Highlight code examples when clicked
    addCodeHighlighting();
});

function addHeadingInteractions() {
    const headings = document.querySelectorAll('h1, h2, h3');

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            // Toggle a highlight class
            this.classList.toggle('heading-highlight');

            // Show a message in console
            console.log(`Clicked on: ${this.tagName} - ${this.textContent}`);
        });
    });
}

function addSimpleCounter() {
    // Create a simple counter section
    const counterSection = document.createElement('div');
    counterSection.id = 'counter-section';
    counterSection.innerHTML = `
        <h3>JavaScript Demo: Simple Counter</h3>
        <p>Click the buttons to change the counter value.</p>
        <div style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0;">
            <button id="decrease">-</button>
            <span id="counter-value" style="font-size: 2rem; font-weight: bold; min-width: 3rem; text-align: center;">0</span>
            <button id="increase">+</button>
            <button id="reset">Reset</button>
        </div>
        <p id="counter-message">The counter shows: 0</p>
    `;

    // Insert after the first section
    const firstSection = document.querySelector('section');
    firstSection.parentNode.insertBefore(counterSection, firstSection.nextSibling);

    // Add counter functionality
    let count = 0;
    const counterDisplay = document.getElementById('counter-value');
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
        messageDisplay.textContent = `The counter shows: ${count}`;

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

function addCodeHighlighting() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            // Toggle highlighting
            this.classList.toggle('code-highlighted');

            // Copy to clipboard (if supported)
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.textContent).then(() => {
                    console.log('Code copied to clipboard!');
                });
            }
        });
    });
}

// Add some CSS for the interactions
const style = document.createElement('style');
style.textContent = `
    .heading-highlight {
        background-color: #fff3cd;
        padding: 0.5rem;
        border-radius: 4px;
        transition: all 0.3s ease;
    }

    .code-highlighted {
        background-color: #d4edda !important;
        border: 2px solid #27ae60;
        transition: all 0.3s ease;
    }

    #counter-section {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin: 2rem 0;
    }

    #counter-section button {
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        border: 2px solid #3498db;
        background: white;
        color: #3498db;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    #counter-section button:hover {
        background: #3498db;
        color: white;
    }

    #counter-section #reset {
        background: #e74c3c;
        border-color: #e74c3c;
        color: white;
    }

    #counter-section #reset:hover {
        background: #c0392b;
        border-color: #c0392b;
    }
`;

document.head.appendChild(style);

// Console welcome message
console.log(`
🎉 Welcome to Week 01: HTML Basics!

This page demonstrates:
- Basic HTML structure
- Common HTML elements
- Simple JavaScript interactions

Try clicking on headings and code blocks to see JavaScript in action!
`);
