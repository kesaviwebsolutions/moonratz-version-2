import React,{useEffect, useState} from "react";
import { FaEthereum, FaMapSigns } from "react-icons/fa";
import { TbCheese } from "react-icons/tb";
import { MetaMasklogin, SwapContract } from "../Web3/Web3";
import toast, { Toaster } from 'react-hot-toast';

const notify =(msg)=> toast.success(msg)
export default function Cards() {

  const [amount, setAmount] = useState(0)

  useEffect(()=>{
    const init =async()=>{
      await MetaMasklogin();
    }
    init()
  },[])

  const SwapAmount = async()=>{
   const data = await SwapAmount(amount);
   if(data.status){
    
   }
  }

  return (
    <div>
      <div className="card area my-3">
        <div className="card-body backgroundColour">
          <blockquote className="blockquote mb-0">
            <p className="from-to">From</p>
            <div className="amount">
              <footer className="transcation">
                {" "}
                <TbCheese
                  size={35}
                  style={{
                    marignLeft: "10px",
                    borderRadius: "50px",
                    padding: "5px",
                    background: "#34544f",
                    color: "#D3D2A6",
                  }}
                />
                CHEDDA TOKEN
              </footer>
              <div className="total-amount">
                <p className="ta">Half</p>
                <p className="ta2">Full</p>
              </div>
            </div>
            {/* <p className="dynamic-amount">100</p> */}
            <input className="dynamic-amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="100"/>
          </blockquote>
        </div>
      </div>
      <div className="card area mb-3">
        <div className="card-body backgroundColour">
          <blockquote className="blockquote mb-0">
            <p className="from-to">To</p>
            <div className="eth-value">
              <footer className="transcation">
                <FaEthereum
                  size={35}
                  style={{
                    marignLeft: "10px",
                    borderRadius: "50px",
                    padding: "5px",
                    background: "#fff",
                    color: "#151515",
                  }}
                />{" "}
                ETH <span className="span-eth">(Ethereum)</span>
              </footer>
              <div className="value">
                <p className="dynamic-amount">{amount}</p>
                {/* <input className="dynamic-amount"  placeholder="1"/> */}
              </div>
            </div>
          </blockquote>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
