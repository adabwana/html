// Week 03: CSS Fundamentals - Interactive CSS Demo

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Week 03: CSS Fundamentals!');

    // Add interactive CSS demos
    addSelectorDemo();
    addBoxModelDemo();
    addColorPickerDemo();
});

// Interactive selector demo
function addSelectorDemo() {
    const demoElements = document.querySelectorAll('.element-selector, #id-selector, .class-selector');

    demoElements.forEach(element => {
        element.addEventListener('click', function() {
            // Toggle different styles based on selector type
            if (this.classList.contains('element-selector')) {
                this.classList.toggle('element-highlight');
            } else if (this.id === 'id-selector') {
                this.classList.toggle('id-highlight');
            } else if (this.classList.contains('class-selector')) {
                this.classList.toggle('class-highlight');
            }
        });
    });
}

// Interactive box model demo
function addBoxModelDemo() {
    const boxDemo = document.querySelector('.box-model-demo');

    if (boxDemo) {
        // Create controls for box model properties
        const controls = document.createElement('div');
        controls.id = 'box-controls';
        controls.innerHTML = `
            <h4>Adjust Box Model:</h4>
            <label>Padding: <input type="range" id="padding-slider" min="0" max="50" value="20"></label>
            <label>Border: <input type="range" id="border-slider" min="0" max="10" value="5"></label>
            <label>Margin: <input type="range" id="margin-slider" min="0" max="50" value="20"></label>
        `;

        boxDemo.parentNode.insertBefore(controls, boxDemo.nextSibling);

        // Add event listeners
        document.getElementById('padding-slider').addEventListener('input', function() {
            boxDemo.style.padding = this.value + 'px';
        });

        document.getElementById('border-slider').addEventListener('input', function() {
            boxDemo.style.borderWidth = this.value + 'px';
        });

        document.getElementById('margin-slider').addEventListener('input', function() {
            boxDemo.style.margin = this.value + 'px auto';
        });
    }
}

// Color picker demo
function addColorPickerDemo() {
    const colorDemos = document.querySelectorAll('.color-demo');

    colorDemos.forEach(demo => {
        // Store click count per demo element
        demo.dataset.clickCount = 0;

        // Clear initial text and set to first representation
        const colorClass = Array.from(demo.classList).find(cls => cls.startsWith('color'));
        const representations = getColorRepresentations(colorClass);
        demo.textContent = representations[0];

        demo.addEventListener('click', function() {
            let clickCount = parseInt(this.dataset.clickCount) || 0;

            const colorClass = Array.from(this.classList).find(cls => cls.startsWith('color'));
            const representations = getColorRepresentations(colorClass);

            clickCount = (clickCount + 1) % representations.length;
            this.dataset.clickCount = clickCount;

            const currentRepresentation = representations[clickCount];
            this.textContent = currentRepresentation;
            this.style.color = getContrastColor(colorClass);
        });
    });
}

// Helper function to get color representations based on class
function getColorRepresentations(colorClass) {
    const representations = {
        'color1': ['red', '#ff0000', 'rgb(255, 0, 0)', 'hsl(0, 100%, 50%)'],
        'color2': ['#3498db', 'rgb(52, 152, 219)', 'hsl(204, 70%, 53%)', '#3498db'],
        'color3': ['rgb(255, 165, 0)', 'orange', '#ffa500', 'hsl(39, 100%, 50%)'],
        'color4': ['hsl(120, 100%, 50%)', '#00ff00', 'rgb(0, 255, 0)', 'green']
    };

    return representations[colorClass] || representations['color1'];
}

// Helper function to get contrasting text color
function getContrastColor(colorClass) {
    // Simple contrast detection - return white for darker colors, black for lighter
    const colorMap = {
        'color1': 'white',  // red background
        'color2': 'white',  // blue background
        'color3': 'black',  // orange background
        'color4': 'black'   // green background
    };

    return colorMap[colorClass] || 'black';
}

// Add CSS for interactive demos
const style = document.createElement('style');
style.textContent = `
    .element-highlight {
        background-color: #fff3cd;
        border: 2px solid #f39c12;
        transition: all 0.3s ease;
    }

    .id-highlight {
        color: #e74c3c;
        font-weight: bold;
        text-decoration: underline;
        transition: all 0.3s ease;
    }

    .class-highlight {
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        transform: scale(1.05);
        transition: all 0.3s ease;
    }

    #box-controls {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        border: 2px solid #27ae60;
    }

    #box-controls label {
        display: block;
        margin: 0.5rem 0;
        font-weight: bold;
    }

    #box-controls input[type="range"] {
        width: 100%;
        margin-top: 0.5rem;
    }

    .color-demo {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .color-demo:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

document.head.appendChild(style);

// Console welcome message
console.log(`
🎨 Welcome to Week 03: CSS Fundamentals!

Try these interactive features:
- Click on the selector demo elements to see different styles
- Use the sliders to adjust the box model properties
- Click on color demo boxes to cycle through colors

CSS is all about visual presentation and layout!
`);
