import React from "react";
import leftCheeze from "../images/pizza-slice.jpg";
import sock from "../images/sock.jpg";
import smallRat1 from "../images/nft/small-rat1.jpg";
import smallRat2 from "../images/nft/small-rat2.jpg";
import smallRat3 from "../images/nft/small-rat3.jpg";
import smallRat4 from "../images/nft/small-rat4.jpg";
import smallRat5 from "../images/nft/small-rat5.jpg";
import nftHero from "../images/nft-hero.png";
import roadmapSmall from "../images/roadmap-small.jpg";
import ecoRat from "../images/eco-rat.jpg";
import rattrap from "../images/icons/rattrap.png";
import staknft from "../images/icons/staknft.png";
import lottery from "../images/icons/lottery.png";
import game from "../images/icons/game.png";
import tokenomics from "../images/title/tokenomics.jpg";
import rattrapIcon from "../images/icons/rattrap.jpg";
import rattrapHero from "../images/rattrap-hero.png";
import tail from "../images/tail.jpg";
import fallingTokens from "../images/falling-tokens.png";
import one from "../images/icons/one.png";
import two from "../images/icons/two.png";
import three from "../images/icons/three.png";
import lotteryTitle from "../images/title/lottery.jpg";
import lotteryPromo from "../images/lottery-promo.jpg";
import gameHero from "../images/game-hero.png";
import { Link } from "react-router-dom";

// app.js
import $ from "jquery";

$(window).on('load', function(){
  $('body').removeClass('preload');
});

// mobile menu
$('#mtoggle').on("click", function(e) {
  checker();
});

function checker() {
  var checkBox = document.getElementById("menu-toggle");
  if (checkBox.checked == true){
    $('body').removeClass('noscroll');
    document.getElementById("menu-toggle").checked = true;
  } else {
    $('body').addClass('noscroll');
    document.getElementById("menu-toggle").checked = false;
  }
}

$('.key-nav').on("click", function(e) {
  document.getElementById("menu-toggle").checked = false;
  $('body').removeClass('noscroll');
});

// nft animation

var pause = false;
//save blocks
var block1 = $('.bg-block1');
//variable for counter
var k = 0;

//interval function works only when pause is false
setInterval(function () {
  if (!pause) {
    var $this1 = block1.eq(k);
    block1.removeClass('active').eq(k).addClass('active');
    $this1.addClass('active');
    //increase k every 1.5 sec
    k++;
    //if k more then number of blocks on page
    if (k >= block1.length) {
      //rewrite variable to start over
      k = 0;
    }
  }
  //every 1.5 sec
}, 200);

// moving stripes
$(window).on("load resize scroll", function() {
  $('#stripes').each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    $(this)
      .find("#stripe-1 .bg-move")
      .css({ backgroundPosition: leftPosition });
    $(this)
      .find("#stripe-2 .bg-move")
      .css({ backgroundPosition: -leftPosition });
  });
});

// scrolling bar
function mediaSizeForNav() {
  var new_scroll_position = 0;
  var last_scroll_position;
  var navbar = document.getElementById('nav');

  window.addEventListener('scroll', function (e) {
    last_scroll_position = window.scrollY;

    if (new_scroll_position < last_scroll_position && last_scroll_position > 58) {
      navbar.classList.remove("slide-down");
      navbar.classList.add("slide-up");
    } else {
      navbar.classList.remove("slide-up");
      navbar.classList.add("slide-down");
    }

    new_scroll_position = last_scroll_position;
  });
}

mediaSizeForNav();
window.addEventListener('resize', mediaSizeForNav, false);

// submenu
// $(window).click(function() {
//   $("#submenu-toggle").prop('checked', false);
// });

// $('#options').click(function(event){
//   event.stopPropagation();
// });

// card navigation
$(function() {
  $('#cardsList article').on("mouseover", function(e){
    $('#cardsList article').removeClass('active');
    $(this).addClass('active');
  })
});

export default function Home({ user }) {
  return (
    <main>
      <section className="intro home">
        <div className="grid-x align-center">
          <figure className="float-el">
            <img className="pizza" src={leftCheeze} alt="moonratz" />
            <img className="sock" src={sock} alt="moonratz" />
          </figure>

          <h1 className="text-center">
            <small className="cheese-col">
              Welcome to MoonRatz, a project like no other where you can...
            </small>
            Collect
            <span className="title-ratz select-item">
              <span className="bg-block1 active wood">
                <img src={smallRat1} alt="NFTs" />
              </span>
              <span className="bg-block1 nightsky">
                <img src={smallRat2} alt="NFTs" />
              </span>
              <span className="bg-block1 blood">
                <img src={smallRat3} alt="NFTs" />
              </span>
              <span className="bg-block1 minty">
                <img src={smallRat4} alt="NFTs" />
              </span>
              <span className="bg-block1 clay">
                <img src={smallRat5} alt="NFTs" />
              </span>
            </span>{" "}
            stake
            <br />
            Earn <i className="title-cheese"></i> win Lottery
            <br />
            and play <i className="title-cash"></i> games
          </h1>
        </div>
      </section>

      <section className="nft-breakdwn">
        <div className="grid-x justify align-middle">
          <div className="large-4 mx-400">
            <ul data-list="no-disc">
              <li className="h2">5k Collection</li>
              <li className="h2">+100 Traits</li>
              <li className="h2">3x 1/1</li>
            </ul>

            <div className="grid-x">
              <div className="auto">
                <p>
                  We just some Ratz trying to moon and get that Chedda. Get a
                  Rat from{" "}
                  <a
                    href="https://opensea.io/collection/moonratzwtf"
                    title="MoonRatz on OpenSea"
                    target="_blank"
                  >
                    OpenSea
                  </a>{" "}
                  and join the revolution to start earning passive income!
                </p>
              </div>
              <div className="shrink">
                <a
                  className="circle-large minty"
                  href="https://opensea.io/collection/moonratzwtf"
                  title="MoonRatz on OpenSea"
                  target="_blank"
                >
                  <i data-ico="os"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="frame minty">
            <img src={nftHero} alt="NFT Collection" />
          </div>

          <div className="large-3 large-offset-1 mx-300 self-align-bottom">
            <p>
              MoonRatz is not just dope art. Check out our Rat Map to find more
              about our whole ecosystem filled with utilities and perks for our
              holders.
            </p>
            <figure id="toggleMap">
              <div>
                <img src={roadmapSmall} alt="MoonRatz Road Map" />
              </div>
              <aside></aside>
            </figure>
          </div>
        </div>
      </section>

      <section className="nft-slider expanded">
        <aside id="stripes">
          <figure id="stripe-1">
            <span className="bg-move"></span>
          </figure>
          <figure id="stripe-2">
            <span className="bg-move"></span>
          </figure>
        </aside>
      </section>

      <section className="eco">
        <div className="grid-x">
          <div className="large-5 large-offset-1 mx-400">
            <h2>
              <small>Ecosystem</small>
              Utilities that bring you passive income and good vibes
            </h2>
            <figure>
              <img src={ecoRat} alt="Ecosystem" />
            </figure>
            <a
              className="btn"
              href="https://opensea.io/collection/moonratzwtf"
              title="MoonRatz on OpenSea"
              target="_blank"
            >
              View Collection
            </a>
          </div>

          <div className="large-6">
            <div id="cardsList">
              <article className="active" data-card>
                <figure className="wood">
                  <img src={rattrap} />
                </figure>
                <h3>RatTrap is a Tradeable token</h3>
                <p>
                  Part of the MoonRatz ecosystem with 10M total supply and 10%
                  transaction tax with 3% DAO, 5% marketing wallet and 2%
                  liquidity.
                </p>
                <a
                  className="btn span"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15&use=V2&chain=mainnet"
                  target="_blank"
                  title="Start Trading"
                >
                  Start Trading
                </a>
              </article>

              <article data-card>
                <figure className="nightsky">
                  <img src={staknft} />
                </figure>
                <h3>Staking moonratz For Chedda Token</h3>
                <p>
                  The Chedda token is a mintable and expanding supply token
                  non-tradeable and is pegged to ETH with a stable price.
                </p>
                <Link className="btn span" to="/Earn" title="Earn">
                  Earn
                </Link>
              </article>

              <article data-card>
                <figure className="blood">
                  <img src={lottery} />
                </figure>
                <h3>MoonRatz Lottery, Try your luck</h3>
                <p>
                  Play weekly NFT lotteries to stand a chance to win the cheeze
                  pot! It's a first come first serve offer and limited to 100
                  tickets per prize pot.
                </p>
                <a
                  className="btn span"
                  href="lottery.html"
                  title="Enter Lottery"
                >
                  Enter Lottery
                </a>
              </article>

              <article data-card>
                <figure className="minty">
                  <img src={game} />
                </figure>
                <h3>Ratz, we've got a mission for you</h3>
                <p>
                  Ratz are coming, and they're coming strong. Don't miss out on
                  this amazing opportunity to earn some Chedda while playing the
                  game.
                </p>
                <a
                  className="btn span"
                  href="https://game.moonratz.com/"
                  title="Play Game"
                >
                  Play Game
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="heading-cheese expanded">
        <img src={tokenomics} alt="RatTrap Tokenomics" />
      </section>

      <section className="rattrap-breakdwn">
        <div className="grid-x align-middle">
          <div className="large-4 mx-300">
            <figure className="circle-huge">
              <img src={rattrapIcon} alt="RatTrap Token" />
            </figure>
            <ul data-list="no-disc">
              <li className="h2">
                10M
                <br />
                total supply
              </li>
              <li className="h2">
                10%
                <br />
                transaction tax
              </li>
            </ul>

            <p>
              3% going to DAO, 5% to marketing wallet and 2% is for liquidity.
            </p>

            <a
              className="btn"
              href="https://app.uniswap.org/#/swap?outputCurrency=0xa9fdae1f91c5e1dc72b555af5cf80b21f96cbb15&use=V2&chain=mainnet"
              title="Uniswap"
              target="_blank"
            >
              Buy Tokens
            </a>
          </div>

          <div className="frame lavander"></div>

          <figure className="side-img">
            <img src={rattrapHero} alt="RatTrap Breakdown" />
          </figure>
        </div>
      </section>

      <section className="rwd-guide">
        <figure>
          <img src={tail} alt="Chedda Tokens Reward guide" />
        </figure>

        <div className="grid-x align-center">
          <div className="large-10">
            <div className="grid-x align-middle">
              <div className="desc">
                <img src={fallingTokens} alt="Chedda Tokens Reward guide" />
                <h2>Chedda Tokens Reward guide</h2>
                <p>
                  The Chedda token is non-tradeable and is pegged to ETH with a
                  stable price. The ratio of peg is 1:3000 (ETH:CHEDDA) and will
                  be maintained same at all times.
                </p>
              </div>

              <div className="steps">
                <div className="grid-x" data-card="hor">
                  <div className="shrink">
                    <figure className="circle-large blood one">
                      <img src={one} alt="Stake Moonratz" />
                    </figure>
                  </div>
                  <div className="auto">
                    <h3>Hold NFTs & RatTrap</h3>
                    <p>
                      As a holder of RatTrap tokens and our NFTs, you will earn
                      Chedda tokens as staking rewards on our platform.
                    </p>
                  </div>
                </div>

                <div className="grid-x" data-card="hor">
                  <div className="shrink">
                    <figure className="circle-large minty two">
                      <img src={two} alt="Stake Moonratz" />
                    </figure>
                  </div>
                  <div className="auto">
                    <h3>Stake Moonratz</h3>
                    <p>
                      Get 1 token every 24 hrs for staking NFTs, i.e. 30 Chedda
                      tokens p/m.
                    </p>
                  </div>

                  <Link className="btn" to="/Earn" title="Stake MoonRatz">
                    Stake MoonRatz
                  </Link>
                </div>

                <div className="grid-x" data-card="hor">
                  <div className="shrink">
                    <figure className="circle-large lavander">
                      <img src={three} alt="Rewards in ChEdda" />
                    </figure>
                  </div>
                  <div className="auto">
                    <h3>Rewards in ChEdda</h3>
                    <p>Convert Chedda tokens to ETH from the swap section.</p>
                  </div>

                  <Link className="btn" to="/Swap" title="Swap chedda">
                    Swap chedda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="heading-cheese expanded reduced">
        <img src={lotteryTitle} alt="Enter Lottery with Cedda" />
      </section>

      <section className="lottery-promo expanded reduced">
        <img
          className="reduced"
          src={lotteryPromo}
          alt="Enter Lottery with Cedda"
        />
        <a className="btn-circle" href="lottery.html" title="Get Tickets">
          Get Tickets
        </a>
      </section>

      <section className="game-breakdwn">
        <div className="grid-x align-middle">
          <div className="large-4 mx-300">
            <h2>The first Rat in the Moon</h2>

            <p>
              Destroy enemies along the way, and you could earn a spot on the
              leaderboard for a chance to win some Chedda.
            </p>

            <a
              className="btn"
              href="https://game.moonratz.com/"
              title="Play Game"
            >
              Play Now
            </a>
          </div>

          <div className="frame minty"></div>

          <figure className="side-img">
            <img src={gameHero} alt="P2E Game" />
          </figure>
        </div>
      </section>
    </main>
  );
}
