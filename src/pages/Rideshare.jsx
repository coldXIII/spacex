import React from 'react';
import Intro from '../components/Intro/Intro';
import Tabs from '../components/Tabs/Tabs';
import background from '../assets/rideshare/background.webp';
import Advantages from '../components/Advantages/Advantages';
import Pricing from '../components/Pricing/Pricing';
import tabsection from '../store/rideshare/tabsection';

const Rideshare = () => {
  return (
    <div className="Rideshare Page">
      <Intro
        background={background}
        title={'Smallsat Rideshare Program'}
        subtitle={
          'Dedicated rideshare missions as low as $1.1M*. Search flights below.'
        }
        style={{ whiteSpace: 'nowrap' }}
      />
      <Advantages />
      <Pricing />
      <Tabs data={tabsection} title={'payload configurations'} style={{ direction:'rtl'}} />
    </div>
  );
};

export default Rideshare;
