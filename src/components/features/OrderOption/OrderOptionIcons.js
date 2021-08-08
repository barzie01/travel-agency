  import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

import {formatPrice} from '../../../utils/formatPrice'; 

const OrderOptionIcons = ({values, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    
    {values.map(value => {
      
      if(value.required){
        return (
          <div className={styles.icon}  onClick={() => (setOptionValue(''))} >
            <Icon name={'times-circle'}></Icon>
            <strong >{'none'}</strong> 
          </div>
        );
      }
      return(
        <div 
          key={value.id} 
          className={currentValue == value.id ? styles.iconActive : styles.icon} 
          onClick={() => (setOptionValue(value.id))} 
        >
          <Icon name={value.icon} ></Icon>
          {value.name}({formatPrice(value.price)}) 
        </div>
      );
    })
    }
  </div>
);
export default OrderOptionIcons;