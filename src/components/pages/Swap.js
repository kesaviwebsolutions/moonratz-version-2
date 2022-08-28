import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import { FaEthereum } from "react-icons/fa";
import { TbCheese } from "react-icons/tb";
import swap from "../images/swap-chedda.jpg";
import {
  MetaMasklogin,
  SwapContract,
  rate,
  Balanceoftoken,
  allswap,
} from "../../Web3/Web3";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);
export default function Swap({ user }) {
  const [amount, setAmount] = useState(0);
  const [swaprate, setSwapRate] = useState(0);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const init = async () => {
      await MetaMasklogin();
      const spr = await rate();
      setSwapRate(spr);
      const bal = await Balanceoftoken();
      setBalance(bal);
      const ts = await allswap();
      setTotal(ts);
    };
    init();
  }, [user]);

  const Swap = async () => {
    const data = await SwapContract(amount);
    if (data.status) {
      notify("Swap Successfully");
      const bal = await Balanceoftoken();
      setBalance(bal);
    }

  };
  const full = () => {
    setAmount(balance);
  };
  const half = () => {
    setAmount(balance / 2);
  };

  return (
    <main>
      <section className="heading-cheese expanded reduced">
        <img src={swap} alt="Swap Your Chedda"/>
      </section>

      <section className="swap">
        <div className="grid-x align-center">
          <div className="swap-cnt">
            <div className="heading">
              <h3>Swap Chedda</h3>
              <div className="h3"><small>Balance, {balance}</small></div>
            </div>

            <ul className="chedda-val">
              <li>
                <p><small>From</small></p>
                <figure>
                  <i className="circle small" data-ico="chedda"></i>
                  Chedda
                </figure>
              </li>

              <li>
                <div className="button-group">
                  <button className="btn tiny" id="halfChedda" onClick={() => half()}>Half</button>
                  <button className="btn tiny" id="allChedda" onClick={() => full()}>Full</button>
                </div>
                <label className="lbl-wrap" htmlFor="cheddaVal"></label>
                <input
                  id="cheddaVal"
                  className="dynamic-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="100"
                />
              </li>
            </ul>

            <ul>
              <li>
                <p><small>To</small></p>
                <figure>
                  <i className="circle small" data-ico="eth"></i>
                  ETH <small>(Ethereum)</small>
                </figure>
              </li>

              <li>
                <span id="ethVal">{(amount * swaprate) / 3000}</span>
              </li>
            </ul>

            <ul className="eth-data">
              <li>TOTAL ETH SWAPPED</li>
              <li>{Number(total).toFixed(7)}</li>
            </ul>

            <p><small>*at least 30 $CHEDDA is required for swapping</small></p>

            <button id="swap" className="btn span" onClick={() => Swap()}>Proceed to Swap</button>
          </div>
        </div>
        <Toaster />
      </section>
    </main>
  );
}
