import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <img src="assest/images/logo.png" alt="" />
                <span>Lodge</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="/Home">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/jewellery">
                        Jewellery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="/login">
                    Login

            </a>
            
</li>
</ul>
                </div>
                <div className="quote_btn-container">
                  <a href="">
                    <img src="assest/images/cart.png" alt="" />
                    <div className="cart_number"></div>
                  </a>
                  <form className="form-inline">
                    <button
                      className="btn my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    ></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section class=" slider_section position-relative">
      <div class="design-box">
        <img src="assest/images/design-1.png" alt=""/>
      </div>
      <div class="slider_number-container d-none d-md-block">
        <div class="number-box">
          <span>
            01
          </span>
          <hr/>
          <span class="jwel">
            J <br/>
            e <br/>
            w <br/>
            e <br/>
            l <br/>
            l <br/>
            e <br/>
            r <br/>
            y
          </span>
          <hr/>
          <span>
            02
          </span>
        </div>
      </div>
      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr/>
                    </h2>
                    <h1>
                      Jewellery
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                      aptent taciti sociosqu ad litora torquent per conubia nostra
                    </p>
                    <div>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    { 
                      <img src="assest/images/hero.jpg" alt=""/> } 
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr/>
                    </h2>
                    <h1>
                      Jewellery
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                      aptent taciti sociosqu ad litora torquent per conubia nostra
                    </p>
                    <div>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="assest/images/ring.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr/>
                    </h2>
                    <h1>
                      Jewellery
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                      aptent taciti sociosqu ad litora torquent per conubia nostra
                    </p>
                    <div>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="assest/images/ring.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    
      </div>
      <div class="item_section layout_padding2">
    <div class="container">
      <div class="item_container">
        <div class="box">
          <div class="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div class="img-box">
            <img src="assest/images/earrings.png" alt=""/>
          </div>
          <div class="name">
            <h5>
              Bracelet
            </h5>
          </div>
        </div>
        <div class="box">
          <div class="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div class="img-box">
            <img src="assest/images/multiplejewellery.png" alt=""/>
          </div>
          <div class="name">
            <h5>
              Ring
            </h5>
          </div>
        </div>
        <div class="box">
          <div class="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div class="img-box">
            <img src="assest/images/nacklace.png" alt=""/>
          </div>
          <div class="name">
            <h5>
              Earings
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  </>
  )
}
export default Header;
       