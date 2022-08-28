import Web3 from "web3/dist/web3.min.js"
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js"
import { swapAddress, swapABI, token, tokenABI, stakeNFT, stakeNFTABI, nfttoken, nftTokenABI, ratTrapToken } from "./Credentials"

let  web3;

var provider = new WalletConnectProvider({
    rpc: {
      56: "https://bsc-dataseed1.ninicoin.io",
      97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      1: "https://mainnet.infura.io/v3/"
      // ...
    },
    bridge: "https://bridge.walletconnect.org",
  });

export const WalletConnect = async () => {
    try {
      await provider.disconnect();
      const data = await provider.enable();
      web3 = new Web3(provider);
    } catch (error) {
      console.log(error);
    }
  };


export const DissconnectWallet = async () =>{
    await provider.disconnect();
    web3 = null;
}

export const MetaMasklogin = async () => {
    const data = await window.ethereum.enable();
    web3 = new Web3(window.ethereum);
    return data[0];
};

export const getUserAddress = async () => {
    try {
      const address = await web3.eth.getAccounts();
      return address[0];
    } catch (error) {
      console.log(error);
    }
};

export const getContract = async (abi,sAddress) => {
    try {
      const Contract = new web3.eth.Contract(abi,sAddress);
      return Contract;
    } catch (error) {
      console.log(error);
    }
};

export const towie = async (amount) => {
    try {
      const number = await web3.utils.toWei(amount.toString(), "ether");
      return number;
    } catch (error) {
      console.log(error);
    }
  };
  
export const GetChainId = async () => {
 try {
  const id = await web3.eth.getChainId();
  return id;
 } catch (error) {
  
 }
  };

export const SwapContract = async(amount)=>{
    const a = await towie(amount);
    const contract = new web3.eth.Contract(swapABI,swapAddress);
    const allow = await AllownceSwapByToken();
    
    if(Number(allow)>0){
      console.log(a)
        const data = await contract.methods.swap(token,a).send({from:await getUserAddress()});
        return data;
    }
    else{
      console.log(a)
        const data2 = await ApproveSwapByToken();
        if(data2.status){
          const data = await contract.methods.swap(token,a).send({from:await getUserAddress()});
          return data;
        }
    }
}
export const allswap = async()=>{
   try {
    const contract = new web3.eth.Contract(swapABI,swapAddress);
    const data = await contract.methods.totalSwapped().call();
    return data/10**18;
   } catch (error) {
    
   }
}

export const ApproveSwapByToken = async()=>{
  try {
    const contract = new web3.eth.Contract(tokenABI,token);
    const data = await contract.methods.approve(swapAddress, 115792089237316195423570985008687907853269984665640564039457584007913129639935n).send({from: await getUserAddress()});
    return data;
  } catch (error) {
    
  }
}

export const  Balanceoftoken = async()=>{
try {
  const contract = new web3.eth.Contract(tokenABI,token);
  const data = await contract.methods.balanceOf(await getUserAddress()).call();
  return data/10**18;
} catch (error) {
  
}
}


export const AllownceSwapByToken = async()=>{
   try {
    const contract = new web3.eth.Contract(tokenABI,token);
    const data = await contract.methods.allowance(await getUserAddress(), swapAddress).call()
    return data;
   } catch (error) {
    
   }
}

export const rate =async()=>{
 try {
  const contract = new web3.eth.Contract(swapABI,swapAddress);
  const data = await contract.methods.swapRate().call();
  return data;
 } catch (error) {
  
 }
}

export const getStakedNFTs = async()=>{
   try {
    const contract = new web3.eth.Contract(stakeNFTABI,stakeNFT);
    const data = await contract.methods.getTokensStaked(await getUserAddress()).call();
    return data;
   } catch (error) {
    
   }
}

export const Allyeild = async()=>{
  try {
    const contract = new web3.eth.Contract(stakeNFTABI,stakeNFT);
    const data = await contract.methods.getAllRewards(await getUserAddress()).call();
    return data/10**18;
  } catch (error) {
    
  }
}

export const ApproveNFTIds = async(ids)=>{
  try {
    const contract = new web3.eth.Contract(nftTokenABI,nfttoken);
    const data = await contract.methods.approve(stakeNFT,ids).send({from:await getUserAddress()})
    return data;
  } catch (error) {
    
  }
}
export const nftstakebyids = async(ids,eth)=>{
try {
  let a = 0
  var array = ids.split(',');
  if((5/eth)*(array.length)>(50/eth)){
    a = (50/eth);
  }
  else{
    a = (5/eth)*(array.length)
  }
  
  a = await towie(a)
  const contract = new web3.eth.Contract(stakeNFTABI,stakeNFT);
  const data = await contract.methods.stakeByIds(array).send({from:await getUserAddress(),value:a});
  return data;
} catch (error) {
  console.log(error)
}
}

export const Claimallrewards = async()=>{
    try {
      const contract = new web3.eth.Contract(stakeNFTABI,stakeNFT);
    const data = await contract.methods.claimAll().send({from:await getUserAddress()});
    return data;
    } catch (error) {
      
    }
}

export const unStake = async(eth)=>{
   try {
    const a = await towie((5/eth).toFixed(4))
    const contract = new web3.eth.Contract(stakeNFTABI,stakeNFT);
    const data = await contract.methods.unstakeAll().send({from:await getUserAddress(),value:a});
    return data;
   } catch (error) {
    
   }
}

export const unStakeid = async(id,eth)=>{
   try {
    const a = await towie((5/eth).toFixed(4))
    var array = id.split(',');
    const contract = new web3.eth.Contract(stakeNFTABI,stakeNFT);
    const data = await contract.methods.unstakeByIds(array).send({from:await getUserAddress(),value:a});
    return data;
   } catch (error) {
    
   }
}
export const totalNFTStaked = async()=>{
  try {
    const contract = new web3.eth.Contract(tokenABI,nfttoken);
    const data = await contract.methods.balanceOf(stakeNFT).call();
    console.log("NFtStake", data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const ApproveNFTALL = async(ids)=>{
  try {
    const contract = new web3.eth.Contract(nftTokenABI,nfttoken);
    const data = await contract.methods.setApprovalForAll(stakeNFT,true).send({from:await getUserAddress()})
    return data;
  } catch (error) {
    
  }
}
