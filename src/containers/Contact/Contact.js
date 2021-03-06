import React from "react";

const contact = () => {
  return (
    <div>
      {/* start page title section */}
      <section className="wow fadeIn bg-light-gray padding-35px-tb page-title-small top-space">
          <div className="container">
              <div className="row equalize xs-equalize-auto">
                  <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 display-table">
                    <div className="display-table-cell vertical-align-middle text-left xs-text-center">
                      {/* start page title */}
                      <h1 className="alt-font text-extra-dark-gray font-weight-600 no-margin-bottom text-uppercase">Contact Us</h1>
                      {/* end page title */}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 display-table text-right xs-text-left xs-margin-10px-top">
                    <div className="display-table-cell vertical-align-middle breadcrumb text-small alt-font">
                      {/* start breadcrumb */}
                      <ul className="xs-text-center">
                          <li><a href="/" className="text-dark-gray"><i class="fa fa-home"></i></a></li>
                          <li className="text-dark-gray">Contact Us</li>
                      </ul>
                      {/* end breadcrumb */}
                    </div>
                  </div>
              </div>
          </div>
      </section>
      {/* end page title section */}

      {/* start feature box section */}
      <section class="wow fadeIn">
          <div class="container">
              <div class="row">
                  <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12 center-col margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                      <div class="alt-font text-medium-gray margin-10px-bottom text-uppercase text-small">Unlimited customization possibilities</div>
                      <h5 class="alt-font text-extra-dark-gray font-weight-600">Pixel perfect design and clear code delivered to your projects</h5>
                  </div>
              </div>
              <div class="row">
                  {/* start feature box item */}
                  <div class="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center">
                      <div class="margin-ten-bottom overflow-hidden image-hover-style-1 sm-margin-20px-bottom">
                          <a href="services-modern.html"><img src="http://placehold.it/750x500" alt=""/></a>
                      </div>
                      <a href="services-modern.html" class="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">E-Commerce Solutions</a>
                      <p class="width-95 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                      <a href="services-modern.html" class="text-uppercase alt-font text-extra-dark-gray font-weight-600 text-extra-small">View E-Commerce Solutions <i class="fa fa-long-arrow-right margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                  </div>
                  {/* end feature box item */}
                  {/* start feature box item */}
                  <div class="col-md-4 col-sm-4 col-xs-12 xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin xs-text-center" data-wow-delay="0.2s">
                      <div class="margin-ten-bottom overflow-hidden image-hover-style-1 sm-margin-20px-bottom">
                          <a href="services-modern.html"><img src="http://placehold.it/750x500" alt=""/></a>
                      </div>
                      <a href="services-modern.html" class="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">Web Development</a>
                      <p class="width-95 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                      <a href="services-modern.html" class="text-uppercase alt-font text-extra-dark-gray font-weight-600 text-extra-small">View Web Development <i class="fa fa-long-arrow-right margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                  </div>
                  {/* end feature box item */}
                  {/* start feature box item */}
                  <div class="col-md-4 col-sm-4 col-xs-12 wow fadeInUp last-paragraph-no-margin xs-text-center" data-wow-delay="0.4s">
                      <div class="margin-ten-bottom overflow-hidden image-hover-style-1 sm-margin-20px-bottom">
                          <a href="services-modern.html"><img src="http://placehold.it/750x500" alt=""/></a>
                      </div>
                      <a href="services-modern.html" class="alt-font margin-5px-bottom display-block text-extra-dark-gray font-weight-600 text-uppercase text-small">Marketing Strategy</a>
                      <p class="width-95 sm-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                      <a href="services-modern.html" class="text-uppercase alt-font text-extra-dark-gray font-weight-600 text-extra-small">View Marketing Strategy <i class="fa fa-long-arrow-right margin-5px-left text-deep-pink text-medium position-relative top-2" aria-hidden="true"></i></a>
                  </div>                    
                  {/* end feature box item */}
              </div>
          </div>
      </section>
      {/* end feature box section */}
    </div>
  );
}

export default contact;