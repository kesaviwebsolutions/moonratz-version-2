import React from "react";
import { Link } from "react-router-dom";
export default function Home({user}) {
  return (
    <main>
      <section className="intro">
        <div className="grid-x align-center">

          <h1 className="text-center">
            $RTP & $CHEDDA<br/> Smart Contracts
          </h1>
        </div>
      </section>

      <section className="faq">
        <div className="grid-x align-center">
          <div className="large-6">
            <h2>$RTP & $CHEDDA</h2>
            <p>$RTP & $CHEDDA are essential tokens in the MoonRatz ecosystem. Both of these are available on Ethereum
              blockchain with the following smart contracts.</p>
          </div>
        </div>

        <div className="grid-x align-center">
          <div className="large-6">
            <h2>Smart Contracts:</h2>
            <ol>
              <li>
                <p>$RTP: <a href="https://etherscan.io/token/0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15"
                            target="black">0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15</a></p>
              </li>
              <li>
                <p>$CHEDDA: <a href="https://etherscan.io/token/0x37de2663a2b265adfd152b73e1a42fb1b0063ada"
                               target="black">0x37de2663a2b265adfd152b73e1a42fb1b0063ada</a></p>
              </li>
            </ol>

            <p>Smart contracts can also be found on the coinmarketcap pages of <a href="#" title="RTP"
                                                                                  target="black">$RTP</a> & <a href="#"
                                                                                                               title="CHEDDA"
                                                                                                               target="black">$CHEDDA</a>.
              These smart contracts are used to
              add custom tokens in metamask wallets for display. <a
                href="https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask"
                target="_blank" title="Here is guide on how to add custom tokens on metamask">Here is guide on how to
                add custom tokens on metamask.</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
