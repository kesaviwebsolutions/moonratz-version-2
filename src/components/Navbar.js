// import React from "react";
// import opensea from "./images/opensea-lavanda.svg";
// import discord from "./images/discord_icon.svg";
// import telegram from "./images/telegram-dark.svg";
// import twitter from "./images/twitter-dark.svg";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div>
//       <div id="navbar2">
//         <nav
//           className="navbar navbar-expand-lg "
//           style={{ backgroundColor: "#D3D1A6" }}
//         >
//           <div
//             className="container-fluid"
//             style={{ backgroundColor: "#D3D1A6" }}
//           >
//             <a className="navbar-brand mx-5" href="/" rel="noreferrer">
//               Moonratz
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//               style={{ borderLeft: "2px solid #000", height: "100px" }}
//             >
//               <ul className="navbar-nav mx-auto mb-4 mb-lg-0">
//                 <li className="nav-item ">
//                   <a
//                     className="nav-link active mx-5"
//                     aria-current="page"
//                     href="nft"
//                     style={{ fontWeight: "700" }}
//                   >
//                     BACK TO MAIN WEBSITE
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link mx-5"
//                     href="/staking"
//                     style={{ fontWeight: "700", color: "#000" }}
//                   >
//                     SATKING
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link mx-5"
//                     to="/swap"
//                     style={{ fontWeight: "700", color: "#000" }}
//                   >
//                     SWAP
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link mx-5"
//                     href="lottery"
//                     style={{ fontWeight: "700", color: "#000" }}
//                   >
//                     LOTTERY
//                   </a>
//                 </li>
//               </ul>
//               <form
//                 className="d-flex"
//                 role="search"
//                 style={{
//                   borderLeft: "2px solid #000",
//                   padding: "2px",
//                   marginLeft: "-25px",
//                 }}
//               >
//                 <ul className="ul d-flex my-2">
//                   <li className="icons mx-2 ">
//                     <img src={opensea} alt="" />
//                   </li>
//                   <li className="icons mx-2">
//                     <img src={discord} alt="" />
//                   </li>
//                   <li className="icons mx-2">
//                     <img src={telegram} alt="" />
//                   </li>
//                   <li className="icons mx-2">
//                     <img src={twitter} alt="" />
//                   </li>
//                 </ul>
//                 <aside className="melting-nav"> </aside>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }
