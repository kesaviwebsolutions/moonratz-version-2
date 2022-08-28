import React,{useEffect, useState} from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import { getStakedNFTs, Allyeild, ApproveNFTIds, nftstakebyids, Claimallrewards, unStake, unStakeid,totalNFTStaked, ApproveNFTALL } from "../Web3/Web3";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const notify =(msg)=> toast.success(msg)

export default function StakeCard({user}) {

  const [stakednfts, setStakedNFTs] = useState([])
  const [rewards, setRewards] = useState(0);
  const [ids, setIDs] = useState(0);
  const [idstake, setIdstake] = useState()
  const [eth, setEth] = useState(0);
  const [stakenftbalance, setStakeNFTBalance] = useState(0);
  const [togle, setToggle] = useState(false)


  useEffect(()=>{
    const init =async()=>{
      const nfts = await getStakedNFTs();
      setStakedNFTs(nfts);
      const yeilds = await Allyeild();
      setRewards(yeilds)
      console.log("Reward", yeilds)
      axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((fun)=>{
        setEth(fun.data.ethereum.usd)
      }).catch((e)=>console.log(e))
    }
    init();

    setInterval(async()=>{
      const yeilds = await Allyeild();
      setRewards(yeilds)
      const bal = await totalNFTStaked();
      setStakeNFTBalance(bal)
    },3000)

  },[user])

  const nftsIDapprove = async()=>{
    const data = await ApproveNFTIds(ids);
    if(data.status){
      notify("Approved Successfully")
    }
  }

  const nftsIDapproveall = async()=>{
    const data = await ApproveNFTALL();
    if(data.status){
      notify("Approved Successfully")
    }
  }

  const stakenfts = async()=>{
    const data = await nftstakebyids(idstake, eth);
    if(data.status){
      notify("Staked Successfully")
      const nfts = await getStakedNFTs();
      setStakedNFTs(nfts);
    }
  }

  const Claimrewards =async()=>{
    const data = await Claimallrewards();
    if(data.status){
      notify("Claimed Successfully")
    }
  }

  const unstakenft =async()=>{
    const data = await unStake(eth);
    if(data.status){
      const nfts = await getStakedNFTs();
      setStakedNFTs(nfts);
      notify("Successfully")
    }
  }

  const unStakenftid =async(items)=>{
    const data = await unStakeid(items,eth);
    if(data.status){
      const nfts = await getStakedNFTs();
      setStakedNFTs(nfts);
      notify("Successfully")
    }
  }
 

  return (
    <section className="staking-ui">
      <div className="grid-x">
        <div className="staking-dtls large-7 large-offset-1">
          <ul className="table">
            <li className="info">
              <ul>
                <li>
                  <ul>
                    <li><h3>Moonratz Staking pool</h3></li>
                    <li><h3>{stakenftbalance}</h3></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>Earn $CHEDDA per 1 NFT</li>
                    <li>∼7 p/w</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="yield">
              <section>
                <h3>Chedda Yield</h3>
                <p className="h2">{isNaN(Number(rewards)) ? "Connect Wallet" : Number(rewards).toFixed(5)}</p>
                <button className={ user ? "btn span" :"btn span idle" } disabled={user ? false : true} onClick={()=>Claimrewards()}>Claim Chedda</button>
              </section>
            </li>

            <li className="pers-data">
              <ul>
                <li>
                  <ul>
                    <li className="h3">Staked</li>
                    <li className="h3">{stakednfts ? stakednfts.length : 0}</li>
                  </ul>
                 

                  <ul className="staked-span">
                    <li className="list-staked">
                      {stakednfts && stakednfts.map((items)=>
                        <button className="btn tiny" onClick={()=>unStakenftid(items)}>#{items} <span>✖</span></button>
                      )}
                    </li>
                    <li><button className="btn tiny" onClick={()=>unstakenft()}>Unstake All</button></li>
                  </ul>

                </li>
              </ul>
            </li>

            <li className="approve-form">
              <div className="h3">
                <span>Approve NFTs</span><small id="toggleSingle"><label htmlFor="toggle"><span>Individually</span>
                <input type="checkbox" onChange={(e)=>setToggle(!togle)} name="toggle" id="toggle"/>
                <span className="toggler"><span></span></span></label>
              </small>
              </div>
             {togle ? <div id="singleOption" className="input-group">
                <input placeholder="Single NFT: 562" type="number" className="input-area" value={ids} onChange={(e)=>setIDs(e.target.value)}/>
                <button className="btn small" onClick={()=>nftsIDapprove()}>Approve</button>
              </div> :
              <div className="full">
                <button className="btn small" onClick={()=>nftsIDapproveall()}>Approve all</button>
              </div>}
            </li>

            <li className="staking-form">
              <label className="h3" htmlFor="inputNumber">
                Stake Approved NFTs
                <span className="tooltip dark"><i className="dark" data-ico="info"></i>
                  <aside className="window">
                    <h4>BATCH STAKING</h4>
                    <p>For batch staking, approve all tokens you would like to stake and separate them by comma, max 30 NFTs per wallet</p>
                  </aside>
                </span>
              </label>

              <input placeholder="562,3524,2221,..." type="text" id="inputNumber" className="input-area" value={idstake} onChange={(e)=>setIdstake(e.target.value)}/>
            </li>
          </ul>

          <button id="stake" className="btn span" onClick={()=>stakenfts()}>Stake</button>
        </div>

        <div className="large-3" data-card>
          <h3>Staking rewards</h3>
          <p>The Chedda token is non-tradeable
            and is pegged to ETH with a stable
            price. The ratio of peg is 1:3000
            (ETH:CHEDDA) and will be
            maintained same at all times.</p>
          <br />

          <h3>Staking Requirements</h3>
          <p>At least 1 NFT and $50 worth of $RTP tokens(non deducted) in your wallet and fee of 0.003ETH per NFT</p>
        </div>
      </div>
      <Toaster/>
    </section>
  );
}
