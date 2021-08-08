import React from 'react';
import styles from './OrderSummary.module.scss'
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderSummary = ({cost, options}) => (
    <h2 className={styles.component}>Total:<strong>{formatPrice(calculateTotal(cost, options))}</strong></h2>
);
export default OrderSummary;