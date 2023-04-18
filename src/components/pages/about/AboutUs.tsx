import React from 'react';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';

const AboutUs = () => {
  return (
    <>
      <main data-testid="about_us_page">AboutUs</main>
    </>
  );
};
export default withHeaderHoc(AboutUs);
