import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App1.scss'
import './Style.scss'
import meta from './components/images/meta.png'
import wallet from './components/images/connect.png'

function Nav({ WalletC, Metamask, account, Dissconnect }) {
  const [acitve, setAtive] = useState(false)
  const sliceadd = (address) => {
    const first = address.slice(0, 4)
    const second = address.slice(38)
    return first + '...' + second
  }
  return (
    <>
      <div id="desktop-nav">
        <nav id="nav" className="slide-down">
          <div>
            <a href="/" title="MoonRatz Home">
              <i data-ico="mlogo"></i>
            </a>

            <input id="menu-toggle" type="checkbox"/>
            <label id="mtoggle" htmlFor="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <ul className="spaced m-auto" data-list="inline">
              <li><a href="https://opensea.io/collection/moonratzwtf" title="NFT" target="_blank" rel="noreferrer">NFT</a></li>
              <li><a href="https://www.dextools.io/app/ether/pair-explorer/0x67a9d38cc97d6fde980df11581b8898134b3198c" title="Token" target="_blank" rel="noreferrer">Token</a></li>
              <li>
                <Link to="/Earn" title="Earn">
                  Earn
                </Link>
              </li>
              <li>
                <Link to="/Lottery" title="Lottery">
                  Lottery
                </Link>
              </li>
              <li><a href="https://game.moonratz.com/" title="NFT" target="_blank" rel="noreferrer">Game</a></li>
              <li id="options">
                <input className="subtrigger" id="submenu-toggle" type="checkbox"/>
                <label htmlFor="submenu-toggle">
                  <i data-ico="options"></i>
                </label>
                <section className="submenu">
                  <ul data-list="no-disc">
                    <li>
                      <Link to="/Swap" title="Swap">
                        Swap
                      </Link>
                    </li>
                    <li>
                    <Link to="/Stake" title="Stake">
                      Stake
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contracts" title="Contracts">
                        Contracts
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://www.moonratz.com/dist/assets/img/whitepaper.pdf"
                        title="Contracts"
                        target="_blank"
                      >
                        White Paper
                      </a>
                    </li>
                  </ul>
                </section>
              </li>
              <li className="wallet">
              {account ? (
                <>
                  <div className="dropdown">
                    <button
                      className="btn small has-options"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {sliceadd(account)}

                      <span className="options">
                        <label className="dropdown-menu" htmlFor="navOptions"><i data-ico="arrow-down"></i></label>
                        <input className="subtrigger" id="navOptions" type="checkbox"/>
                        <section className="submenu">
                          <ul data-list="no-disc">
                            <li>
                              <div className="link" onClick={() => {Dissconnect()
                                setAtive(false)}}>
                                Disconnect
                              </div>
                            </li>
                          </ul>
                        </section>
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="btn small"
                  type="button"
                  onClick={() => {Dissconnect()
                    setAtive(true)}}>
                  Connect Wallet
                </button>
              )}
              </li>
            </ul>

            <ul className="socials" data-list="inline">
              <li>
                <a
                  className="circle"
                  href="https://opensea.io/collection/moonratzwtf"
                  title="MoonRatz on OS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i data-ico="os"></i>
                </a>
              </li>
              <li>
                <a
                  className="circle"
                  href="https://discord.com/invite/PGDgzjBU"
                  title="Moonratz on Discord"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i data-ico="discord"></i>
                </a>
              </li>
              <li>
                <a
                  className="circle"
                  href="https://t.me/RATTRAPTOKEN"
                  title="MoonRatz on Telegram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i data-ico="telegram"></i>
                </a>
              </li>
              <li>
                <a
                  className="circle"
                  href="https://twitter.com/moonratzwtf"
                  title="MoonRatz on Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i data-ico="twitter"></i>
                </a>
              </li>
            </ul>
          </div>

          <aside className="melting-nav"></aside>
        </nav>
        {/*MODAL  */}

        <aside className={`modal ${acitve ? 'active' : ''}`}>{/* add active to show */}
          <div className="window">
            <button className="close" onClick={()=>setAtive(false)}><i data-ico="close"></i></button>

            <h3>Please Connect Your Wallet</h3>
            <hr/>

            <div className="grid-x wallet-images">
              <div>
                <img src={meta} alt="" onClick={() => {
                  Metamask();
                  setAtive(false)
                }}/>
              </div>
              <div>
                <img src={wallet} alt="" onClick={() => {
                  WalletC();
                  setAtive(false)
                }}/>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Nav
