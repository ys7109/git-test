import exp from 'constants';

export default function point_reward() {
  let menu = ['문화상품권 1만원', '크림 파스타', '알리오 올리오','크림 리조또','로제 리조또']
  let cost = ['10,000P', '$12','$11','$14','$16']

  return (
    <div>
      {menu.map((a,i)=>{
        return(
        <div className="why" key={i}>
          <img className="img" src={`/reward${i}.jpg`}/>
          <h4>
            {menu[i]}<br></br>{cost[i]}
          </h4>
        </div>)
        })
      }</div>
  )
}