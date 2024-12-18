import React from 'react';
import './Aside.scss';
import {mockData} from './AsideMocData';

function Aside() {
  return (
    <aside className="aside">
      <ul className="aside-list">
        {mockData.map((item,index) => (
          <li key={index}>
            <div className="aside-list_content">
              <div className="aside-list_title">
                <a href='#'>{item.itemName}</a>
              </div>
              <div className="aside-list_amount">{item.itemCount}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default Aside;
