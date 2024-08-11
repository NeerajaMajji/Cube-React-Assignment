import React, { useState, useEffect } from "react";
import ShimmerLoader from "./shimmerLoader";
import { CustomerData } from "./customerData.type";

type ImageData = {
  author: string;
  download_url: string;
  height: number;
  width: number;
  id: string;
  url: string;
};

type CustomerDetails = {
  customerDetails: CustomerData;
};

// This component displays detailed information about the selected customer,
// including their name, title, address, and a set of images fetched from an external API.
const CustomerDetailsPage = ({ customerDetails }: CustomerDetails) => {
  const [imagesData, setImagesData] = useState([]); // State to store fetched images data
  const [loading, setLoading] = useState(true); // State to handle the loading status

  useEffect(() => {
    // Function to fetch random images data from the API
    const fetchData = async () => {
      try {
        const randomPage = Math.floor(Math.random() * 100) + 1; // Generate a random page number for variety in fetched images
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${randomPage}&limit=9` // API call to fetch a list of images with a limit of 9 images per request
        );

        if (!response.ok) {
          throw new Error("Network response was not ok"); //if any network errors it will handle.
        }

        const parsedResult = await response.json(); // Parse the JSON response from the API
        setImagesData(parsedResult); // Update the state with the fetched images data
      } catch (error) {
        console.error("Fetch error:", error); // Log any errors that occur during the fetch
      } finally {
        setLoading(false); // Set loading to false once the data is fetched or an error occurs also
      }
    };

    fetchData(); // Initial fetch when the component mounts
    const intervalId = setInterval(fetchData, 10000); // Set an interval to fetch new images every 10 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div style={{ width: "70%" }}>
      <h1 style={{ textAlign: "center" }}>
        {customerDetails?.customerName} details here
      </h1>
      <p style={{ textAlign: "center" }}>{customerDetails?.title}</p>
      <p style={{ textAlign: "center" }}>{customerDetails?.address}</p>

      {/* Conditionally render either a loading shimmer or the grid of images */}
      {loading ? (
        <ShimmerLoader /> // Show the shimmer loader while the images are fetching
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {imagesData.map((image: ImageData) => (
            <div
              key={image?.id} // Unique key for each image element
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={image?.download_url}
                alt={image?.author}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDetailsPage;
