import exp from 'constants';
import Link from 'next/link';

export default function student_config() {
  let menu = ['토마토 파스타', '크림 파스타', '알리오 올리오','크림 리조또','로제 리조또']
  let cost = ['$10', '$12','$11','$14','$16']

  let number = '041-358-1806'
  return (
    <div>
      <div>
        <h4 className="why"> 왜 전문가의 힘일까요?<br></br>
        체계적인 관리 때문입니다.</h4>
      </div>
      <div className="link">
        <Link href="http://sfcenter.co.kr">스터디포스 바로가기</Link>
      </div>
      <div className="link">
        {menu.map((a,i)=>{
          return(
          <div className="why" key={i}>
            <img className="img" src="/reward1.jpg"/>
            <h4>
              {menu[i]} {cost[i]}
            </h4>
          </div>)
        })
      }</div>
    </div>
  )
}