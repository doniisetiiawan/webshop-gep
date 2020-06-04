import React from 'react';
import { Row } from 'react-bootstrap';
import MainOffering from './mainOffering';
import RibbonOffering from './ribbonOffering';

function Offerings(props) {
  return (
    <>
      <Row>
        {props.productData
          .filter((data, idx) => idx < props.maxProducts)
          .map((data, idx) => {
            if (props.type === 'main') {
              return (
                <MainOffering
                  {...props}
                  key={`main${idx}`}
                  productData={data}
                />
              );
            }
            if (props.type === 'ribbon') {
              return (
                <RibbonOffering
                  {...props}
                  key={idx}
                  productData={data}
                />
              );
            }
          })}
      </Row>
    </>
  );
}

export default Offerings;

Offerings.defaultProps = {
  maxProducts: 3,
  type: 'main',
};
