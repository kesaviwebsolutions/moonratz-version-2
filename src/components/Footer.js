import React from 'react';
import "../Style.scss";
import "../App.scss";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <ul className="h2" data-list="inline">
        <li><a href="https://www.moonratz.com/dist/assets/img/whitepaper.pdf" title="Whitepaper" target="_blank">Whitepaper</a></li>
        <li>
          <Link to="/Contracts" title="Contracts">
            Contracts
          </Link>
        </li>
        <li>
          <Link to="/Faq" title="Faq">
            Faq
          </Link>
        </li>
        <li><a href="mailto:hi@moonratz.com?subject=MoonRatz%20Question&body=Describe%20your%20question:"
               title="hi@moonratz.com" target="_blank">hi@moonratz.com</a></li>
      </ul>

      <p className="trms">MoonRatz ©
        <script>
          document.write(new Date().getFullYear())
        </script>
        All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
