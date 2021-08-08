import React from 'react';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';


const OrderOptionDate = ({name, setOptionValue, currentValue}) => (
  <div className={styles.component}>
    <label>
      {name}
      <DatePicker selected={currentValue} onChange={date => setOptionValue(date)} />
    </label>    
  </div>
);
export default OrderOptionDate;