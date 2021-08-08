import React from 'react';
import styles from './OrderOption.scss';


const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input type='number' 
      className={styles.inputSmall} 
      value={currentValue} 
      max={limits.max} 
      min={limits.min} 
      onChange={event => setOptionValue(event.currentTarget.value)} 
    />
  </div>
);
export default OrderOptionNumber;