import React from 'react';
import Intro from '../../components/Intro/Intro';
import Counter from '../../components/Counter/Counter';
import InfoSlider from '../../components/InfoSlider/InfoSlider';
import Video from '../../components/Video/Video';
import Inspace from '../../components/Inspace/Inspace';
import Tabs from '../../containers/Tabs/Tabs';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import background from '../../assets/dragon/background.webp';
import counter from '../../store/dragon/counter.js';
import parallaxslide from '../../store/dragon/parallaxslide.js';
import slides from '../../store/dragon/slides.js';
import tabsslide from '../../store/dragon/tabs.js';
import tabsection from '../../store/dragon/tabsection';
import imageslider from '../../store/dragon/imgslider.js';


const jpgSrc = 'https://img.youtube.com/vi/78ATfCaBn6E/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/78ATfCaBn6E/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/78ATfCaBn6E';

const Dragon = () => {
  return (
    <div className="Dragon Page">
       <Intro
        background={background}
        title={'dragon'}
        subtitle={'   Sending humans and cargo into space'}
      />
      <Counter data={counter} />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'first stage'}
        subtitle={'dragon'}
      />

      <Video
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
        title={'crew dragon interior'}
      />
      <Inspace />
      <Tabs data={tabsection} title={'draco'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
    </div>
  );
};

export default Dragon;
