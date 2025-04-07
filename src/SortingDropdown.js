export default function SortingDropdown({ onChange, sortingOptions }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div className="sorting-dropdown">
      <select onChange={handleChange}>
        {sortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
