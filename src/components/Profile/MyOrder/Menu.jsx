import React from 'react';
import TabMenu from './TabMenu';

function Menu() {
  return (
    <ul className="nav nav-pills my-order d-flex justify-content-evenly" id="user-feature-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active rounded-pill" id="all-items-tab" data-bs-toggle="pill" data-bs-target="#all-items" type="button" role="tab" aria-controls="all-items" aria-selected="true">All items</button>
      </li>
      <TabMenu data={{ tabName: 'not-paid', tabTitle: 'Not paid yet' }} />
      <TabMenu data={{ tabName: 'packed', tabTitle: 'Packed' }} />
      <TabMenu data={{ tabName: 'sent', tabTitle: 'Sent' }} />
      <TabMenu data={{ tabName: 'completed', tabTitle: 'Completed' }} />
      <TabMenu data={{ tabName: 'order-canceled', tabTitle: 'Order canceled' }} />
    </ul>
  );
}

export default Menu;
