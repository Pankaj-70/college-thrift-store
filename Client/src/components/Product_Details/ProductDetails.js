import React, { useState, useEffect } from "react";
import { FaEdit, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "./Dialog";
import Loading from "../Utility/Loading";

const ProductDetails = ({ productId }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userId = user ? user.id : null;
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleConfirmPurchase = async (userData) => {
    alert("Purchase confirmed!");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    navigate("/home");
    setDialogOpen(false);
  };

  const handleAddToCart = (productId) => {
    setClickedButtonId(productId);
    setDialogOpen(true);
    setTimeout(() => {
      setClickedButtonId(null);
    }, 1000); // Change the delay time as needed
    // Your actual add to cart logic can be added here
  };

  useEffect(() => {
    // Fetch the product details from the API using the productID from the URL params
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/products/${productId}`
        ); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setProductDetails(data);
        } else {
          console.error("Failed to fetch product details");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!productDetails) {
    return <Loading />;
  }

  return (
    <div className="rounded-lg shadow-md m-4 transition duration-300 hover:shadow-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
      {userId === productDetails.uploadedBy._id && (
        <Link
          to={`/product/${productId}/edit`}
          className="bg-gray-900 p-2 hover:text-yellow-500 text-white border-b-2 border-transparent font-semibold mb-4 inline-flex items-center gap-2 transform hover:scale-105 hover:shadow-2xl rounded-tl-lg rounded-br-lg transition-transform duration-300"
        >
          <span className="text-xl">
            <FaEdit />
          </span>
          <div>Edit</div>
        </Link>
      )}
      <div className="flex flex-col md:flex-row p-4">
        <img
          src={productDetails.images[0]} // Modify to use the correct image source
          alt={productDetails.name}
          className="w-full md:w-1/2 h-auto rounded-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-semibold">{productDetails.name}</h1>
          <p className="text-gray-500 mt-2">
            Uploaded by - {productDetails.uploadedBy.name}
          </p>
          <p className="text-2xl font-semibold mt-4">
            ₹{parseFloat(productDetails.price.$numberDecimal).toFixed(2)}
          </p>
          <div className="buy-now-button-container">
            <button
              className={`mt-8 flex items-center px-5 py-3 rounded text-lg ${
                clickedButtonId === productDetails._id
                  ? "bg-green-500"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-gray-800 transition duration-300 transform`}
              onClick={() => handleAddToCart(productDetails._id)}
            >
              <span
                className={`mr-2 ${
                  clickedButtonId === productDetails._id ? "animate-ping" : ""
                } transition-transform`}
              >
                <FaShoppingCart />
              </span>
              Buy now
            </button>
            <Dialog
              isOpen={isDialogOpen}
              onClose={() => setDialogOpen(false)}
              onSave={handleConfirmPurchase}
              id={productDetails.uploadedBy._id}
            />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-900 mt-2">{productDetails.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">
        <h2 className="text-xl font-semibold">Specifications</h2>
        <div className="border-t border-gray-300 mt-2 pt-2">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {productDetails.specifications.map((spec, index) => (
              <div
                key={index}
                className="p-2 text-gray-900 hover:text-yellow-500 transition-transform hover:scale-105 transform-gpu duration-300 hover:bg-gray-900 hover:shadow-md rounded-md"
              >
                <dt className="font-semibold">{spec.key}</dt>
                <dd className="text-sm font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
