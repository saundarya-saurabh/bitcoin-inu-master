import React from 'react';

export default function About() {
  return (
    <section id="about" class="about_us section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="about-text">
              <h2>
              BINU is community-driven, every hodler are their own boss.
              </h2>
              <p>
              Decentralisation makes this token prestigious when you purchase a BINU token, you are contributing towards a step of advancement. The developers would keep enhancing the project without owning it. 
              </p>
              <p>
              Are you ready to invest in the next best exchange? Take a fight towards victory, grab your token now.
              </p>
              <div class="about_btn">
                <a
                  class="video_btn"
                  href="https://www.youtube.com/watch?v=7f9eHmJy86s"
                  target="_blank"
                >
                  <i class="fa fa-play"></i>
                  <span class="video-title">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="about-img">
              <img src="/img/about2.png" class="item-bounce img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
