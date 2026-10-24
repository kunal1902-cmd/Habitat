# 🏡 Habitat — Property Listing Website

Habitat is a real estate listing web application that allows users to explore properties, view property details, and save their favorite listings. The project is built using Node.js, Express.js, EJS, and MongoDB.

## ✨ Features

- 🏠 **Property Listings** — Browse available properties in a card-based layout.
- 🔍 **Property Details** — View individual property information, including images, prices, and locations.
- ➕ **Create Listings** — Add new properties with descriptions, prices, and image URLs.
- ✏️ **Edit Listings** — Update existing property information.
- ❤️ **Favorites** — Save properties to a favorites page.
- 📱 **Responsive Design** — Browse the website on different screen sizes.
- 🎨 **Modern UI** — Clean interface with custom styling and interactive elements.

*Note: Keep only the features that are currently implemented in your project.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework and routing |
| EJS | Dynamic HTML templating |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| HTML5 & CSS3 | Structure and styling |
| JavaScript | Client-side interactivity |

## 📁 Project Structure

```text
habitat/
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   └── favorite.js
├── public/
│   ├── about.css
│   ├── favorite.css
│   ├── favorite.js
│   ├── footer.css
│   ├── listing.css
│   ├── navbar.css
│   ├── new.css
│   └── show.css
├── views/
│   ├── listings.ejs
│   ├── show.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   ├── favorites.ejs
│   ├── navbar.ejs
│   └── footer.ejs
├── app.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

*Adjust this structure to match your actual folders and filenames.*

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/kunal1902-cmd/Habitat 
cd habitat
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URL=mongodb://127.0.0.1:27017/habitat
PORT=3000
```

Update the variable names to match those used in your application. Make sure MongoDB is running.

### 4. Start the application

```bash
node app.js
```

If your project uses `nodemon`, you can start it with:

```bash
npx nodemon app.js
```

### 5. Open the website

Visit:

```text
http://localhost:3000
```

## 🗺️ Future Improvements

- User authentication and authorization
- Search, filtering, and sorting properties
- Property booking functionality
- User-specific favorites
- Image uploads instead of image URLs
- Improved form validation and error handling

## 🎯 Project Purpose

This project was developed to practice full-stack web development, including CRUD operations, RESTful routing, server-side rendering, database integration, and DOM manipulation.

## 👨‍💻 Author

**Your Name**

- GitHub: https://github.com/kunal1902-cmd

---

⭐ If you find this project interesting, consider giving the repository a star.
