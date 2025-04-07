import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faAmazon,
  faPinterest,
  faDiscourse,
  faGlide,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useMemo } from "react";
import Header from "./Header";
import GenreDropdown from "./GenreComponents";
import SortingDropdown from "./SortingDropdown";
import PlatformDropdown from "./PlatformComponents";
import MovieList from "./MovieList";
import Modal from "./Modal"; // New Modal component
import AddMovieForm from "./AddMovieForm"; // Renamed to Form for clarity
import EditMovieForm from "./EditMovieForm"; // Renamed to Form for clarity

const platforms = [
  {
    id: 1,
    name: "Apple TV",
    icon: <FontAwesomeIcon icon={faApple} />,
    moviesCount: 120,
  },
  {
    id: 2,
    name: "Prime Video",
    icon: <FontAwesomeIcon icon={faAmazon} />,
    moviesCount: 180,
  },
  {
    id: 3,
    name: "Hulu",
    icon: <FontAwesomeIcon icon={faPinterest} />,
    moviesCount: 100,
  },
  {
    id: 4,
    name: "Peacock",
    icon: <FontAwesomeIcon icon={faDiscourse} />,
    moviesCount: 80,
  },
  {
    id: 5,
    name: "Disney+",
    icon: <FontAwesomeIcon icon={faGlide} />,
    moviesCount: 150,
  },
];

export const genres = [
  { id: 1, name: "Action", emoji: "🔥" },
  { id: 2, name: "Adventure", emoji: "⛺️" },
  { id: 3, name: "Animation", emoji: "🎬" },
  { id: 4, name: "Biography", emoji: "📜" },
  { id: 5, name: "Crime", emoji: "🔫" },
  { id: 6, name: "Documentary", emoji: "🎥" },
  { id: 7, name: "Drama", emoji: "🎭" },
  { id: 8, name: "Family", emoji: "👨‍👩‍👧‍👦" },
  { id: 9, name: "Fantasy", emoji: "🧙‍♂️" },
  { id: 10, name: "History", emoji: "📚" },
  { id: 11, name: "Horror", emoji: "👻" },
];

const sortingOptions = [
  { value: "all", label: "All Movies" },
  { value: "rating", label: "Rating (High to Low)" },
  { value: "watched", label: "Watched " },
  { value: "not-watched", label: "not-watched" },
];

