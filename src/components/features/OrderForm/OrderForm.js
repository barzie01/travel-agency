import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption key={option.id} {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}> 

        </OrderOption>
      </Col>))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
    </Col>
  </Row>
);

export default OrderForm;