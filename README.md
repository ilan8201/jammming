# 🎵 Jammming - React Spotify Playlist App

This is a React web application called **Jammming**, built with **Vite**, that allows users to search for tracks using the Spotify API, create custom playlists, and save them directly to their Spotify account.

---

## 📑 Table of Contents

- [🏗️ Project Structure](#project-structure)
- [🚀 Features](#features)
- [🛠️ Technologies Used](#technologies-used)
- [📦 Installation](#installation)
- [📖 Usage](#usage)
- [📚 To-Do List (Improvements)](#to-do-list-improvements)
- [🤝 Contributing](#contributing)
- [📃 License](#license)

---

<h2 id="project-structure">🏗️ Project Structure</h2>

```plaintext
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── background_photo_desktop.jpg
│   └── favicon.ico
├── node_modules/    # Dependency files managed by npm [+X more files]
├── src
│   ├── App.jsx
│   ├── App.module.css
│   ├── assets
│   ├── components
│   │   ├── Playlist
│   │   │   ├── Playlist.jsx
│   │   │   └── Playlist.module.css
│   │   ├── SearchBar
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.module.css
│   │   ├── SearchResults
│   │   │   ├── SearchResults.jsx
│   │   │   └── SearchResults.module.css
│   │   ├── Track
│   │   │   ├── Track.jsx
│   │   │   └── Track.module.css
│   │   └── TrackList
│   │       ├── TrackList.jsx
│   │       └── TrackList.module.css
│   ├── index.css
│   ├── main.jsx
│   ├── reset.css
│   └── utils
│       └── Spotify
│           └── Spotify.js
└── vite.config.js
```

---

<h2 id="features">🚀 Features</h2>

- **🎧 Search Spotify:** Search for tracks using the Spotify API directly from the app.  
- **✅ Dynamic Button Handling:**  
  - `"+"` button for adding tracks.  
  - `"Added"` label when a track is already in the playlist.  
  - `"-"` button for removing tracks from the playlist.  
- **🎼 Save Playlists:** Save your custom playlist directly to your Spotify account with a single click.  
- **⚡ Built with Vite:** Fast build performance and optimized development experience using Vite.  

---

<h2 id="technologies-used">🛠️ Technologies Used</h2>

- **⚛️ React**: JavaScript library for building user interfaces.
- **⚡ Vite**: Build tool for modern web projects with fast build times.
- **🎵 Spotify API**: API for interacting with Spotify's music data.
- **🔍 Markdownlint**: Linter for markdown files to ensure consistent formatting.
- **🎨 CSS Modules**: Scoped and modular styling for components.

---

<h2 id="installation">📦 Installation</h2>

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/jammming.git
   ```

2. **Navigate to the project directory:**

    ```bash
   cd jammming
   ```

3. **Obtain a Spotify Client ID:**

- Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
- Log in with your Spotify account.
- Create a new app and note down the **Client ID** provided.  
- Add the Client ID to your project:  
  - Open the `spotify.js` file.
  - On the **second line**, replace the value of the `clientID` constant with your **Client ID** as shown below:

   ```javascript
   const clientID = "your-client-id-here";
   ```

4. **Start the development server:**

    ```bash
   npm run dev
   ```

This will start the Vite development server, and you can view the app by going to [http://localhost:5173](http://localhost:5173).

---

<h2 id="usage">📖 Usage</h2>

1. **Search for a song:**  
   Use the search bar to find a song using the Spotify API.  

2. **Add a track to the playlist:**  
   Click the `"+"` button next to a track to add it to your playlist.  

3. **Track already added:**  
   If a track has already been added, it will display `"Added"` instead of the `"+"` button.  

4. **Remove a track:**  
   Click the `"-"` button next to a track in the playlist to remove it.  

5. **Save to Spotify:**  
   Click **Save to Spotify** to create a new playlist in your Spotify account with the selected tracks.

---

<h2 id="to-do-list-improvements">📚 To-Do List (Improvements)</h2>

- **Implement Error Handling:**  
   Add proper error messages and notifications for better user feedback when an error occurs.  

- **Support Multiple Music Sources:**  
   Integrate options to choose music sources such as Apple Music, YouTube Music, and others.  

---

<h2 id="contributing">🤝 Contributing</h2>
Contributions are welcome! 🎉  
To contribute:  

1. **Fork the repository.**  
2. **Create a new branch for your feature or fix.**  
3. **Commit your changes with clear messages.**  
4. **Submit a pull request (PR).**

Thank you for helping improve this project! 🚀  

---

<h2 id="license">📃 License</h2>

This project is licensed under the **MIT License**.
See the `LICENSE` file for more details.
