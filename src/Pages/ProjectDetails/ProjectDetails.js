import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isOkay, setIsOkay] = useState(false)

  const name = location.state.name;
  const features = location.state.features;
  const frontEnd = location.state.front_end;
  const backEnd = location.state.back_end;

  const live_link = location.state.live_link;
  const client_code = location.state.client_side_code;
  const server_code = location.state.server_side_code;

  const slider_1 = location.state.slider_1;
  const slider_2 = location.state.slider_2;
  const slider_3 = location.state.slider_3;
  const slider_4 = location.state.slider_4;

  useEffect(()=>{
    if(server_code === "No"){
        setIsOkay(true);
    }
  },[])

  const images = [slider_1, slider_2, slider_3, slider_4];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="bg_color">
      <div className="container mx-auto px-12 py-8 bg_color">
        <h2 className="text-4xl text-center font-bold mb-7">Project Details</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            {images.map((src, index) => (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                width="500"
                key={index}
                style={{ margin: "2px" }}
                alt=""
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>

          <div className="px-5 py-4" data-aos="fade-up" data-aos-duration="1000">
            <h4 className="text-3xl text-primary font-bold text-center mb-12">
              {name}
            </h4>
            <div className="mx-start">
              <p className="text-xl font-bold text-primary">Features: </p>
              <li className="mb-4">{features}</li>

              <p className="text-xl font-bold text-primary">Front End Tech: </p>
              <li className="mb-4">{frontEnd}</li>

              <p className="text-xl font-bold text-primary">
                Backend End Tech:{" "}
              </p>
              <li className="mb-4">{backEnd}</li>

              {/* buttons */}
              <div className="md:flex md:flex-cols lg:flex-cols justify-around gap-7 py-5 mt-12">
                <a href={live_link} target="_blank" className="btn btn-primary link_button">Live Link</a>
                <a href={client_code} target="_blank" className="btn btn-primary link_button">Client Code Link</a>
                <a href={server_code} target="_blank" className="btn btn-primary link_button"
                    disabled={isOkay}
                >Server Code Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
