import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
// import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
    </Col>
  </Row>
);

export default OrderForm;