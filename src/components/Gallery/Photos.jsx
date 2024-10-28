import img1 from "../../assets/gallery/home (1).jpg";
import img3 from "../../assets/gallery/home (3).jpg";
import img5 from "../../assets/gallery/home (5).jpg";
import img6 from "../../assets/gallery/home (6).jpg";
import img7 from "../../assets/gallery/home (7).jpg";
import img8 from "../../assets/gallery/home (8).jpg";
import img9 from "../../assets/gallery/home (9).jpg";
import img10 from "../../assets/gallery/home (10).jpg";

export const photos = [
    { src: img1, width: 7008, height: 4672, key: 1},
    { src: img9, width: 7008, height: 4672, key: 9},
    { src: img3, width: 7008, height: 4672, key: 3},
    { src: img10, width: 7008, height: 4672, key: 10},
    { src: img5, width: 7008, height: 4672, key: 5},
    { src: img6, width: 7008, height: 4672, key: 6},
    { src: img7, width: 7008, height: 4672, key: 7},
    { src: img8, width: 7008, height: 4672, key: 8},
       
];

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // all images are in the src/assets/ directory
  const imageContext = require.context("../../assets/gallery/", false, /\.(jpg|jpeg|png)$/);
  
  // Get an array of image paths
  const imagePaths = imageContext.keys();
  
  // Create the images array
  const images = imagePaths.map((path, index) => {
    const importedImage = imageContext(path);
  
    // Attribute values based on the image name
    let width = 7008;
    let height = 4672;
  
    if (path.includes("vertical")) {
      width = 4672;
      height = 7008;
    }

    if (path.includes("extra")) {
      width = 6548;
      height = 4365;
    }
  
    return {
      src: importedImage,
      width: width,
      height: height,
      key: index + 1,
    };
  });
  

  // Shuffle the array randomly
const shuffledImages = shuffleArray(images);
  

  
  // Now, 'shuffledImages' array contains all the imported images with their details in random order
  export const gallery = shuffledImages;
  
