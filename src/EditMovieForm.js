import React, { useState } from "react";

export default function EditMovieForm({ movie, onEditMovie, genres }) {
  const [editedMovie, setEditedMovie] = useState({ ...movie });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedMovie((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    onEditMovie(editedMovie);
  };

  return (
    <>
      <h2>Edit Movie</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedMovie.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Year:</label>
        <input
          type="text"
          name="year"
          value={editedMovie.year}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={editedMovie.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={editedMovie.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={editedMovie.rating}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Genre:</label>
        <select
          name="genreId"
          value={editedMovie.genreId}
          onChange={handleChange}>
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Watched:</label>
        <input
          type="checkbox"
          name="watched"
          checked={editedMovie.watched}
          onChange={handleChange}
        />
      </div>
      <div className="modal-footer">
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </>
  );
}
// import React, { useState } from "react";

// export default function EditMovieModal({
//   showEditMovieModal,
//   handleShowEditMovieModal,
//   movie,
//   handleEditMovie,
//   genres,
// }) {
//   const [editedMovie, setEditedMovie] = useState({ ...movie });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEditedMovie((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSave = () => {
//     handleEditMovie(editedMovie);
//     handleShowEditMovieModal(false);
//   };

//   return (
//     <div className={`edit-modal ${showEditMovieModal ? "show" : ""}`}>
//       <div className="edit-modal-content">
//         <span className="close" onClick={() => handleShowEditMovieModal(false)}>
//           &times;
//         </span>
//         <h2>Edit Movie</h2>
//         <div className="form-group">
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={editedMovie.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Year:</label>
//           <input
//             type="text"
//             name="year"
//             value={editedMovie.year}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={editedMovie.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Image URL:</label>
//           <input
//             type="text"
//             name="image"
//             value={editedMovie.image}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Rating:</label>
//           <input
//             type="number"
//             name="rating"
//             value={editedMovie.rating}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Genre:</label>
//           <select
//             name="genreId"
//             value={editedMovie.genreId}
//             onChange={handleChange}>
//             <option value="">Select Genre</option>
//             {genres.map((genre) => (
//               <option key={genre.id} value={genre.id}>
//                 {genre.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Watched:</label>
//           <input
//             type="checkbox"
//             name="watched"
//             checked={editedMovie.watched}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="modal-footer">
//           <button onClick={() => handleShowEditMovieModal(false)}>Close</button>
//           <button onClick={handleSave}>Save Changes</button>
//         </div>
//       </div>
//     </div>
//   );
// }
