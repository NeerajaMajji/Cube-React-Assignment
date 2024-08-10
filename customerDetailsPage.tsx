import React, { useState, useEffect } from "react";
import ShimmerLoader from "./shimmerLoader";

const CustomerDetailsPage = ({ customerDetails }) => {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("imagesData", imagesData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomPage = Math.floor(Math.random() * 100) + 1;
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${randomPage}&limit=9`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const parsedResult = await response.json();
        setImagesData(parsedResult);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {customerDetails?.customerName} details here
      </h1>
      <p style={{ textAlign: "center" }}>{customerDetails?.title}</p>
      <p style={{ textAlign: "center" }}>{customerDetails?.address}</p>

      {loading ? (
        <ShimmerLoader />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {imagesData.map((image) => (
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                key={image?.id}
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
