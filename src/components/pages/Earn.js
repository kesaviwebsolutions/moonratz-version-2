import React from "react";
import { Link } from "react-router-dom";
import left from "../images/left-cheeze.jpg";
import right from "../images/right-cheeze.jpg";
import StakeList from "../StakeList";
export default function Staking({user}) {
  return (
    <main>
      <section className="intro staking">
        <div className="grid-x align-center">
          <figure className="float-el">
            <img className="left-cheeze" src={left} alt="moonratz"/>
            <img className="right-cheeze" src={right} alt="moonratz"/>
          </figure>

          <h1 className="text-center">
            Stake <i className="title-stake"></i> Earn<br/>
            and more
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

      <StakeList user={user}/>

      <aside className="modal">{/* add class active to show */}
        <div className="window">
          <div className="swap-cnt">
            <div className="heading">
              <h3>Stake LP</h3>
              <div className="h3"><small>Balance, 10,929,929.0009</small></div>
            </div>

            <ul className="chedda-val">
              <li>
                <p><small>Stake</small></p>
                <figure>
                  <i className="circle small" data-ico="rtp"></i>
                  <i className="circle small" data-ico="eth"></i>
                  ETH-RTP
                </figure>
              </li>

              <li>
                <div className="button-group">
                  <button className="btn tiny" id="halfRtp">Half</button>
                  <button className="btn tiny" id="allRtp">Full</button>
                </div>
                <label className="lbl-wrap" htmlFor="ethRtpVal"></label>
                <input
                  id="ethRtpVal"
                  className="dynamic-amount"
                  value=""
                  placeholder="100"
                />
              </li>
            </ul>

            <ul className="eth-data">
              <li><small>Annual ROI at current rates:</small></li>
              <li>$0.00</li>
            </ul>
            <p>*4% staking fee</p>
          </div>

          <div className="button-group split">
            <button className="btn small secondary dark">Cancel</button>
            <button className="btn small">Confirm</button>
          </div>
        </div>
      </aside>

      <aside className="modal">{/* add class active to show */}
        <div className="window">
          <div className="swap-cnt">
            <div className="heading">
              <h3>Stake RTP</h3>
              <div className="h3"><small>Balance, 10,929,929.0009</small></div>
            </div>

            <ul className="chedda-val">
              <li>
                <p><small>Stake</small></p>
                <figure>
                  <i className="circle small" data-ico="rtp"></i>
                  ETH-RTP
                </figure>
              </li>

              <li>
                <div className="button-group">
                  <button className="btn tiny" id="halfRtp">Half</button>
                  <button className="btn tiny" id="allRtp">Full</button>
                </div>
                <label className="lbl-wrap" htmlFor="rtpVal"></label>
                <input
                  id="rtpVal"
                  className="dynamic-amount"
                  value=""
                  placeholder="100"
                />
              </li>
            </ul>

            <ul className="eth-data">
              <li><small>Annual ROI at current rates:</small></li>
              <li>$0.00</li>
            </ul>
            <p>*4% staking fee</p>
          </div>

          <div className="button-group split">
            <button className="btn small secondary dark">Cancel</button>
            <button className="btn small">Confirm</button>
          </div>
        </div>
      </aside>
    </main>
  );
}
