import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.type.map(function(business) {
            return <Business type={business} key={business}/>
          })
        }
      </div>
    );
  }
};

export default BusinessList;
