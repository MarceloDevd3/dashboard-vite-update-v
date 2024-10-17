import React from 'react';
import Toggle from './switch';
import {useSelector} from 'react-redux';
import './assets/css/style.css';
import dado0 from './components/Data/bigItems';

import dado1 from './components/Data/smallItems';
import TopCards from './components/Cards/topCards';
import BottomCards from './components/Cards/bottomCards';
function App() {

  
  const dado = useSelector((state) => state.dado)

  const upArray = dado0.map(item => {
    return (
      <TopCards topColor={item.topColor} img={item.img} title={item.title} arrowAction={item.arrowAction} Color={item.Color} numbers={item.numbers} subName={item.subName} arrow={item.arrow} today={item.today} />
    )
  })

  const downArray = dado1.map(item => {
    return (
     <BottomCards title={item.title} socialIcon={item.socialIcon} views={item.views} arrow={item.arrow} porcent={item.porcent}  arrowAction={item.arrowAction} Color={item.Color} />
    )
  })


  return (
    <main className={dado.swicthValor ? 'bg dark' : 'bg'}>
    <section>
      <div className={dado.swicthValor ? 'top-bg darkT' : 'top-bg'}>
      </div>
      <header className='top-header'>
      <div>
      <h1 className={dado.swicthValor ? 't dark' : 't'}>Social Media Dashboard</h1>
        <p className='top-follow-text'>
        Total Followers: 23,004</p>
        <hr></hr>
      </div>
        <Toggle />
      </header>
      <section id='dashboard'>
      <div className='dash'>
      {upArray}
      </div>

      <h3 className={dado.swicthValor ? 'dashboard-sub dark' : 'dashboard-sub'}> Overview - Today</h3>
      <div className='dash'>
      {downArray}
      </div>
      </section>
    </section>
    </main>
  )
}

export default App