const initialMovies = [
  {
    id: 1,
    title: "Mad Max",
    year: 2015,
    description:
      "In a post-apocalyptic world, Max teams up with Furiosa to escape from a tyrannical warlord and his army in a high-octane chase across the desert. This film is known for its stunning visuals, intense action sequences, and minimalistic yet powerful storytelling",
    image: "/images/mad_max.jpg",
    rating: 8.1,
    genreId: 1,
    watched: true, // Action
  },
  {
    id: 2,
    title: "Die Hard",
    year: 1988,
    description:
      "NYPD officer John McClane battles terrorists who have taken over a Los Angeles skyscraper during a Christmas party. Filled with memorable one-liners and explosive action, 'Die Hard' set a new standard for action films.",
    image: "/images/die_hard.jpg",
    rating: 8.2,
    genreId: 1,
    watched: false, // Action
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    description:
      "Batman faces his greatest challenge yet as he battles the Joker, a criminal mastermind who brings chaos and anarchy to Gotham City. Directed by Christopher Nolan, this film is lauded for its complex characters, especially Heath Ledger’s iconic portrayal of the Joker.",
    image: "/images/the_dark_night.jpg",
    rating: 9.0,
    genreId: 1,
    watched: false, // Action
  },
  {
    id: 4,
    title: "Superbad",
    year: 2007,
    description:
      "Two high school friends, Seth and Evan, embark on a quest to buy alcohol for a party in hopes of impressing their crushes. Their night quickly spirals into a series of hilarious misadventures. 'Superbad' is celebrated for its authentic portrayal of teenage life and witty dialogue.",
    image: "/images/superbad.jpg",
    rating: 7.6,
    genreId: 2,
    watched: true, // Comedy
  },
  {
    id: 5,
    title: "Anchorman",
    year: 2004,
    description:
      "Set in the 1970s, this comedy follows the egotistical and clueless anchorman Ron Burgundy as he navigates changes in the TV news industry, including the arrival of an ambitious female reporter. The film is known for its absurd humor and memorable catchphrases.",
    image: "/images/anchorman.jpg",
    rating: 7.1,
    genreId: 2,
    watched: false, /// Comedy
  },
  {
    id: 6,
    title: "Step Brothers",
    year: 2008,
    description:
      "Two middle-aged, immature men, Brennan and Dale, are forced to live together as stepbrothers when their single parents marry. Their rivalry and subsequent friendship lead to a series of outrageous and comedic situations. The film is praised for the chemistry between its stars, Will Ferrell and John C. Reilly.",
    image: "/images/step_brothers.jpg",
    rating: 6.9,
    genreId: 2,
    watched: true, // Comedy
  },
  {
    id: 7,
    title: "Blade Runner 2049",
    year: 2017,
    description:
      "In a dystopian future, a new blade runner, K, discovers a long-buried secret that leads him to track down former blade runner Rick Deckard, who has been missing for thirty years. This visually stunning film explores themes of identity, humanity, and artificial intelligence.",
    image: "/images/blade_runner.jpg",
    rating: 8.0,
    genreId: 3,
    watched: true, // Sci-Fi
  },
  {
    id: 8,
    title: "Inception",
    year: 2010,
    description:
      "A skilled thief, Dom Cobb, is given a chance to have his past crimes forgiven if he can successfully perform an inception: planting an idea into someone's subconscious. Directed by Christopher Nolan, 'Inception' is known for its mind-bending plot, innovative special effects, and exploration of dreams and reality.",
    image: "/images/inception.jpg",
    rating: 8.8,
    genreId: 3,
    watched: false, // Sci-Fi
  },
  {
    id: 9,
    title: "The Matrix",
    year: 1999,
    description:
      "Computer hacker Neo discovers that the reality he lives in is a simulated world created by sentient machines, and joins a rebellion to overthrow them. 'The Matrix' revolutionized the sci-fi genre with its groundbreaking visual effects, philosophical themes, and action sequences.",
    image: "/images/matrix.jpg",
    rating: 8.7,
    genreId: 3,
    watched: true, // Sci-Fi
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);
  const [editMovie, setEditMovie] = useState(null);

  function handleDelete(movieId) {
    setMovies((movies) => movies.filter((movie) => movie.id !== movieId));
  }

  function handleAddMovie(newMovie) {
    setMovies((prevMovies) => [
      ...prevMovies,
      { ...newMovie, id: prevMovies.length + 1 },
    ]);
    setShowAddMovieModal(false);
  }
  function handleShowAddMovieModal() {
    setShowAddMovieModal(!showAddMovieModal);
  }

  function handleGenreClick(genreId) {
    setSelectedGenre(genreId === selectedGenre ? null : genreId);
  }

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleShowEditMovieModal(movie) {
    setEditMovie(movie);
    setShowEditMovieModal(true);
  }

  function handleEditMovie(updatedMovie) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
    setShowEditMovieModal(false);
  }

  // Memoized sorted movies based on sortBy state
  const sortedMovies = useMemo(() => {
    let sorted = [...movies];

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "watched") {
      sorted = sorted.filter((movie) => movie.watched);
    } else if (sortBy === "not-watched") {
      sorted = sorted.filter((movie) => !movie.watched);
    }

    return sorted;
  }, [movies, sortBy]);

  // Memoized filtered movies based on selectedGenre and searchTerm
  const filteredMovies = useMemo(() => {
    let filtered = selectedGenre
      ? sortedMovies.filter((movie) => movie.genreId === selectedGenre)
      : sortedMovies;

    if (searchTerm) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [sortedMovies, selectedGenre, searchTerm]);

  return (
    <div className="app-container">
      <Header />
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-input"
      />

      <div className="content-container">
        <div>
          <GenreDropdown onGenreClick={handleGenreClick} genres={genres} />
        </div>
        <div className="movie-list-container">
          <div className="top-controls">
            <SortingDropdown
              className="sorting-dropdown"
              onChange={setSortBy}
              sortingOptions={sortingOptions}
            />
            <button
              className="add-movie-button"
              onClick={handleShowAddMovieModal}>
              Add Movie
            </button>
          </div>

          <MovieList
            movies={filteredMovies}
            onDelete={handleDelete}
            onEdit={handleShowEditMovieModal}
          />
        </div>
        <div className="platform-dropdown-container">
          <PlatformDropdown platforms={platforms} />
        </div>
      </div>
      {/* Add Movie Modal */}
      {showAddMovieModal && (
        <Modal onClose={() => setShowAddMovieModal(false)}>
          <AddMovieForm onAddMovie={handleAddMovie} />
        </Modal>
      )}

      {/* Edit Movie Modal */}
      {showEditMovieModal && (
        <Modal onClose={() => setShowEditMovieModal(false)}>
          <EditMovieForm
            movie={editMovie}
            onEditMovie={handleEditMovie}
            genres={genres}
          />
        </Modal>
      )}
    </div>
  );
}

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faApple,
//   faAmazon,
//   faPinterest,
//   faDiscourse,
//   faGlide,
// } from "@fortawesome/free-brands-svg-icons";
// import { useState, useMemo } from "react";
// import Header from "./Header";
// import GenreDropdown from "./GenreComponents";
// import SortingDropdown from "./SortingDropdown";
// import PlatformDropdown from "./PlatformComponents";
// import MovieList from "./MovieList";
// import AddMovieModal from "./AddMovieModal";
// import EditMovieModal from "./EditMovieModal";

