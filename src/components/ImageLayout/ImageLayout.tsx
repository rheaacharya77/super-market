import React from 'react';
import '../../assets/style/ImageLayout.css';

function ImageLayout (){
    return(
        <div className="row">
                <div className="col-md-6 ban-bottom p-3">
                  <div className="ban-wrap">
                    <img src={require('../../assets/images/layout1.jpg')} className="img-responsive" alt="" />
                  </div>
                </div>
                <div className="col-md-6 ban-bottom p-3">
                  <div className="ban-wrap">
                    <img src={require('../../assets/images/layout2.jpg')} className="img-responsive" alt="" />
                  </div>
                </div>
        </div>
    );
}
export default ImageLayout;