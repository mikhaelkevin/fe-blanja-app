import React from 'react';
import TabMenuContent from './TabMenuContent';

function MenuContent() {
  return (
    <div className="tab-content" id="user-feature-tabContent">
      <div className="tab-pane fade show active" id="all-items" role="tabpanel" aria-labelledby="all-items-tab">
        <h3 className="text-center text-muted pt-3">All items section</h3>
      </div>
      <TabMenuContent contentName="not-paid">
        <h3 className="text-center text-muted pt-3">Not paid section</h3>
      </TabMenuContent>
      <TabMenuContent contentName="packed">
        <h3 className="text-center text-muted pt-3">Packed section</h3>
      </TabMenuContent>
      <TabMenuContent contentName="sent">
        <h3 className="text-center text-muted pt-3">Sent section</h3>
      </TabMenuContent>
      <TabMenuContent contentName="completed">
        <h3 className="text-center text-muted pt-3">Completed section</h3>
      </TabMenuContent>
      <TabMenuContent contentName="order-canceled">
        <h3 className="text-center text-muted pt-3">Order canceled section</h3>
      </TabMenuContent>
    </div>
  );
}

export default MenuContent;
