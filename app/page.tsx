import exp from 'constants';
import Script from 'next/script';

export default function Home() {
  let number = '041-358-1806'
  return (
    <div>
      <Script src="어서오세요."></Script>
      <div>
        <h4 style={{color: 'white', fontSize: '30px', textAlign: 'center',marginTop:'150px'}}>전문가의힘</h4>
        <h4 className="maintitle">css 사용</h4>
        <p className="subtitle"> {number} </p>
      </div>
    </div>
  )
}
