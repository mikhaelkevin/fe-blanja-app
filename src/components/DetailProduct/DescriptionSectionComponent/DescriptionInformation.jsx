import React from 'react';
import styles from '../../../styles/module/DetailProduct.module.css';

function DescriptionInformation() {
  return (
    <div className={styles.prodDescription__information}>
      <h3>Description</h3>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <br />
        Donec non magna rutrum, pellentesque augue eu, sagittis velit.
        Phasellus quis laoreet dolor.
        Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Praesent sed enim vel turpis blandit imperdiet ac ac felis.
        Etiam tincidunt tristique placerat.
        Pellentesque a consequat mauris, vel suscipit ipsum.
        Donec ac mauris vitae diam commodo vehicula.
        Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
        <br />
        <br />
        Donec non magna rutrum, pellentesque augue eu, sagittis velit.
        Phasellus quis laoreet dolor. Fusce nec pharetra quam.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Praesent sed enim vel turpis blandit imperdiet ac ac felis.
        In ultricies rutrum tempus. Mauris vel molestie orci.
      </p>
    </div>
  );
}

export default DescriptionInformation;
