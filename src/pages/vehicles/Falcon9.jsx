import React from 'react';
import Intro from '../../components/Intro/Intro';
import Counter from '../../components/Counter/Counter';
import InfoSlider from '../../components/InfoSlider/InfoSlider';
import Video from '../../components/Video/Video';
import Tabs from '../../components/Tabs/Tabs';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Outro from '../../components/Outro/Outro';
import tabsection from '../../store/falcon9/tabsection';
import parallaxslide from '../../store/falcon9/parallaxslide.js';
import slides from '../../store/falcon9/slides.js';
import tabsslide from '../../store/falcon9/tabs.js';
import counter from '../../store/falcon9/counter.js';
import imageslider from '../../store/falcon9/imgslider.js';
import background from '../../assets/falcon9/background.webp';

const jpgSrc = 'https://img.youtube.com/vi/Z4TXCZG_NEY/maxresdefault.jpg';
const webpSrc =
  'https://img.youtube.com/vi_webp/Z4TXCZG_NEY/maxresdefault.webp';
const videoSrc = 'https://www.youtube.com/embed/Z4TXCZG_NEY';

function Falcon9() {
  return (
    <section className="Falcon9 Page">
      <Intro
        background={background}
        title={'falcon 9'}
        subtitle={'First Orbital Class Rocket capable of reflight'}
      />
      <Counter data={counter} />
      <InfoSlider
        parallaxslide={parallaxslide}
        tabsslide={tabsslide}
        slides={slides}
        title={'first stage'}
        subtitle={'falcon 9'}
      />
      <Video
        imgSrc={jpgSrc}
        webpSrc={webpSrc}
        videoSrc={videoSrc}
        title={'Falcon 9 In Flight'}
      />
      <Tabs data={tabsection} title={'merlin'} subtitle={'engines'} />
      <ImageSlider imageslider={imageslider} />
      <Outro />
    </section>
  );
}

export default Falcon9;
