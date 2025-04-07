import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [genreId, setGenreId] = useState("");
  const [watched, setWatched] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description || !genreId) {
      alert("Please fill in all required fields.");
      return;
    }

    const newMovie = {
      title,
      description,
      image,
      rating: Number(rating),
      genreId,
      watched,
    };

    onAddMovie(newMovie);
    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setImage("");
    setRating("");
    setGenreId("");
    setWatched(false);
  }

  return (
    <>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="number"
            value={genreId}
            onChange={(e) => setGenreId(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>Watched:</label>
          <input
            type="checkbox"
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </>
  );
}

// import React, { useState } from "react";
// export default function AddMovieModal({
//   showAddMovieModal,
//   handleShowAddMovieModal,
//   handleAddMovie,
// }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [rating, setRating] = useState("");
//   const [genreId, setGenreId] = useState("");
//   const [watched, setWatched] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!title || !description || !genreId) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const newMovie = {
//       title,
//       description,
//       image,
//       rating: Number(rating),
//       genreId,
//       watched,
//     };

//     handleAddMovie(newMovie);
//     // Reset form fields after submission
//     setTitle("");
//     setDescription("");
//     setImage("");
//     setRating("");
//     setGenreId("");
//     setWatched(false);
//     handleShowAddMovieModal();
//   }

//   return (
//     <div className={`modal ${showAddMovieModal ? "open" : ""}`}>
//       <div className="modal-content">
//         <span className="close" onClick={handleShowAddMovieModal}>
//           &times;
//         </span>
//         <h2>Add New Movie</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Description:</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Image URL:</label>
//             <input
//               type="text"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Rating:</label>
//             <input
//               type="number"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               min="0"
//               max="10"
//               step="0.1"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Genre:</label>
//             <input
//               type="number"
//               value={genreId}
//               onChange={(e) => setGenreId(Number(e.target.value))}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Watched:</label>
//             <input
//               type="checkbox"
//               checked={watched}
//               onChange={(e) => setWatched(e.target.checked)}
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Add Movie</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
