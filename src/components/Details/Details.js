import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../home/Header/Header";

function Details() {
  let params = useParams();
  let productID = params.userID;

  let [chain, setChain] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Mohamed-Waled/Gigaland/main/public/HeaderData/AllChains.json"
      )
      .then((response) => {
        return response;
      })
      .then((jsondata) => {
        setChain(jsondata.data);
      });
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="nft-item-details" aria-label="section" className="sm-mt-0">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-5">
                <div className="item_info">
                  <div className="nft-image-wrapper">
                    <img
                      src="../../images/items/big-4.jpg"
                      className="image-autosize img-fluid img-rounded mb-sm-30"
                      alt=""
                    />
                  </div>
                  <div className="spacer-40"></div>
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingFive"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseFive"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseFive"
                        >
                          Description
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFive"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingFive"
                      >
                        <div className="accordion-body">
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Details
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          <div className="tab-1">
                            <h6>Owner</h6>
                            <div className="item_author">
                              <div className="author_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-10.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="author_list_info">
                                <a href="/">Stacy Long</a>
                              </div>
                            </div>
                            <div className="spacer-40"></div>
                            <h6>Properties</h6>
                            <div className="row gx-2">
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Background</h5>
                                  <h4>Yellowish Sky</h4>
                                  <span>85% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Eyes</h5>
                                  <h4>Purple Eyes</h4>
                                  <span>14% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Nose</h5>
                                  <h4>Small Nose</h4>
                                  <span>45% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Mouth</h5>
                                  <h4>Smile Red Lip</h4>
                                  <span>61% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Neck</h5>
                                  <h4>Pink Ribbon</h4>
                                  <span>27% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Hair</h5>
                                  <h4>Pink Short</h4>
                                  <span>35% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Accessories</h5>
                                  <h4>Heart Necklace</h4>
                                  <span>33% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Hat</h5>
                                  <h4>Cute Panda</h4>
                                  <span>62% have this trait</span>
                                </a>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="/" className="nft_attr">
                                  <h5>Clothes</h5>
                                  <h4>Casual Purple</h4>
                                  <span>78% have this trait</span>
                                </a>
                              </div>
                            </div>
                            <div className="spacer-30"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="spacer-40"></div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="item_info">
                  <h2>AnimeSailorClub #{productID}</h2>
                  <div className="item_info_counts">
                    <div className="item_info_type item">
                      Owned By Monica Lucas.
                    </div>
                    <div className="item_info_views item">
                      <i className="fa fa-eye"></i>250 Views
                    </div>
                    <div className="item_info_like item">
                      <i className="fa fa-heart"></i>18 Favorites
                    </div>
                  </div>
                  <div
                    className="accordion "
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingFour"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseFour"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseFour"
                        >
                          Auctions ends in 0h 0m 0s
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFour"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingFour"
                      >
                        <div className="accordion-body">
                          <div className="de_tab tab_simple">
                            <h6>Price</h6>
                            <div className="nft-item-price">
                              <img src="../../images/misc/ethereum.svg" alt="" />
                              <span>0.059</span>($253.67)
                            </div>
                            <a
                              href="/"
                              className="btn-main btn-lg"
                              data-bs-toggle="modal"
                              data-bs-target="#buy_now"
                            >
                              Buy Now
                            </a>
                            &nbsp;
                            <a
                              href="/"
                              className="btn-main btn-lg btn-light"
                              data-bs-toggle="modal"
                              data-bs-target="#place_a_bid"
                            >
                              Place a Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-40"></div>
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Bids
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <div className="tab-2">
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-1.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid accepted <b>0.005 ETH</b>
                                <span>
                                  by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-2.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.005 ETH</b>
                                <span>
                                  by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-3.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.004 ETH</b>
                                <span>
                                  by <b>Nicholas Daniels</b> at 6/13/2021, 5:03
                                  AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-4.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.003 ETH</b>
                                <span>
                                  by <b>Lori Hart</b> at 6/12/2021, 12:57 AM
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          History
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <div className="tab-3">
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-5.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.005 ETH</b>
                                <span>
                                  by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-1.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid accepted <b>0.005 ETH</b>
                                <span>
                                  by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-2.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.005 ETH</b>
                                <span>
                                  by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-3.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.004 ETH</b>
                                <span>
                                  by <b>Nicholas Daniels</b> at 6/13/2021, 5:03
                                  AM
                                </span>
                              </div>
                            </div>
                            <div className="p_list">
                              <div className="p_list_pp">
                                <a href="/">
                                  <img
                                    className="lazy"
                                    src="../../images/author/author-4.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check"></i>
                                </a>
                              </div>
                              <div className="p_list_info">
                                Bid <b>0.003 ETH</b>
                                <span>
                                  by <b>Lori Hart</b> at 6/12/2021, 12:57 AM
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-40"></div>
                </div>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-md-12">
                <div className="item_info">
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingSix"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseSix"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseSix"
                        >
                          Item Activity
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseSix"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingSix"
                      >
                        <div className="accordion-body">
                          <table class="table table-dark">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th> <td>Mark</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th> <td>Jacob</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th> <td>Larry</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="spacer-40"></div>
                </div>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-md-12">
                <div className="item_info">
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingSeven"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseSeven"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseSeven"
                        >
                          More From This Collection
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseSeven"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingSeven"
                      >
                        <div className="accordion-body">
                          <div className="row wow fadeIn">
                            <div className="col-lg-12"></div>
                            <div
                              id="items-carousel"
                              className="owl-carousel wow fadeIn"
                            >
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  {/* <div
                                    className="de_countdown"
                                    data-year="2022"
                                    data-month="9"
                                    data-day="6"
                                    data-hour="8"
                                  ></div> */}
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Monica Lucas"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-1.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items-alt/static-8.jpg"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>Delectus Antiendotoxin</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.08 ETH<span>1/20</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>50</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Stacy Long"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-10.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items-alt/static-10.jpg"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>Surfusion Underfalconer</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.06 ETH<span>1/22</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>80</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  {/* <div
                                    className="de_countdown id-color"
                                    data-year="2022"
                                    data-month="9"
                                    data-day="12"
                                    data-hour="8"
                                  ></div> */}
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Ida Chapman"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-11.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items-alt/static-9.jpg"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>Buccocervical #203</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.05 ETH<span>1/11</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>97</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Fred Ryan"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-12.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items-alt/static-7.jpg"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>AnimeSailorClub #304</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.02 ETH<span>1/15</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>73</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Franklin Greer"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-9.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items/anim-4.webp"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>The Truth</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.06 ETH<span>1/20</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>26</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  {/* <div
                                    className="de_countdown id-color"
                                    data-year="2022"
                                    data-month="9"
                                    data-day="15"
                                    data-hour="10"
                                  ></div> */}
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Mamie Barnett"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-2.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items-alt/static-5.jpg"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>Running Puppets</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.03 ETH<span>1/24</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>45</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Nicholas Daniels"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-3.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items-alt/static-6.jpg"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>Green Frogman</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.09 ETH<span>1/25</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>76</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-item">
                                <div className="nft__item style-2 item">
                                  {/* <div
                                    className="de_countdown id-color"
                                    data-year="2022"
                                    data-month="9"
                                    data-day="8"
                                    data-hour="8"
                                  ></div> */}
                                  <div className="author_list_pp">
                                    <a
                                      href="/"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Creator: Gigaland"
                                    >
                                      <img
                                        className="lazy"
                                        src="images/author/author-4.jpg"
                                        alt=""
                                      />
                                      <i className="fa fa-check"></i>
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                      <div className="nft__item_buttons">
                                        <button onclick="location.href='/collection'">
                                          Buy Now
                                        </button>
                                        <div className="nft__item_share">
                                          <h4>Share</h4>
                                          <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-facebook fa-lg"></i>
                                          </a>
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <i className="fa fa-twitter fa-lg"></i>
                                          </a>
                                          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                            <i className="fa fa-envelope fa-lg"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="/collection">
                                      <div className="d-placeholder"></div>
                                      <img
                                        src="images/items/anim-5.webp"
                                        className="lazy nft__item_preview"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="/collection">
                                      <h4>Loop Donut</h4>
                                    </a>
                                    <div className="nft__item_click">
                                      <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                      0.09 ETH<span>1/14</span>
                                    </div>
                                    <div className="nft__item_action">
                                      <a href="/">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart"></i>
                                      <span>94</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="modal fade"
        id="buy_now"
        tabIndex="-1"
        aria-labelledby="buy_now"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered de-modal">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="p-3 form-border">
                <h3>Checkout</h3>
                You are about to purchase a <b>Red Ocean</b> from
                <b>Monica Lucas</b>
                <div className="spacer-single"></div>
                <h6>
                  Enter quantity.
                  <span className="id-color-2">10 available</span>
                </h6>
                <input
                  type="text"
                  name="buy_now_qty"
                  id="buy_now_qty"
                  className="form-control"
                  value="1"
                />
                <div className="spacer-single"></div>
                <div className="de-flex">
                  <div>Your balance</div>
                  <div>
                    <b>10.67856 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>Service fee 2.5%</div>
                  <div>
                    <b>0.00325 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>You will pay</div>
                  <div>
                    <b>0.013325 ETH</b>
                  </div>
                </div>
                <div className="spacer-single"></div>
                <a
                  href="03_grey-wallet.html"
                  target="_blank"
                  className="btn-main btn-fullwidth"
                >
                  Add funds
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="place_a_bid"
        tabIndex="-1"
        aria-labelledby="place_a_bid"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered de-modal">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="p-3 form-border">
                <h3>Place a Bid</h3>
                You are about to place a bid for <b>Red Ocean</b> from
                <b>Monica Lucas</b>
                <div className="spacer-single"></div>
                <h6>Your bid (ETH)</h6>
                <input
                  type="text"
                  name="bid_value"
                  id="bid_value"
                  className="form-control"
                  placeholder="Enter bid"
                />
                <div className="spacer-single"></div>
                <h6>
                  Enter quantity.
                  <span className="id-color-2">10 available</span>
                </h6>
                <input
                  type="text"
                  name="bid_qty"
                  id="bid_qty"
                  className="form-control"
                  value="1"
                />
                <div className="spacer-single"></div>
                <div className="de-flex">
                  <div>Your bidding balance</div>
                  <div>
                    <b>0.013325 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>Your balance</div>
                  <div>
                    <b>10.67856 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>Service fee 2.5%</div>
                  <div>
                    <b>0.00325 ETH</b>
                  </div>
                </div>
                <div className="de-flex">
                  <div>You will pay</div>
                  <div>
                    <b>0.013325 ETH</b>
                  </div>
                </div>
                <div className="spacer-single"></div>
                <a
                  href="03_grey-wallet.html"
                  target="_blank"
                  className="btn-main btn-fullwidth"
                >
                  Place a bid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/" id="back-to-top"></a>
    </div>
  );
}

export default Details;
