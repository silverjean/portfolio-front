import React from 'react';

import Navbar from '../../components/Navbar';
import Resume from '../../components/Resume';

export default function Home() {
  document.title = 'Home | Jean Silveira';
  return (
    <>
      <Navbar />
      <Resume />
    </>
  );
}
