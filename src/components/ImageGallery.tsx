import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery: React.FC = () => {
  // State to manage whether images are ready to be displayed
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay for loading images (1-2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 1-2 seconds, set isLoading to false
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <div className="gallery-container">
      {isLoading ? (
        <div className="loading-message">
          <p>Running the model and interpreting results...</p>
        </div>
      ) : (
        <>
          <div className="image-card">
            <img src="/images/output.png" alt="Image 1" />
          </div>
          <div className="image-card">
            <img src="/images/output1.png" alt="Image 2" />
          </div>
          <div className="image-card">
            <img src="/images/output2.png" alt="Image 3" />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;