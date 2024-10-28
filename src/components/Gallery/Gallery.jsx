import React from "react";
import PhotoAlbum from "react-photo-album";
import { photos } from "./Photos.jsx";
import "./Gallery.css"
import { Link } from "react-router-dom";




function Gallery() {
  return (
    <div className="container-gallery">
    <div className="photo-album-div">
      <PhotoAlbum layout="masonry" photos={photos} columns={4} spacing={5} padding={0} />
    </div>
      <div className="who">
      <Link to="/photography" className="navbar-links links">
          <button className="bn13" >SEE MORE</button>
        </Link>
        </div>
      </div>
  );
}

export default Gallery;