import React from 'react';

import Navbar from '../../components/Navbar';
import Resume from '../../components/Resume';

export default function Portfolio() {
  document.title = 'Portifólio | Jean Silveira';
  return (
    <>
      <Navbar />
      <Resume portfolio />
    </>
  );
}
