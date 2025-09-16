# HTML Learning Journey

A progressive web development course organized by weeks, teaching HTML, CSS, and JavaScript fundamentals through hands-on examples and interactive exercises.

## 🚀 Live Demo

[View the live course on GitHub Pages](https://yourusername.github.io/html-learning-journey/)

## 📁 Project Structure

```
html-learning-journey/
├── index.html                 # Landing page with course navigation
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions for auto-deployment
├── 01_week/                   # HTML Basics
│   ├── index.html
│   ├── css/
│   └── js/
├── 02_week/                   # HTML Forms & Tables
│   ├── index.html
│   ├── css/
│   └── js/
├── 03_week/                   # CSS Fundamentals
│   ├── index.html
│   ├── css/
│   └── js/
├── 04_week/                   # Responsive Design
│   ├── index.html
│   ├── css/
│   └── js/
├── 05_week/                   # JavaScript Basics
│   ├── index.html
│   ├── css/
│   └── js/
├── img/                       # Shared image assets
├── assets/                    # Shared media files
├── .nojekyll                 # GitHub Pages configuration
├── .gitignore
└── README.md
```

## 🎯 Course Features

### Progressive Learning Structure
- **Week 01**: HTML Basics - Document structure, elements, and semantic markup
- **Week 02**: HTML Forms & Tables - User input and data presentation
- **Week 03**: CSS Fundamentals - Selectors, box model, and styling
- **Week 04**: Responsive Design - Mobile-first approach and media queries
- **Week 05**: JavaScript Basics - Interactivity, DOM manipulation, and events

### Weekly Content Includes
- **HTML Elements**: Complete coverage from basic structure to advanced forms
- **CSS Techniques**: From basic styling to responsive design patterns
- **JavaScript Concepts**: DOM manipulation, event handling, and dynamic content
- **Interactive Examples**: Hands-on code that students can modify and experiment with
- **Practice Exercises**: Real-world assignments to reinforce learning

### Technical Features
- **Simple Deployment**: Direct deployment from master branch to GitHub Pages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Demos**: JavaScript-powered examples and exercises
- **Clean Code**: Well-organized, commented, and educational code structure
- **Cross-browser Compatible**: Tested and working across modern browsers

## 🛠️ Getting Started

### Prerequisites
- A code editor (VS Code, Sublime Text, etc.)
- A web browser (Chrome, Firefox, Safari, etc.)
- Git (for version control and GitHub deployment)

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/html-learning-template.git
   cd html-learning-template
   ```

2. **Open the project**
   - Open `index.html` in your web browser to view the template
   - Open the files in your code editor to start learning

3. **Make it your own**
   - Edit `index.html` to add your content
   - Modify `css/styles.css` to change the styling
   - Update `js/script.js` to add new functionality

### Adding Your Own Assets

Replace the placeholder files in the `img/` and `assets/` folders:

- `img/favicon.ico` - Your website's favicon (16x16 or 32x32 pixels)
- `img/html-logo.png` - Any images you want to display
- `assets/sample-audio.mp3` - Audio files for the audio element
- `assets/sample-video.mp4` - Video files for the video element

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `html-learning-template`)
4. Make sure it's set to **Public**
5. **Do NOT** initialize with README, .gitignore, or license (since you already have files)
6. Click "Create repository"

### Step 2: Upload Your Code

#### Option A: GitHub Desktop (Recommended for beginners)
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop → File → "Add Local Repository"
3. Select your project folder
4. Click "Publish repository"
5. Select your GitHub repository from the dropdown
6. Click "Publish"

#### Option B: Command Line
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: HTML learning template"

# Connect to your GitHub repository
git remote add origin https://github.com/yourusername/html-learning-template.git

# Push to GitHub
git push -u origin master
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "master" and "/ (root)"
6. Click "Save"

### Step 4: Access Your Site

Wait a few minutes, then visit: `https://yourusername.github.io/html-learning-journey/`

**Note**: Your site will automatically update every time you push changes to the master branch!

## 📚 Learning Guide

### Course Progression
1. **Start Here**: Visit the main landing page (`index.html`) to see the course overview
2. **Week by Week**: Follow the curriculum in order, each week builds on the previous
3. **Hands-On Learning**: Each week includes interactive examples and practice exercises
4. **Experiment**: Modify the code, break it, and learn from your mistakes

### Weekly Breakdown

#### Week 01: HTML Basics
- Learn basic HTML document structure
- Master common HTML elements (headings, paragraphs, lists, links)
- Understand semantic HTML and accessibility
- Practice: Create your first complete HTML page

#### Week 02: HTML Forms & Tables
- Master form elements and input types
- Learn table structure and data presentation
- Understand form validation and submission
- Practice: Build contact forms and data tables

#### Week 03: CSS Fundamentals
- Understand CSS selectors and specificity
- Master the box model (padding, border, margin)
- Learn colors, typography, and basic layout
- Practice: Style existing HTML with custom CSS

#### Week 04: Responsive Design
- Learn mobile-first responsive design
- Master media queries and breakpoints
- Understand flexible layouts (Flexbox, Grid)
- Practice: Make websites work on all screen sizes

#### Week 05: JavaScript Basics
- Learn JavaScript syntax and data types
- Master DOM manipulation and event handling
- Understand basic programming concepts
- Practice: Add interactivity to static web pages

## 🔧 Customization Ideas

### For Students
- Complete the weekly exercises and assignments
- Add your own projects to each week's folder
- Customize the styling and layout
- Extend the JavaScript functionality
- Create additional weeks for advanced topics

### For Teachers
- Add new weekly folders for additional content
- Include assessment questions and answers
- Add more advanced examples and exercises
- Customize the curriculum for your specific class
- Use the GitHub repository for collaborative learning

## 🌟 Best Practices Demonstrated

- **Semantic HTML**: Using proper elements for their intended purposes
- **Accessible design**: Labels, alt text, and keyboard navigation
- **Responsive design**: Works on desktop, tablet, and mobile
- **Clean code structure**: Well-organized and commented code
- **Progressive enhancement**: Works without JavaScript enabled

## 🐛 Troubleshooting

### Site not loading on GitHub Pages
- Wait 5-10 minutes after enabling Pages
- Check that repository is public
- Ensure `index.html` is in the root directory
- Verify `.nojekyll` file exists (for projects with underscores in filenames)

### Local development issues
- Make sure you're opening `index.html` directly in the browser (not from a server)
- Check browser console for JavaScript errors
- Ensure all file paths are correct

### Images not displaying
- Check that image files are in the correct folders
- Verify file names match exactly (case-sensitive)
- Ensure images are web-optimized (not too large)

## 📖 Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) - Comprehensive HTML reference
- [W3Schools](https://www.w3schools.com/html/) - Interactive HTML tutorials
- [CSS Tricks](https://css-tricks.com/) - CSS learning resources
- [JavaScript.info](https://javascript.info/) - JavaScript tutorials
- [FreeCodeCamp](https://www.freecodecamp.org/) - Free coding curriculum

## 🤝 Contributing

Feel free to improve this template! Suggestions and pull requests are welcome.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**

Built with ❤️ for HTML learners everywhere.
