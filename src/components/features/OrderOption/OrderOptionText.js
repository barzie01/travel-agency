import React from 'react';
import styles from './OrderOption.scss';


const OrderOptionText = ({currentValue, setOptionValue, name, required}) => (
  <div className={styles.component}>
    <label>
      {name}
      <input type='text'
        className={styles.text}      
        value={currentValue}       
        onChange={event => setOptionValue(event.currentTarget.value)} 
        required={required} 
      />
    </label>    
  </div>
);
export default OrderOptionText;