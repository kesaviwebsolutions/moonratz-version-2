import React from "react";
import { Link } from "react-router-dom";
import left from "../images/left-cheeze.jpg";
import right from "../images/right-cheeze.jpg";
import StakeCard from "../StakeCard";
// import "./App1.scss";
export default function Staking({user}) {
  return (
    <main>
      <section className="intro staking">
        <div className="grid-x align-center">
          <figure className="float-el">
            <img className="left-cheeze" src={left} alt="moonratz"/>
            <img className="right-cheeze" src={right} alt="moonratz"/>
          </figure>

          <h1 className="reduced text-center">
            Stake MoonRatz,<br/>
            earn up to<br/>
            <span className="dynamic">
          <span id="apyVal">1200%</span> APY
          <span className="tooltip"><i data-ico="info"></i>
            <aside className="window">
              <h4>CHEDDA APR</h4>
              <p>Rates shown are estimates, and fluctuate according to many different factors, including token prices, trading volume, liquidity, amount staked, and more.</p>
            </aside>
          </span>
        </span>
          </h1>
          <div className="button-group">
            <a className="btn" href="https://opensea.io/collection/moonratzwtf" title="Buy Moonratz" target="_blank">Buy
              Moonratz</a>
            <a className="btn secondary"
               href="https://app.uniswap.org/#/swap?outputCurrency=0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15&use=V2&chain=mainnet"
               title="Buy Trap Token" target="_blank">Buy RTP Token</a>
          </div>
        </div>
      </section>

      <StakeCard user={user}/>
    </main>
  );
}
