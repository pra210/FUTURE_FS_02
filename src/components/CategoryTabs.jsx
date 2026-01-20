import React from "react";
function CategoryTabs({ setCategory }) {
  return (
    <div className="categories">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Watches")}>Watches</button>
      <button onClick={() => setCategory("Accessories")}>Accessories</button>
    </div>
  );
}

export default CategoryTabs;