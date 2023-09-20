import React from 'react'
import './card.css'
import ss from '../../drawables/front-card.svg'

const card = () => {
  const initialCCN = '0000000000000000';

  // Format the credit card number in a single line
  const formattedCCN = initialCCN.replace(/(\d{4})(?=\d)/g, '$1 ');


  return (
    <div className='fcard'>
      <div className='tr-eclipse'>
        <span id="first_eps"></span>
        <span id="second_eps"></span>
      </div>
      <div className='eclipse'>
      <div className='Infouser'>
        
          <div id='ccn'>{formattedCCN}</div>
          <div class="ccn2">
            <div id='cc-name'> james bond</div>
            <div id='expiry'>10/22</div>
        </div>
      </div>
        <span class="eps" id="three">3</span >
        <span class="eps" id="four">4</span >
        <span class="eps" id="five">5</span >
        <span class="eps" id="one">1</span >
        <span class="eps" id="two">2</span >
      </div>
    </div>
  )
}

export default card