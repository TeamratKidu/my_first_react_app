# MovieLand 🎬

A simple React app to search for movies using the [OMDB API](http://www.omdbapi.com/) and display them in a card layout.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)

## Features

- Search movies by title
- Displays movie details (title, year, poster) in a card layout
- Responsive and clean UI

## Demo

_(Add a live demo link here if hosted, e.g., on GitHub Pages or Netlify)_  
Coming soon!

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the root directory.
   - Add your OMDB API key (get one from [OMDB API](http://www.omdbapi.com/apikey.aspx)):
     ```env
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ```

4. **Run the App**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- The app loads with a default search for "Hellboy".
- Enter a movie title in the search bar and click the search icon to fetch movies.
- A "No Movies Found" message appears if no results are returned.

## Project Structure

- `src/App.jsx`: Main component with search logic and UI.
- `src/MovieCard.jsx`: Component for displaying movie cards.
- `src/App.css`: Styles for the app.
- `src/search.svg`: Search icon for the UI.

## Security Note

- The API key is stored in a `.env` file for development. For production, proxy API requests through a backend to avoid exposing the key.
- Ensure `.env` is in `.gitignore`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is for educational purposes and is not licensed for commercial use.

---

### Notes for GitHub

- **Badges**: Added shields.io badges for React, JavaScript, and CSS to make the README visually appealing.
- **Demo Section**: Included a placeholder for a live demo link (e.g., if you host the app on GitHub Pages, Netlify, or Vercel).
- **Clone URL**: Replace `your-username/your-repo-name` with your actual GitHub username and repository name.
- **Contributing Section**: Added a standard contributing guide for open-source projects.

Let me know if you need help setting up a live demo or further customization!
