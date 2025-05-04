document.addEventListener("DOMContentLoaded", () => {
  const movieSuggestions = [
    "Wicked!",
    "The Entire Maze Runner Trilogy, Battle Los Angeles",
    "Devil Wears Prada",
    "The Melancholy of Haruhi Suzumiya",
    "Star Wars Series, Dune, Spider-Man (2002), The Dark Knight",
    "Horror movie night: Quest for Amelot, Tom Thumb & Thumbelina",
    "Shaun of The Dead, Zoolander, Borat",
    "Into the Woods, Eternal Sunshine of a Spotless Mind, Alice in Borderlands, Snowy Road (Korean Movie), Abbott Elementary, My Name is Earl, Bob’s Burgers, Flipped, Mean Girls, Clueless, 10 Things I Hate, Bladerunner",
    "21 Jump Street or One of Them Days"
  ];

  const movieList = document.getElementById("movieList");
  const movieForm = document.getElementById("movieForm");
  const movieInput = document.getElementById("movieInput");

    // Helper function
    function addMovieToList(movie) {
      const li = document.createElement("li");
      li.textContent = movie;
      movieList.appendChild(li);
    }

  // Populate default list
  movieSuggestions.forEach(addMovieToList);

  // Handle form submission
  movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newMovie = movieInput.value.trim();
    if (newMovie !== "") {
      addMovieToList(newMovie);
      movieInput.value = "";
    }
  });
});

  