// const platforms = [
//   {
//     id: 1,
//     name: "Apple TV",
//     icon: <FontAwesomeIcon icon={faApple} />,
//     moviesCount: 120,
//   },
//   {
//     id: 2,
//     name: "Prime Video",
//     icon: <FontAwesomeIcon icon={faAmazon} />,
//     moviesCount: 180,
//   },
//   {
//     id: 3,
//     name: "Hulu",
//     icon: <FontAwesomeIcon icon={faPinterest} />,
//     moviesCount: 100,
//   },
//   {
//     id: 4,
//     name: "Peacock",
//     icon: <FontAwesomeIcon icon={faDiscourse} />,
//     moviesCount: 80,
//   },
//   {
//     id: 5,
//     name: "Disney+",
//     icon: <FontAwesomeIcon icon={faGlide} />,
//     moviesCount: 150,
//   },
// ];

// export const genres = [
//   { id: 1, name: "Action", emoji: "🔥" },
//   { id: 2, name: "Adventure", emoji: "⛺️" },
//   { id: 3, name: "Animation", emoji: "🎬" },
//   { id: 4, name: "Biography", emoji: "📜" },
//   { id: 5, name: "Crime", emoji: "🔫" },
//   { id: 6, name: "Documentary", emoji: "🎥" },
//   { id: 7, name: "Drama", emoji: "🎭" },
//   { id: 8, name: "Family", emoji: "👨‍👩‍👧‍👦" },
//   { id: 9, name: "Fantasy", emoji: "🧙‍♂️" },
//   { id: 10, name: "History", emoji: "📚" },
//   { id: 11, name: "Horror", emoji: "👻" },
// ];

// const sortingOptions = [
//   { value: "all", label: "All Movies" },
//   { value: "rating", label: "Rating (High to Low)" },
//   { value: "watched", label: "Watched " },
//   { value: "not-watched", label: "not-watched" },
// ];

