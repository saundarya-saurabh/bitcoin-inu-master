import React from 'react';

export default function TokenSale() {
  return (
    <section id="token_sale" class="token_sale_area section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="section-title-white">TokeNomics & Details </h2>
          <span></span>
          {/* <p class="section-title-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p> */}
        </div>
        <div class="row token_mb">
          <div
            class="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="pre_sale_area">
              <div class="single_presale">
                <h5>Current Price</h5>
                <p>0.0</p>
              </div>
              <div class="single_presale">
                <h5>Holders</h5>
                <p>0</p>
              </div>
              <div class="single_presale">
                <h5>Supply </h5>
                <p>0</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <div class="pre_sale_area">
              <div class="single_presale brright">
                <h5>Market Cap</h5>
                <p>$ 0</p>
              </div>
              <div class="single_presale brright">
                <h5>Total Token Sold</h5>
                <p>0 (0%)</p>
              </div>
              <div class="single_presale brright">
                <h5>Transactions </h5>
                <p>0000 +</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="buy-icons">
              <div class="ca-starts-in">
                <h3>
                  Token will start on June <br />
                  Fifteen 2021
                </h3>
                <div class="timer-area">
                  <div data-countdown="2021/6/15"></div>
                </div>
              </div>
              {/* <h4>Pre Sale Starting In</h4> */}
              <a href="https://exchange.pancakeswap.finance/#/swap" class="btn_one">
                Buy token now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
