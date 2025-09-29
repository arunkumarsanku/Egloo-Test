# 🍷 Wine Experiences  

A front-end project built as part of an internship test.  
It demonstrates use of **HTML, SCSS, and TypeScript** without external frameworks.  

---

## ✨ Features
- Responsive header and navigation bar  
- Google-style brand logo  
- Dynamic cards grid rendered from TypeScript data  
- Full-width featured card  
- Clean SCSS styling with variables and media queries  

---

## 🛠 Tech Stack
- HTML5  
- SCSS  
- TypeScript  
- NPM Scripts for build  

## 📂 Project Structure  

```plaintext
wine-experiences/
├── assets/
│   └── images/            # Experience images & icons
│
├── public/
│   ├── style.css          # Compiled CSS (from src/style.scss)
│   └── script.js          # Compiled JavaScript (from src/script.ts)
│
├── src/
│   ├── style.scss         # Source SCSS
│   └── script.ts          # Source TypeScript
│
├── index.html             # Main entry point
├── package.json           # NPM scripts & dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```
---
## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (>= 18)  
- NPM (comes with Node.js)  

### Clone the Repository
```bash
https://github.com/arunkumarsanku/wine-experiences.git
cd wine-experiences
``` 
## Install Dependencies
```
npm install
```
## Build the Project

#### Compile SCSS and TypeScript:

```
npm run build
```
#### Start (Build + Open in Browser)
```
npm start
```
#### Development (Watch Mode)

#### Run both SCSS and TypeScript compilers in watch mode:
```
npm run dev

```


## 🔮 Future Improvements  
- Load card data from JSON or API
- Add keyboard accessibility for dropdown
- Add dark mode via SCSS variables
- Add unit tests
