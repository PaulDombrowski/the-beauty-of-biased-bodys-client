import React from 'react';
import MovingCircle from '../components/MovingText';
import HeadTitle from '../components/Header';


function VideoBox() {
  const routes = [
    { path: '/comparepictures', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-34-53_prdw82.webm', videoText: '//ARCHIVE' },
    { path: '/pictures', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-39-41_w6cv4n.webm', videoText: 'GET NFT' },
    { path: '/getashirt', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-32-6_nlvova.webm', videoText: 'GET SHIRT' },
    { path: '/getrandom', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-36-25_xxxfjz.webm', videoText: 'GET RANDOM PICTURE' }
  ];

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div><HeadTitle/>
    <div className="home">
    
    <div className="video-box">
   
      {routes.map((route, index) => (
        <div className="video" key={index} onClick={() => navigateTo(route.path)}>
          <video autoPlay loop muted playsInline>
            <source src={route.videoSrc} type="video/mp4" />
          </video>
          <div className="videotext">{route.videoText}</div>
        </div>
      ))}
      {/* <div><MovingCircle/></div> */}
    </div>
    </div>
    </div>
  );
}

export default VideoBox;
