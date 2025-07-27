import { useState } from "react";

export function DataBinding() {
  const [categories] = useState(["All", "Electronics", "Fashion", "Footwear"]);
  return (
    <>
      <div className="container-fluid">
        <h1>Array Binding</h1>
        <header className="border border-1 p-2 d-flex justify-content-between fs-4">
          <h3>Amazon</h3>
          <nav>
            {
              //categories.map((category, index)=> <a className="mx-4" key={index} href="#"> {category} </a> )
              categories.map((c, i) => (
                <a className="mx-3">{c}</a>
              ))
            }
          </nav>
        </header>
        <ol>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ol>
        <select>
          {categories.map((category, i) => (
            <option key={i}>{category}</option>
          ))}
        </select>
        <ul className="list-unstyled">
          {categories.map((category, i) => (
            <li key={i}>
              {" "}
              <input type="checkbox" /> <label>{category}</label>{" "}
            </li>
          ))}
        </ul>

        <form>
          {categories.map((c, i) => (
            <div key={i}>
              <input type="checkbox" id={`cat-${i}`} value={c} />
              <label htmlFor={`cat-${i}`}>{c}</label>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
