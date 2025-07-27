import { useState } from "react";

export function ObjectData() {
  const [product] = useState({
    Id: 2,
    Name: "TV",
    Price: 45000,
    ShippedTo: ["Delhi", "Hyd"],
    Rating: { Rate: 4.3, Count: 500 },
  });

  return (
    <div className="container-fluid">
      <h2>Product Details</h2>
      <dl>
        <dt>Product Id</dt>
        <dd>{product.Id}</dd>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>
          {product.Price.toLocaleString("en-in", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
          })}
        </dd>
        <dt>Shipped to Cities</dt>
        <dd>
          <ul>
            {product.ShippedTo.map((city, i) => (
              <li key={i}>{city}</li>
            ))}
          </ul>
        </dd>
        <dt>Rating</dt>
        <dd>
          {product.Rating.Rate} <span className="bi bi-star-fill"></span> [
          {product.Rating.Count}]{" "}
        </dd>
      </dl>
    </div>
  );
}
