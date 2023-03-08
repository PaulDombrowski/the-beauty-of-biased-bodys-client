import React from 'react';


function VideoBox() {
  const routes = [
    { path: '/page1', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-34-53_prdw82.webm', videoText: 'Text für Video 1' },
    { path: '/page2', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-39-41_w6cv4n.webm', videoText: 'Text für Video 2' },
    { path: '/page3', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-32-6_nlvova.webm', videoText: 'Text für Video 3' },
    { path: '/page4', videoSrc: 'https://res.cloudinary.com/dy2abs6ko/video/upload/v1678272659/MOSHED-2023-3-8-11-36-25_xxxfjz.webm', videoText: 'Text für Video 4' }
  ];

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="video-box">
      {routes.map((route, index) => (
        <div className="video" key={index} onClick={() => navigateTo(route.path)}>
          <video autoPlay loop muted playsInline>
            <source src={route.videoSrc} type="video/mp4" />
          </video>
          <div className="videotext">{route.videoText}</div>
        </div>
      ))}
    </div>
  );
}

export default VideoBox;
