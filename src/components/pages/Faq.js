import React from "react";
import { Link } from "react-router-dom";
export default function Home({user}) {
  return (
    <main>
      <section className="intro">
        <div className="grid-x align-center">

          <h1 className="text-center">
            FAQ
          </h1>
        </div>
      </section>

      <section className="faq">
        <div className="grid-x align-center">
          <div className="large-6">
            <h2>How to buy RatTrap Token - $RTP</h2>

            <ol>
              <li>
                <h3>Get Metamask</h3>
                <p>MetaMask is available on iOS and Android or visit <a href="https://metamask.app.link/"
                                                                        target="_blank" title="metamask">metamask.io</a>
                </p>
              </li>
              <li>
                <h3>Get $ETH</h3>
                <p>Either purchase $ETH through MetaMask or transfer from another Wallet (e.g. Coinbase or Binance) to
                  MetaMask wallet.</p>
              </li>
              <li>
                <h3>Swap $ETH for $RTP</h3>
                <p>You can buy $RTP on UniSwap with this contract: <a
                  href="https://etherscan.io/token/0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15"
                  target="black">0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15</a> or here <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15&use=V2&chain=mainnet"
                  target="black">Uniswap</a></p>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid-x align-center">
          <div className="large-6">
            <h2>What is $RTP</h2>
            <p>$RTP stands for RatTrap Token - is a tradeable token. It is part of the MoonRatz ecosystem with 10M total
              supply and 10% transaction tax with 3% DAO, 5%
              marketing wallet and 2% liquidity.</p>
          </div>
        </div>

        <div className="grid-x align-center">
          <div className="large-6">
            <h2>What is $CHEDDA</h2>
            <p>$CHEDDA stands for CHEDDA Token - is non-tradeable and is pegged to ETH with a stable price. The ratio of
              peg is 1:3000 (ETH:CHEDDA) and will be maintained same at all times..</p>
            <p>$CHEDDA tokens are rewarded for stacking MoonRatz NFTs on our <a href="https://platform.moonratz.com/"
                                                                                title="staking platform">staking
              platform.</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
