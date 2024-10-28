import React, {useState} from "react";
import PhotoAlbum from "react-photo-album";
import { gallery } from "../../Gallery/Photos.jsx";
import "../../Gallery/Gallery.css"
import "./PhotographyPage.css"
import Bar from "../Bar.jsx";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function PhotographyPage() {
  const [index, setIndex] = useState(-1);

return (
  <div className="container-gallery photography">
<Bar />
    
  <div className="photo-album-div-2">
      <PhotoAlbum layout="masonry" photos={gallery} columns={(containerWidth) => {
        if (containerWidth < 550) return 1;
        if (containerWidth < 850) return 2;
        return 3;
      }} spacing={5} padding={0} onClick={({ index }) => setIndex(index)} 
      />
      <Lightbox
        slides={gallery}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
  </div>
</div>
);
}

export default PhotographyPage;