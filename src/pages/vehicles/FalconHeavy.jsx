import React from 'react';
import Intro from '../../components/Intro/Intro';
import Counter from '../../components/Counter/Counter';
import InfoSlider from '../../components/InfoSlider/InfoSlider';
import Video from '../../components/Video/Video';
import Performance from '../../components/Performance/Performance';
import Tabs from '../../containers/Tabs/Tabs';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Outro from '../../components/Outro/Outro';
import parallaxslide from '../../store/falcon-heavy/parallaxslide.js';
import slides from '../../store/falcon-heavy/slides.js';
import tabsslide from '../../store/falcon-heavy/tabs.js';
import counter from '../../store/falcon-heavy/counter.js';
import tabsection from '../../store/falcon9/tabsection';
import imageslider from '../../store/falcon-heavy/imgslider.js';
import background from '../../assets/falcon-heavy/background.webp'

const jpgSrc = 'https://img.youtube.com/vi/A0FZIwabctw/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/A0FZIwabctw/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/A0FZIwabctw';

const FalconHeavy = () => {
  return (
    <div className="FalconHeavy Page">
          <Intro
        background={background}
        title={'falcon heavy'}
        subtitle={'The world’s most powerful rocket'}
      />
      <Counter data={counter} />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'first stage'}
        subtitle={'falcon heavy'}
      />
      <Video imgSrc={jpgSrc} webpSrc={webpSrc} videoSrc={videoSrc} title={'Falcon Heavy First Flight'} />
      <Performance/>
      <Tabs data={tabsection} title={'merlin'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider}/>
       <Outro />
    </div>
  );
};

export default FalconHeavy;
