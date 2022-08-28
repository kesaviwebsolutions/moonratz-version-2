import React from "react";
import leftLottery from "../images/left-lottery.jpg";
import rightLottery from "../images/right-lottery.jpg";
import prevWinners from "../images/title/prev-winners.jpg";
import { Link } from "react-router-dom";
export default function Home({user}) {
  return (
    <main>
      <section className="intro lottery">
        <div className="grid-x align-center">
          <figure className="float-el">
            <img className="left-lottery" src={leftLottery} alt="moonratz"/>
            <img className="right-lottery" src={rightLottery} alt="moonratz"/>
          </figure>

          <h1 className="reduced text-center">
            enter Lottery for a <br/>
            chance to win some $Chedda <br/>
            <span className="dynamic">
          <span id="prizeVal">101.56</span>
          <span className="tooltip"><i data-ico="info"></i>
            <aside className="window">
              <h4>Moonratz Lottery</h4>
              <p>Your Nft is your ticket to a weekly lottery draw. Each nft has a number that will be picked as the lucky nft ticket for the entire pot. 100 entries max on a fcfs basis good luck Ratz.</p>
            </aside>
          </span>
        </span>
          </h1>
          <div className="button-group">
            <a className="btn" href="https://opensea.io/collection/moonratzwtf" title="Buy Moonratz" target="_blank">Buy
              Moonratz</a>
            <a className="btn secondary"
               href="https://app.uniswap.org/#/swap?outputCurrency=0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15&use=V2&chain=mainnet"
               title="Buy Trap Token" target="_blank">Buy Trap Token</a>
          </div>
        </div>
      </section>

      <section className="lottery-tck">
        <div className="grid-x align-center">
          <div className="large-10 lucky-ticket">
            <div className="grid-x align-middle">
              <div className="details">
                <section>
                  <h3>Your Tickets</h3>
                  <p className="h2"><span id="ticketVal">0</span> / 10</p>
                  <button className="btn span">Connect wallet</button>
                </section>
              </div>

              <div className="info">
                <section>
                  <h2>Lottery Ends</h2>
                  <div className="counter">
                    <span id="days">4</span>d:<span id="hrs">12</span>h:<span id="min">32</span>m:<span
                    id="sec">45</span>s
                  </div>
                  <p className="mutated"><span id="ticketsQ">34</span> / 100</p>
                </section>

                <footer>
                  <p><small>*Trap Token and Moonratz NFTs required</small></p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="heading-cheese expanded reduced">
        <img src={prevWinners} alt="Previous Lottery Winners"/>
      </section>

      <section>
        <div className="grid-x align-center">
          <div className="large-10 tickets-list">
            <div className="grid-x">
              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>

              <div className="ticket">
                <header>
                  <ul>
                    <li>
                      <ul>
                        <li className="h3">Lottery</li>
                        <li className="h3">wn <span>31</span></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className="h3">Chedda Pot</li>
                        <li className="h3"><span>101.56</span></li>
                      </ul>
                    </li>
                  </ul>
                </header>

                <div className="details">
                  <h3>@MissLillyCrypto</h3>
                  <p><small>0xA55EFB67903f0A3e0791aC399dBEe2b9E3bE8443</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
