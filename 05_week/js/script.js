// Week 05: JavaScript Basics - Interactive Demos

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Week 05: JavaScript Basics!');

    // Initialize all JavaScript demos
    setupEventListeners();
    initializeVariableDemo();
    initializeDataTypeDemo();
    initializeFunctionDemo();
    initializeDOMDemo();
    initializeEventDemo();
});

// Setup event listeners for all interactive elements
function setupEventListeners() {
    // Make sure all demo functions are available globally
    window.demonstrateVariables = demonstrateVariables;
    window.demonstrateDataTypes = demonstrateDataTypes;
    window.callFunctionDemo = callFunctionDemo;
    window.changeDOM = changeDOM;
    window.resetDOM = resetDOM;
}

// Variable demonstration
function demonstrateVariables() {
    const output = document.getElementById('variable-output');

    // Demonstrate different variable types
    let userName = "Alice";
    let userAge = 25;
    const PI = 3.14159;

    // Show variable reassignment
    userAge = 26;

    // Display results
    output.innerHTML = `
        <h4>Variable Demonstration:</h4>
        <p><strong>Name (let):</strong> ${userName}</p>
        <p><strong>Age (let, reassigned):</strong> ${userAge}</p>
        <p><strong>PI (const):</strong> ${PI}</p>
        <p><em>Open console to see more details!</em></p>
    `;

    // Console logging for debugging
    console.log("Variable values:");
    console.log("Name:", userName);
    console.log("Age:", userAge);
    console.log("PI:", PI);
}

// Data types demonstration
function demonstrateDataTypes() {
    const output = document.getElementById('data-type-output');

    // Demonstrate different data types
    const examples = {
        string: "Hello World",
        number: 42,
        boolean: true,
        null: null,
        undefined: undefined,
        array: [1, 2, 3, 4, 5],
        object: {name: "John", age: 25, city: "New York"}
    };

    let html = '<h4>Data Types in JavaScript:</h4>';

    for (const [type, value] of Object.entries(examples)) {
        html += `<p><strong>${type}:</strong> ${JSON.stringify(value)} (type: ${typeof value})</p>`;
    }

    output.innerHTML = html;

    // Console logging
    console.log("Data types demonstration:");
    console.table(examples);
}

// Function demonstration
function callFunctionDemo() {
    const input = document.getElementById('user-name');
    const output = document.getElementById('function-output');
    const name = input.value.trim() || "Anonymous";

    // Demonstrate different function types
    const greeting = greetUser(name);
    const calculation = addNumbers(10, 5);
    const multiplication = multiply(6, 7);

    output.innerHTML = `
        <h4>Function Results:</h4>
        <p><strong>Greeting:</strong> ${greeting}</p>
        <p><strong>Addition (10 + 5):</strong> ${calculation}</p>
        <p><strong>Multiplication (6 × 7):</strong> ${multiplication}</p>
    `;

    console.log("Function calls:");
    console.log("Greeting:", greeting);
    console.log("Addition:", calculation);
    console.log("Multiplication:", multiplication);
}

// Function declarations (different styles)
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}

const addNumbers = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

// DOM manipulation demonstration
function changeDOM() {
    const element = document.getElementById('dom-element');

    // Change various properties
    element.textContent = "I've been changed by JavaScript!";
    element.style.backgroundColor = "#3498db";
    element.style.color = "white";
    element.style.fontSize = "1.2rem";
    element.style.padding = "1rem";
    element.style.borderRadius = "8px";
    element.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    console.log("DOM element changed!");
}

function resetDOM() {
    const element = document.getElementById('dom-element');

    // Reset to original state
    element.textContent = "Click me to change!";
    element.style.backgroundColor = "";
    element.style.color = "";
    element.style.fontSize = "";
    element.style.padding = "";
    element.style.borderRadius = "";
    element.style.boxShadow = "";

    console.log("DOM element reset!");
}

// Event handling demonstration
function initializeEventDemo() {
    const button = document.getElementById('event-button');
    const input = document.getElementById('event-input');
    const output = document.getElementById('event-output');

    let clickCount = 0;

    // Click event
    button.addEventListener('click', function() {
        clickCount++;
        output.innerHTML = `
            <p><strong>Button clicked!</strong></p>
            <p>Click count: ${clickCount}</p>
            <p>Event type: click</p>
            <p>Timestamp: ${new Date().toLocaleTimeString()}</p>
        `;
        console.log(`Button clicked ${clickCount} times`);
    });

    // Mouse events
    button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e74c3c';
        this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.transform = '';
    });

    // Keyboard events
    let keyCount = 0;
    input.addEventListener('keydown', function(event) {
        keyCount++;
        output.innerHTML = `
            <p><strong>Key pressed!</strong></p>
            <p>Key: ${event.key}</p>
            <p>Key count: ${keyCount}</p>
            <p>Event type: keydown</p>
        `;
        console.log(`Key pressed: ${event.key} (total: ${keyCount})`);
    });

    input.addEventListener('input', function() {
        console.log(`Input value changed to: "${this.value}"`);
    });
}

// Initialize other demos on page load
function initializeVariableDemo() {
    // Variable demo is handled by the button click
}

function initializeDataTypeDemo() {
    // Data type demo is handled by the button click
}

function initializeFunctionDemo() {
    // Function demo is handled by the button click
}

function initializeDOMDemo() {
    // DOM demo is handled by the button clicks
}

// Add CSS for interactive demos
const style = document.createElement('style');
style.textContent = `
    .variable-demo, .data-type-demo, .function-demo, .dom-demo, .event-demo {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        border: 2px solid #9b59b6;
    }

    .variable-demo button, .data-type-demo button, .function-demo button,
    .dom-demo button, .event-demo button {
        background: #9b59b6;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        margin: 0.5rem;
    }

    .variable-demo button:hover, .data-type-demo button:hover,
    .function-demo button:hover, .dom-demo button:hover, .event-demo button:hover {
        background: #8e44ad;
    }

    .function-demo input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin: 0.5rem;
        font-size: 1rem;
    }

    .dom-box {
        background: #ecf0f1;
        padding: 1rem;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 1rem 0;
        border: 2px solid #bdc3c7;
    }

    .dom-box:hover {
        border-color: #3498db;
    }

    #event-button {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        margin: 0.5rem;
        transition: all 0.3s ease;
    }

    #event-button:hover {
        background: #c0392b;
        transform: scale(1.05);
    }

    #event-input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin: 0.5rem;
        font-size: 1rem;
        width: 200px;
    }

    #event-output {
        background: #ecf0f1;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        border: 1px solid #bdc3c7;
    }
`;

document.head.appendChild(style);

// Initialize event demo
initializeEventDemo();

// Console welcome message
console.log(`
⚡ Welcome to Week 05: JavaScript Basics!

Try these interactive features:
- Click "Try Variables" to see variable types in action
- Click "Show Data Types" to explore JavaScript data types
- Enter your name and click "Call Function" to see function calls
- Click "Change Element" to manipulate the DOM
- Try the event handling demo with the button and input field

JavaScript brings interactivity to the web!
`);
