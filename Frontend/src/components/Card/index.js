import React from 'react';
import './index.css';
import iconSave from '../../img/icon-save.svg';

export default function Card() {
  return (
    <div className="card-main">
      <div className="card-header">
        <h2>Title</h2>
        <button>
          <img  className='icon' src={iconSave}/>
        </button>
      </div>
      <div className="card-body">
        <img src="https://yt3.googleusercontent.com/kUSYdmbDFsc5UPiCdvSMC64WBIyRgQUG6Kmobo2ItTBz-IvJPI3POduVqI_3aj88ydPvVU0Xc9k=s176-c-k-c0x00ffffff-no-rj"/>
        <p>content</p>
      </div>
    </div>
    );
}
