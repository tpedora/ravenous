import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={ this.props.type.imageSrc } alt=''/>
        </div>
        <h2>{ this.props.type.name }</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{ this.props.type.address }</p>
            <p>{ this.props.type.city }</p>
            <p>{ this.props.type.state }</p>
          </div>
          <div className="Business-reviews">
            <h3>{ this.props.type.category }</h3>
            <h3 className="rating">{ this.props.type.rating }</h3>
            <p>{ this.props.type.reviewCount } Reviews</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