// const initialMovies = [
//   {
//     id: 1,
//     title: "Mad Max",
//     year: 2015,
//     description:
//       "In a post-apocalyptic world, Max teams up with Furiosa to escape from a tyrannical warlord and his army in a high-octane chase across the desert. This film is known for its stunning visuals, intense action sequences, and minimalistic yet powerful storytelling",
//     image: "/images/mad_max.jpg",
//     rating: 8.1,
//     genreId: 1,
//     watched: true, // Action
//   },
//   {
//     id: 2,
//     title: "Die Hard",
//     year: 1988,
//     description:
//       "NYPD officer John McClane battles terrorists who have taken over a Los Angeles skyscraper during a Christmas party. Filled with memorable one-liners and explosive action, 'Die Hard' set a new standard for action films.",
//     image: "/images/die_hard.jpg",
//     rating: 8.2,
//     genreId: 1,
//     watched: false, // Action
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     year: 2008,
//     description:
//       "Batman faces his greatest challenge yet as he battles the Joker, a criminal mastermind who brings chaos and anarchy to Gotham City. Directed by Christopher Nolan, this film is lauded for its complex characters, especially Heath Ledger’s iconic portrayal of the Joker.",
//     image: "/images/the_dark_night.jpg",
//     rating: 9.0,
//     genreId: 1,
//     watched: false, // Action
//   },
//   {
//     id: 4,
//     title: "Superbad",
//     year: 2007,
//     description:
//       "Two high school friends, Seth and Evan, embark on a quest to buy alcohol for a party in hopes of impressing their crushes. Their night quickly spirals into a series of hilarious misadventures. 'Superbad' is celebrated for its authentic portrayal of teenage life and witty dialogue.",
//     image: "/images/superbad.jpg",
//     rating: 7.6,
//     genreId: 2,
//     watched: true, // Comedy
//   },
//   {
//     id: 5,
//     title: "Anchorman",
//     year: 2004,
//     description:
//       "Set in the 1970s, this comedy follows the egotistical and clueless anchorman Ron Burgundy as he navigates changes in the TV news industry, including the arrival of an ambitious female reporter. The film is known for its absurd humor and memorable catchphrases.",
//     image: "/images/anchorman.jpg",
//     rating: 7.1,
//     genreId: 2,
//     watched: false, /// Comedy
//   },
//   {
//     id: 6,
//     title: "Step Brothers",
//     year: 2008,
//     description:
//       "Two middle-aged, immature men, Brennan and Dale, are forced to live together as stepbrothers when their single parents marry. Their rivalry and subsequent friendship lead to a series of outrageous and comedic situations. The film is praised for the chemistry between its stars, Will Ferrell and John C. Reilly.",
//     image: "/images/step_brothers.jpg",
//     rating: 6.9,
//     genreId: 2,
//     watched: true, // Comedy
//   },
//   {
//     id: 7,
//     title: "Blade Runner 2049",
//     year: 2017,
//     description:
//       "In a dystopian future, a new blade runner, K, discovers a long-buried secret that leads him to track down former blade runner Rick Deckard, who has been missing for thirty years. This visually stunning film explores themes of identity, humanity, and artificial intelligence.",
//     image: "/images/blade_runner.jpg",
//     rating: 8.0,
//     genreId: 3,
//     watched: true, // Sci-Fi
//   },
//   {
//     id: 8,
//     title: "Inception",
//     year: 2010,
//     description:
//       "A skilled thief, Dom Cobb, is given a chance to have his past crimes forgiven if he can successfully perform an inception: planting an idea into someone's subconscious. Directed by Christopher Nolan, 'Inception' is known for its mind-bending plot, innovative special effects, and exploration of dreams and reality.",
//     image: "/images/inception.jpg",
//     rating: 8.8,
//     genreId: 3,
//     watched: false, // Sci-Fi
//   },
//   {
//     id: 9,
//     title: "The Matrix",
//     year: 1999,
//     description:
//       "Computer hacker Neo discovers that the reality he lives in is a simulated world created by sentient machines, and joins a rebellion to overthrow them. 'The Matrix' revolutionized the sci-fi genre with its groundbreaking visual effects, philosophical themes, and action sequences.",
//     image: "/images/matrix.jpg",
//     rating: 8.7,
//     genreId: 3,
//     watched: true, // Sci-Fi
//   },
// ];

