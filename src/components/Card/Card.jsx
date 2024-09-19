
import { useState, useEffect } from "react";

function Card({ imageSrc, title, description, prices }) {
  const [itemDescription, setItemDescription] = useState("");

  function saveProductDetails(title, description, prices, imageSrc) {
    const productDetails = { title, description, prices, imageSrc };
    localStorage.setItem("productDetails", JSON.stringify(productDetails));
  }

  useEffect(() => {
    if (description.length > 50) {
      setItemDescription(description.slice(0, 50) + "...");
    } else {
      setItemDescription(description);
    }
  }, [description]);

  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-lg w-80 hover:shadow-2xl transition-shadow duration-300">
      <figure className="overflow-hidden">
        <img
          className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          src={imageSrc}
          alt={title}
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{itemDescription}</p>
        <p className="text-lg font-bold text-gray-800 mb-4">
          Price: <span className="text-blue-500">Rs {prices}</span>
        </p>
        <div className="flex items-center justify-between">
          <button className="btn bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
          <p
            onClick={() => saveProductDetails(title, description, prices, imageSrc)}
            className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline"
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
