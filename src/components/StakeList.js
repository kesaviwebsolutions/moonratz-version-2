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
        <input id="stakeNft" name="stakingChoice" type="radio" defaultChecked />
        <input id="stakeRtp" name="stakingChoice" type="radio" />
        <input id="stakeLp" name="stakingChoice" type="radio" />

        <ul className="staking-list large-10 large-offset-1">
          <li>
            <ul>
              <li>
                <label htmlFor="stakeNft"></label>
                <ul>
                  <li>
                    <figure>
                      <i className="circle" data-ico="nft"></i>
                      <i className="circle" data-ico="chedda"></i>
                    </figure>
                    <h3>
                      <small>Earn $CHEDDA</small>
                      Stake NFT
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Earned</small>
                      {isNaN(Number(rewards)) ? "0" : Number(rewards).toFixed(5)}
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Staked</small>
                      {stakednfts ? stakednfts.length : 0}
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>APY</small>
                      1200%
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Total Staked</small>
                      {stakenftbalance}
                    </h3>
                  </li>
                  <li>
                    <span className="tooltip"><i className="dark" data-ico="info"></i>
                      <aside className="window">
                        <h4>Info</h4>
                        <p>Rates shown are estimates, and fluctuate according to many different factors, including token
                          prices, trading volume, liquidity, amount staked, and more.</p>
                      </aside>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="approve-form">
                    <section className="borderless">
                      <div className="h3">
                        <span>1.Approve NFTs</span><small id="toggleSingle"><label
                        htmlFor="toggle"><span>Individually</span>
                        <input type="checkbox" onChange={(e) => setToggle(!togle)} name="toggle" id="toggle"/>
                        <span className="toggler"><span></span></span></label></small>
                      </div>
                      {togle ? <div id="singleOption" className="input-group">
                          <input placeholder="Single NFT: 562" type="number" className="input-area" value={ids}
                                 onChange={(e) => setIDs(e.target.value)}/>
                          <button className="btn small" onClick={() => nftsIDapprove()}>Approve</button>
                        </div> :
                        <div>
                          <button className="btn small" onClick={() => nftsIDapproveall()}>Approve all</button>
                        </div>}
                    </section>

                    <section className="borderless">
                      <label className="h3" htmlFor="inputNumber">
                        <span>2.Stake NFTs</span> <small>Fee: 0.003ETH</small>
                      </label>

                      <div className="input-group">
                        <input placeholder="562,3524,2221,..." type="text" id="inputNumber" className="input-area" value={idstake} onChange={(e)=>setIdstake(e.target.value)}/>
                        <button id="stake" className="btn small" onClick={()=>stakenfts()}>Stake</button>
                      </div>
                    </section>
                  </li>

                  <li>
                    <section className="staked-span">
                      {stakednfts && stakednfts.map((items)=>
                        <button className="btn tiny" onClick={()=>unStakenftid(items)}>#{items} <span>✖</span></button>
                      )}
                      <button className="btn tiny" onClick={()=>unstakenft()}>Unstake All</button>
                    </section>
                    <footer>
                      <h3>
                        <small>Earned ∼{isNaN(Number(rewards)) ? "0" : Number(rewards/3000).toFixed(4)} ETH</small>
                        {isNaN(Number(rewards)) ? "0" : Number(rewards).toFixed(4)} CHEDDA
                      </h3>
                      <button className={ user ? "btn small" :"btn small idle" } disabled={user ? false : true} onClick={()=>Claimrewards()}>Harvest</button>
                    </footer>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <label htmlFor="stakeRtp"></label>
                <ul>
                  <li>
                    <figure>
                      <i className="circle" data-ico="rtp"></i>
                      <i className="circle" data-ico="rtp"></i>
                    </figure>
                    <h3>
                      <small>Earn $RTP</small>
                      Stake RTP
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Earned</small>
                      2,100,100
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Staked</small>
                      20,100,100
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>APY</small>
                      46%
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Total Staked</small>
                      999,999,999
                    </h3>
                  </li>
                  <li>
                    <span className="tooltip"><i className="dark" data-ico="info"></i>
                      <aside className="window">
                        <h4>Info</h4>
                        <p>Rates shown are estimates, and fluctuate according to many different factors, including token
                          prices, trading volume, liquidity, amount staked, and more.</p>
                      </aside>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <section>
                      <h3>
                        <small>Staked</small>
                        20,100,100 RTP
                      </h3>
                      <div className="button-group combo">
                        <button className="btn small"><i data-name="-"></i></button>
                        <button className="btn small"><i data-name="+"></i></button>
                      </div>
                      {/*<button className="btn small hide">Enable</button>*/}
                    </section>
                    <footer>
                      <span>4% unstaking fee if withdrawn within 72h</span>
                    </footer>
                  </li>

                  <li>
                    <section>
                      <h3>
                        <small>Earned</small>
                        20,100,100 RTP
                      </h3>

                      <button className="btn small">Harvest</button>
                    </section>
                    <footer>
                      <span>Harvest Lockup</span>
                      <span>12 Hour(s)</span>
                    </footer>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <label htmlFor="stakeLp"></label>
                <ul>
                  <li>
                    <figure>
                      <i className="circle" data-ico="eth"></i>
                      <i className="circle" data-ico="rtp"></i>
                    </figure>
                    <h3>
                      <small>Earn $RTP</small>
                      Farm RTP
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Earned</small>
                      2,100,100
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Multiplier</small>
                      2.5x
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>APR</small>
                      46%
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <small>Liquidity</small>
                      999,999,999
                    </h3>
                  </li>
                  <li>
                    <span className="tooltip"><i className="dark" data-ico="info"></i>
                      <aside className="window">
                        <h4>Info</h4>
                        <p>Rates shown are estimates, and fluctuate according to many different factors, including token
                          prices, trading volume, liquidity, amount staked, and more.</p>
                      </aside>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <section>
                      <h3>
                        <small>Staked ETH-RTP</small>
                        20,100,100 RTP
                      </h3>
                      <div className="button-group combo">
                        <button className="btn small"><i data-name="-"></i></button>
                        <button className="btn small"><i data-name="+"></i></button>
                      </div>
                      {/*<button className="btn small">Enable</button>*/}
                    </section>
                    <footer>
                      <span>0.6 ETH 2,100,100 RTP</span>
                      <span>∼800 USD</span>
                    </footer>
                  </li>

                  <li>
                    <section>
                      <h3>
                        <small>Earned</small>
                        20,100,100 RTP
                      </h3>

                      <button className="btn small">Harvest</button>
                    </section>
                    <footer>
                      <span>Harvest Lockup</span>
                      <span>12 Hour(s)</span>
                    </footer>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Toaster/>
    </section>
  );
}
