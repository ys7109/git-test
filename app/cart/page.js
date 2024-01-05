import exp from 'constants';
import {age, set} from './data.js';

export default function cart() {
  //변수에 넣어줄 데이터 생성(DB 대체 임시용)
  let 장바구니 = ['문화상품권 1만원', '크림파스타', '알리오 올리오']
  let 가격 = ['10000p','5000p','2000p']
  let 개수 = [0,1,2,3,4,5]
  
  return (
    /* 아래에서 정의한 CartItem 컴포넌트를 사용 */
    <div>
        <h4 className="subtitle">cart</h4>
        {장바구니.map((gift, index) => (
        <CartItem key={index} gift={gift} price={가격[index]} count={개수[index]} />
      ))}
        <Banner card="롯데카드, 신한카드"/>
    </div>
    //CartItem 컴포넌트(자식 컴포넌트)에 cart(부모 컴포넌트)의 데이터를 넣어줌
  )
}

/* CartItem 컴포넌트를 정의*/
function CartItem(props){
    return(
        <div className="item">
            <p>{props.gift}</p>
            <p>{props.price}</p>
            <p>{props.count}</p> 
        </div>
    )
}

function Banner(props){
  return(
    <h5 className="banner">{props.card} 결제 행사중</h5>
  )
}