import React from 'react';
import Intro from '../../components/Intro/Intro';
import InfoSlider from '../../components/InfoSlider/InfoSlider';
import Video from '../../components/Video/Video';
import background from '../../assets/starship/background.webp';
import parallaxslide from '../../store/starship/parallaxslide.js';
import slides from '../../store/starship/slides.js';
import tabsslide from '../../store/starship/tabs.js';
import Satellites from '../../components/Satellites/Satellites';
import satellites from '../../store/starship/satellites';
import Landing from '../../components/Landing/Landing';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Tabs from '../../components/Tabs/Tabs';


import tabsection from '../../store/starship/tabsection';
import imageslider from '../../store/starship/imgslider.js';

const jpgSrc = 'https://img.youtube.com/vi/sOpMrVnjYeY/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/sOpMrVnjYeY/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/sOpMrVnjYeY';

const Starship = () => {
  return (
    <div className="Starship Page">
      <Intro
        background={background}
        title={'starship'}
        subtitle={'fly to the future'}
      />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'payload'}
        subtitle={''}
      />
      <Video
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
        title={'starship update'}
      />
      <Satellites satellites={satellites} />
      <Landing />
      <Tabs
        data={tabsection}
        title={'raptor'}
        subtitle={'engines'}
      />
            <ImageSlider imageslider={imageslider} />
    </div>
  );
};

export default Starship;
