// Week 04: Responsive Design - Interactive Demos

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Week 04: Responsive Design!');

    // Initialize responsive features
    initializeScreenSizeDisplay();
    addResponsiveDemoControls();
    addFlexboxDemos();
});

// Screen size and breakpoint display
function initializeScreenSizeDisplay() {
    const screenWidthElement = document.getElementById('screen-width');
    const breakpointElement = document.getElementById('current-breakpoint');

    if (screenWidthElement && breakpointElement) {
        // Update screen size on load
        updateScreenInfo();

        // Update on window resize
        window.addEventListener('resize', updateScreenInfo);
    }
}

function updateScreenInfo() {
    const screenWidthElement = document.getElementById('screen-width');
    const breakpointElement = document.getElementById('current-breakpoint');

    if (screenWidthElement && breakpointElement) {
        const width = window.innerWidth;
        screenWidthElement.textContent = width;

        // Determine current breakpoint
        let breakpoint = 'Unknown';
        if (width < 576) {
            breakpoint = 'Extra Small (< 576px)';
        } else if (width < 768) {
            breakpoint = 'Small (≥ 576px)';
        } else if (width < 992) {
            breakpoint = 'Medium (≥ 768px)';
        } else if (width < 1200) {
            breakpoint = 'Large (≥ 992px)';
        } else {
            breakpoint = 'Extra Large (≥ 1200px)';
        }

        breakpointElement.textContent = breakpoint;
    }
}

// Responsive demo controls
function addResponsiveDemoControls() {
    const responsiveDemo = document.querySelector('.responsive-demo');

    if (responsiveDemo) {
        // Create control buttons
        const controls = document.createElement('div');
        controls.id = 'responsive-controls';
        controls.innerHTML = `
            <h4>Try Different Layouts:</h4>
            <button id="mobile-layout">Mobile (1 column)</button>
            <button id="tablet-layout">Tablet (sidebar)</button>
            <button id="desktop-layout">Desktop (full)</button>
            <button id="reset-layout">Reset</button>
        `;

        responsiveDemo.parentNode.insertBefore(controls, responsiveDemo.nextSibling);

        // Add event listeners
        document.getElementById('mobile-layout').addEventListener('click', () => setLayout('mobile'));
        document.getElementById('tablet-layout').addEventListener('click', () => setLayout('tablet'));
        document.getElementById('desktop-layout').addEventListener('click', () => setLayout('desktop'));
        document.getElementById('reset-layout').addEventListener('click', () => setLayout('auto'));
    }
}

function setLayout(type) {
    const responsiveDemo = document.querySelector('.responsive-demo');

    // Remove existing layout classes
    responsiveDemo.classList.remove('mobile-layout', 'tablet-layout', 'desktop-layout');

    if (type === 'mobile') {
        responsiveDemo.style.gridTemplateColumns = '1fr';
        responsiveDemo.style.gridTemplateRows = 'auto auto auto auto';
    } else if (type === 'tablet') {
        responsiveDemo.style.gridTemplateColumns = '200px 1fr';
        responsiveDemo.style.gridTemplateRows = 'auto 1fr auto';
        document.querySelector('.demo-sidebar').style.gridRow = '1 / -1';
    } else if (type === 'desktop') {
        responsiveDemo.style.gridTemplateColumns = '250px 1fr 200px';
        responsiveDemo.style.gridTemplateRows = 'auto 1fr auto';
    } else {
        // Reset to auto (responsive)
        responsiveDemo.style.gridTemplateColumns = '';
        responsiveDemo.style.gridTemplateRows = '';
        document.querySelector('.demo-sidebar').style.gridRow = '';
    }
}

// Flexbox interactive demos
function addFlexboxDemos() {
    const flexDemo = document.querySelector('.flex-demo');
    const flexDemo2 = document.querySelector('.flex-demo-2');

    if (flexDemo) {
        // Create flexbox controls
        const controls = document.createElement('div');
        controls.id = 'flex-controls';
        controls.innerHTML = `
            <h4>Flexbox Properties:</h4>
            <label>Justify Content:
                <select id="justify-select">
                    <option value="flex-start">flex-start</option>
                    <option value="center">center</option>
                    <option value="flex-end">flex-end</option>
                    <option value="space-between">space-between</option>
                    <option value="space-around">space-around</option>
                </select>
            </label>
            <label>Align Items:
                <select id="align-select">
                    <option value="stretch">stretch</option>
                    <option value="flex-start">flex-start</option>
                    <option value="center">center</option>
                    <option value="flex-end">flex-end</option>
                </select>
            </label>
            <label>Flex Direction:
                <select id="direction-select">
                    <option value="row">row</option>
                    <option value="column">column</option>
                </select>
            </label>
        `;

        flexDemo.parentNode.insertBefore(controls, flexDemo.nextSibling);

        // Add event listeners
        document.getElementById('justify-select').addEventListener('change', function() {
            flexDemo.style.justifyContent = this.value;
        });

        document.getElementById('align-select').addEventListener('change', function() {
            flexDemo.style.alignItems = this.value;
        });

        document.getElementById('direction-select').addEventListener('change', function() {
            flexDemo.style.flexDirection = this.value;
        });
    }

    if (flexDemo2) {
        // Make flex items resizable
        const flexItems = flexDemo2.querySelectorAll('.flex-item');

        flexItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                const sizes = ['0.5', '1', '1.5', '2'];
                const currentFlex = this.style.flex || '1';
                const currentIndex = sizes.indexOf(currentFlex);
                const nextIndex = (currentIndex + 1) % sizes.length;

                this.style.flex = sizes[nextIndex];
                this.textContent = `Size: ${sizes[nextIndex]}x`;
            });

            // Set initial text
            item.textContent = `Size: ${item.style.flex || '1'}x`;
        });
    }
}

// Add interactive features to navigation demo
function initializeNavDemo() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');
        });
    });
}

// Add CSS for interactive demos
const style = document.createElement('style');
style.textContent = `
    #responsive-controls {
        background: #fff9e6;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        border: 2px solid #f39c12;
    }

    #responsive-controls button {
        background: #f39c12;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin: 0.25rem;
        font-size: 0.9rem;
    }

    #responsive-controls button:hover {
        background: #e67e22;
    }

    #flex-controls {
        background: #fff9e6;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        border: 2px solid #f39c12;
    }

    #flex-controls label {
        display: block;
        margin: 0.5rem 0;
        font-weight: bold;
    }

    #flex-controls select {
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ddd;
        margin-top: 0.25rem;
    }

    .flex-item {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .flex-item:hover {
        transform: scale(1.05);
    }

    .nav-item.active {
        background: #f39c12 !important;
    }

    .nav-item:hover {
        background: #7f8c8d;
    }

    /* Print styles demo */
    @media print {
        .demo-section {
            background: white !important;
            border: 1px solid #000 !important;
        }

        .flex-item, .demo-header, .demo-sidebar, .demo-main, .demo-footer, .card {
            color: black !important;
            background: white !important;
            border: 1px solid #000 !important;
        }
    }
`;

document.head.appendChild(style);

// Initialize navigation demo
initializeNavDemo();

// Console welcome message
console.log(`
📱 Welcome to Week 04: Responsive Design!

Try these interactive features:
- Resize your browser to see the responsive layout change
- Use the layout control buttons to test different breakpoints
- Experiment with flexbox properties using the dropdown menus
- Click on flex items to change their sizes
- Click navigation items to see active states

Responsive design makes websites work on all devices!
`);
