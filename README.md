#FCB Store
barca-store-react/
├── public/
│   ├── index.html           # Main HTML file 
│   ├── images/              # Put your images here (or import in React components)
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/          # Store images here if you want to import them
│   │   └── styles/          # CSS files or Sass files
│   │       └── styles.css
│   │
│   ├── components/          # Reusable React components (e.g., Navbar, Footer, ProductCard)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── pages/               # Pages corresponding to your HTML pages
│   │   ├── Home.jsx         # Equivalent of index.html
│   │   ├── BestSeller.jsx
│   │   ├── Kit.jsx
│   │   └── Training.jsx
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── index.js             # React entry point (renders App.jsx)
│   └── setupTests.js        # For testing, optional
│
├── package.json
├── README.md
└── .gitignore
