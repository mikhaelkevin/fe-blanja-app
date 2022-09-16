import React from 'react';
import Image from '../Global/Image';
import SelectionContent from './ProductVisual/SelectionContent';

import detailProdOne from '../../assets/detail-1.svg';
import detailProdTwo from '../../assets/detail-2.svg';
import detailProdThree from '../../assets/detail-3.svg';
import detailProdFour from '../../assets/detail-4.svg';
import detailProdFive from '../../assets/detail-5.svg';

function MainPicSection() {
  return (
    <>
      <div className="tab-pane fade show active w-100 h-100" id="firstItem" role="tabpanel" aria-labelledby="firstItem-tab">
        <Image data={{ image: detailProdOne, alt: 'main-image' }} />
      </div>
      <SelectionContent data={{ image: detailProdTwo, sectionName: 'secondItem' }} />
      <SelectionContent data={{ image: detailProdThree, sectionName: 'thirdItem' }} />
      <SelectionContent data={{ image: detailProdFour, sectionName: 'fourthItem' }} />
      <SelectionContent data={{ image: detailProdFive, sectionName: 'fifthItem' }} />
    </>
  );
}

export default MainPicSection;