// export default function App() {
//   const [movies, setMovies] = useState(initialMovies);
//   const [showAddMovieModal, setShowAddMovieModal] = useState(false);

//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const [sortBy, setSortBy] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showEditMovieModal, setShowEditMovieModal] = useState(false);
//   const [editMovie, setEditMovie] = useState(null);

//   function handleDelete(movieId) {
//     setMovies((movies) => movies.filter((movie) => movie.id !== movieId));
//   }

//   function handleAddMovie(newMovie) {
//     setMovies((prevMovies) => [
//       ...prevMovies,
//       { ...newMovie, id: prevMovies.length + 1 },
//     ]);
//   }
//   function handleShowAddMovieModal() {
//     console.log("handleShowAddMovieModal called");
//     setShowAddMovieModal(!showAddMovieModal);
//   }

//   function handleGenreClick(genreId) {
//     setSelectedGenre(genreId === selectedGenre ? null : genreId);
//   }

//   function handleSearchTermChange(e) {
//     setSearchTerm(e.target.value);
//   }

//   function handleShowEditMovieModal(movie) {
//     setEditMovie(movie);
//     setShowEditMovieModal(true);
//   }

//   function handleEditMovie(updatedMovie) {
//     setMovies((prevMovies) =>
//       prevMovies.map((movie) =>
//         movie.id === updatedMovie.id ? updatedMovie : movie
//       )
//     );
//     setShowEditMovieModal(false);
//   }

//   // Memoized sorted movies based on sortBy state
//   const sortedMovies = useMemo(() => {
//     let sorted = [...movies];

//     if (sortBy === "rating") {
//       sorted.sort((a, b) => b.rating - a.rating);
//     } else if (sortBy === "watched") {
//       sorted = sorted.filter((movie) => movie.watched);
//     } else if (sortBy === "not-watched") {
//       sorted = sorted.filter((movie) => !movie.watched);
//     }

//     return sorted;
//   }, [movies, sortBy]);

//   // Memoized filtered movies based on selectedGenre and searchTerm
//   const filteredMovies = useMemo(() => {
//     let filtered = selectedGenre
//       ? sortedMovies.filter((movie) => movie.genreId === selectedGenre)
//       : sortedMovies;

//     if (searchTerm) {
//       filtered = filtered.filter((movie) =>
//         movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     return filtered;
//   }, [sortedMovies, selectedGenre, searchTerm]);

//   return (
//     <div className="app-container">
//       <Header />
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={handleSearchTermChange}
//         className="search-input"
//       />

//       <div className="content-container">
//         <div>
//           <GenreDropdown onGenreClick={handleGenreClick} genres={genres} />
//         </div>
//         <div className="movie-list-container">
//           <div className="top-controls">
//             <SortingDropdown
//               className="sorting-dropdown"
//               onChange={setSortBy}
//               sortingOptions={sortingOptions}
//             />
//             <button
//               className="add-movie-button"
//               onClick={handleShowAddMovieModal}>
//               Add Movie
//             </button>
//           </div>

//           <MovieList
//             movies={filteredMovies}
//             onDelete={handleDelete}
//             onEdit={handleShowEditMovieModal}
//           />
//         </div>
//         <div className="platform-dropdown-container">
//           <PlatformDropdown platforms={platforms} />
//         </div>
//       </div>
//       {showAddMovieModal && (
//         <AddMovieModal
//           showAddMovieModal={showAddMovieModal}
//           handleShowAddMovieModal={handleShowAddMovieModal}
//           handleAddMovie={handleAddMovie}
//         />
//       )}
//       {showEditMovieModal && (
//         <EditMovieModal
//           showEditMovieModal={showEditMovieModal}
//           handleShowEditMovieModal={setShowEditMovieModal}
//           movie={editMovie}
//           handleEditMovie={handleEditMovie}
//           genres={genres}
//         />
//       )}
//     </div>
//   );
// }
