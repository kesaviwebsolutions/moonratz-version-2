import "./App.scss";
import Navbar from "./components/Navbar";
import Swap from "./components/pages/Swap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Staking from "./components/pages/Staking";
import Earn from "./components/pages/Earn";
import Lottery from "./components/pages/Lottery";
import Faq from "./components/pages/Faq";
import Contracts from "./components/pages/Contracts";
import Nav from "./Nav";
import "./Style.scss";
import { useState, useEffect } from "react";
import {
  GetChainId,
  WalletConnect,
  MetaMasklogin,
  DissconnectWallet,
  getUserAddress,
} from "./Web3/Web3";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState();
  const [acount, setAccount] = useState("");

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await Metamask();
      }
      const id = await GetChainId();
      console.log(id);
      if (Number(id) != 1) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, []);

  const WalletC = async () => {
    await WalletConnect();
    const add = await getUserAddress();
    setAccount(add);
    setUser(add);
  };

  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "wallet");
    setAccount(add);
    setUser(add);
  };
  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);
    setUser(undefined);
    window.localStorage.removeItem("wallet");
  };

  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setUser(accounts[0]);
      setAccount(accounts[0]);
    });
  } catch (error) {}

  try {
    window.ethereum.on("chainChanged", function (accounts) {
      window.location.reload();
    });
  } catch (error) {}

  return (
    <Router>
      <Nav
        WalletC={WalletC}
        Metamask={Metamask}
        account={acount}
        Dissconnect={Dissconnect}
      />
      <Routes>
        <Route path="/" exact element={<Home user={user} />} />
        <Route path="/Stake" exact element={<Staking user={user}/>}/>
        <Route path="/swap" exact element={<Swap user={user} />} />
        <Route path="/earn" exact element={<Earn user={user} />} />
        <Route path="/lottery" exact element={<Lottery user={user} />} />
        <Route path="/faq" exact element={<Faq user={user} />} />
        <Route path="/contracts" exact element={<Contracts user={user} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
