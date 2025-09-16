// Week 02: HTML Forms & Tables - JavaScript Interactions

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Week 02: HTML Forms & Tables!');

    // Initialize form handling
    initializeFormDemo();
    initializeTableInteractions();

    // Add form validation
    addFormValidation();

    // Add dynamic table features
    addDynamicTableFeatures();
});

function initializeFormDemo() {
    const demoForm = document.getElementById('demo-form');

    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                if (key === 'languages') {
                    if (!data[key]) data[key] = [];
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });

            // Display form data
            displayFormResults(data);

            // Show success message
            showMessage('Form submitted successfully!', 'success');
        });

        demoForm.addEventListener('reset', function() {
            // Clear results when form is reset
            const resultsDiv = document.getElementById('form-results');
            if (resultsDiv) {
                resultsDiv.remove();
            }
        });
    }
}

function displayFormResults(data) {
    // Remove existing results
    const existingResults = document.getElementById('form-results');
    if (existingResults) {
        existingResults.remove();
    }

    // Create results display
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'form-results';
    resultsDiv.innerHTML = `
        <h4>Form Submission Results</h4>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;

    // Style the results
    resultsDiv.style.cssText = `
        background: #e8f5e8;
        border: 2px solid #27ae60;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
    `;

    // Insert after the form
    const form = document.getElementById('demo-form');
    form.parentNode.insertBefore(resultsDiv, form.nextSibling);
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
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

    // Insert at the top of the forms section
    const formsSection = document.getElementById('forms');
    formsSection.insertBefore(messageDiv, formsSection.firstChild.nextSibling);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

function addFormValidation() {
    // Add real-time validation to form inputs
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Clear validation on input
            this.classList.remove('invalid', 'valid');
        });
    });
}

function validateField(field) {
    let isValid = true;
    const value = field.value.trim();

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }

    // Number validation
    if (field.type === 'number' && value) {
        const num = parseFloat(value);
        const min = field.min ? parseFloat(field.min) : -Infinity;
        const max = field.max ? parseFloat(field.max) : Infinity;
        isValid = num >= min && num <= max;
    }

    // Update field styling
    field.classList.remove('invalid', 'valid');
    field.classList.add(isValid ? 'valid' : 'invalid');
}

function initializeTableInteractions() {
    // Add click handlers to table rows
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // Toggle selection
            this.classList.toggle('selected');

            // Log row data
            const cells = Array.from(this.cells).map(cell => cell.textContent);
            console.log('Selected row:', cells);
        });
    });

    // Add sorting to table headers
    const headers = document.querySelectorAll('th');
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => sortTable(index));
    });
}

function sortTable(columnIndex) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    // Sort rows
    rows.sort((a, b) => {
        const aVal = a.cells[columnIndex].textContent.trim();
        const bVal = b.cells[columnIndex].textContent.trim();

        // Try numeric sort first
        const aNum = parseFloat(aVal);
        const bNum = parseFloat(bVal);

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return aNum - bNum;
        }

        // String sort
        return aVal.localeCompare(bVal);
    });

    // Re-append sorted rows
    rows.forEach(row => tbody.appendChild(row));
}

function addDynamicTableFeatures() {
    // Create a dynamic table demo
    const dynamicTableSection = document.createElement('article');
    dynamicTableSection.innerHTML = `
        <h3>Dynamic Table Demo</h3>
        <p>Click "Add Row" to dynamically add new table rows with JavaScript.</p>
        <div id="dynamic-controls">
            <button id="add-row">Add Row</button>
            <button id="clear-table">Clear Table</button>
        </div>
        <table id="dynamic-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>25</td>
                    <td>New York</td>
                    <td><button class="delete-row">Delete</button></td>
                </tr>
            </tbody>
        </table>
    `;

    // Insert after the last table article
    const tablesSection = document.getElementById('tables');
    const lastArticle = tablesSection.querySelector('article:last-child');
    lastArticle.parentNode.insertBefore(dynamicTableSection, lastArticle.nextSibling);

    // Add event listeners
    document.getElementById('add-row').addEventListener('click', addTableRow);
    document.getElementById('clear-table').addEventListener('click', clearTable);

    // Add delete functionality to existing rows
    document.querySelectorAll('.delete-row').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('tr').remove();
        });
    });
}

function addTableRow() {
    const tbody = document.querySelector('#dynamic-table tbody');
    const rowCount = tbody.rows.length + 1;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>Person ${rowCount}</td>
        <td>${20 + Math.floor(Math.random() * 40)}</td>
        <td>${['New York', 'London', 'Paris', 'Tokyo', 'Sydney'][Math.floor(Math.random() * 5)]}</td>
        <td><button class="delete-row">Delete</button></td>
    `;

    tbody.appendChild(newRow);

    // Add delete functionality to new row
    newRow.querySelector('.delete-row').addEventListener('click', function() {
        this.closest('tr').remove();
    });
}

function clearTable() {
    const tbody = document.querySelector('#dynamic-table tbody');
    tbody.innerHTML = '';

    // Add back one default row
    const defaultRow = document.createElement('tr');
    defaultRow.innerHTML = `
        <td>John Doe</td>
        <td>25</td>
        <td>New York</td>
        <td><button class="delete-row">Delete</button></td>
    `;
    tbody.appendChild(defaultRow);

    // Re-add delete functionality
    defaultRow.querySelector('.delete-row').addEventListener('click', function() {
        this.closest('tr').remove();
    });
}

// Add CSS for form validation
const style = document.createElement('style');
style.textContent = `
    .invalid {
        border-color: #e74c3c !important;
        background-color: #fdf2f2 !important;
    }

    .valid {
        border-color: #27ae60 !important;
        background-color: #f0f9f0 !important;
    }

    tr.selected {
        background-color: #fff3cd !important;
        box-shadow: 0 0 0 2px #f39c12;
    }

    th:hover {
        background-color: #c0392b !important;
    }

    #dynamic-controls {
        margin: 1rem 0;
    }

    #dynamic-controls button {
        background: #3498db;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 0.5rem;
    }

    #dynamic-controls button:hover {
        background: #2980b9;
    }

    .delete-row {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 0.3rem 0.6rem;
        border-radius: 3px;
        cursor: pointer;
        font-size: 0.8rem;
    }

    .delete-row:hover {
        background: #c0392b;
    }
`;

document.head.appendChild(style);

// Console welcome message
console.log(`
🎉 Welcome to Week 02: HTML Forms & Tables!

Try these features:
- Fill out the demo form and submit it
- Click on table rows to select them
- Click table headers to sort columns
- Use the dynamic table controls to add/remove rows

Form validation happens automatically as you type!
`);
