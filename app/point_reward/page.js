'use client'

import { useState } from "react";
import { menu, cost } from "./data.js";

export default function point_reward() {
  // 각 상품에 대한 수량을 개별적으로 관리
  const [문화상품권, 수량변경1] = useState(1);
  const [크림파스타, 수량변경2] = useState(1);
  const [알리오올리오, 수량변경3] = useState(1);

  // 수량을 감소시키는 함수
  const 수량감소 = (수량, 수량변경) => {
    if (수량 > 1) {
      수량변경(수량 - 1);
    }
  };

  // 수량을 증가시키는 함수
  const 수량증가 = (수량, 수량변경) => {
    if (수량 < 10) {
      수량변경(수량 + 1);
    }
  };

  return (
    <div>
      {menu.map((a, i) => {
        {/*현재상품의 인덱스에 따라 상품의 종류 결정*/}
        const 현재상품 = i === 0 ? 문화상품권 : i === 1 ? 크림파스타 : 알리오올리오;

        {/*수량을 변경할 상품의 번호를 선택*/}
        const 현재상품수량 = i === 0 ? 수량변경1 : i === 1 ? 수량변경2 : 수량변경3;

        //수량을 초기화시키는 함수(수량초기화 함수 실행시 현재 상품수량을 1로 변경)
        const 수량초기화 = () => {
          현재상품수량(1);
        }

        return (
          <div className="why" key={i}>
            <img className="img" src={`/reward${i}.jpg`} alt={`Reward ${i} Image`} />
            <h4>
              {menu[i]}<br></br>{cost[i]}
              <br></br> <br></br>
              <button onClick={() => 수량감소(현재상품, 현재상품수량)}> - </button>
              <span> {현재상품} </span>
              <button onClick={() => 수량증가(현재상품, 현재상품수량)}> + </button>
              <button className = "btn_reset" onClick={수량초기화}> 초기화 </button>
            </h4>
          </div>
        );
      })}
    </div>
  );
}