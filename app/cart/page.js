import exp from 'constants';
import {age, set} from './data.js';

export default function cart() {
  return (
    <div>
        <h4 className="subtitle">cart</h4>
        <CartItem/>
        <CartItem/>
    </div>
  )
}

function CartItem(){
    return(
        <div className="item">
            <p>상품명{set}</p>
            <p>P</p>
            <p>개</p>
        </div>
    )
}