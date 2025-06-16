import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest, FaWhatsapp, FaTelegramPlane, FaSnapchatGhost, FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import image from './dress_banner.jpg';
import image1 from './dress1.webp';
import image2 from './jewellery_banner.avif';
import image3 from './men1.jpg';
import image4 from './shoes_banner.avif';
import image5 from './skirt image.jpg';

import { Carousel } from 'react-bootstrap';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { DiVim } from "react-icons/di";


function App() {
  const products = [
    {
      id: 1,
      title: 'Boat Neck Front Button Black Vest',
      price: 849,
      oldPrice: 1598,
      img: image1,

    },
    {
      id: 2,
      title: 'Striped Button-Up Top with Collar',
      price: 649,
      oldPrice: 1198,
      img: image3,
    },
    {
      id: 3,
      title: 'V-neck Solid Button Vest & Pants',
      price: 1449,
      oldPrice: 2098,
      img: image5,
    },
    {
      id: 2,
      title: 'Striped Button-Up Top with Collar',
      price: 649,
      oldPrice: 1198,
      img: image3,
    },
    {
      id: 3,
      title: 'V-neck Solid Button Vest & Pants',
      price: 1449,
      oldPrice: 2098,
      img: image1,
    },
    {
      id: 2,
      title: 'Striped Button-Up Top with Collar',
      price: 649,
      oldPrice: 1198,
      img: image5,
    },

  ];
  return (
    <div className="body">

      <div style={{ fontSize: "14px" }} className=" d-flex justify-content-between align-items-center px-3 py-1 bg-dark text-white">
        <div className=" d-flex gap-3">
          <div className="hover-effect"><FaFacebookF /></div>
         <div className="hover-effect"> <FaYoutube /></div>
         <div className="hover-effect"> <FaInstagram /></div>
          <div className="hover-effect"><FaPinterest /></div>
         <div className="hover-effect"> <FaWhatsapp /></div>
         <div className="hover-effect"> <FaTelegramPlane /></div>
         <div className="hover-effect"><FaSnapchatGhost /></div>
        </div>
        <div style={{ fontSize: "14px" }} className="fw-bold hover-effect">1 Million+ Squad, Outfits For Every Mood!</div>
        <button className="btn btn-outline-light btn-sm " style={{ fontSize: "12px", fontFamily: "monospace" }}>DOWNLOAD APP</button>
      </div>


      <div className=" d-flex justify-content-between align-items-center px-4 py-2 bg-light ">
        <div className="fw-bolder fs-1">littlebox</div>
        <div className=" d-flex gap-3 align-items-center">
          <div className="d-flex gap-1 hover-effect">
            <span style={{ fontSize: "14px" }}>Account</span>
            <FaUser />
          </div>
          <div className="d-flex gap-1 hover-effect">
            <span style={{ fontSize: "14px" }}>Search</span>
            <FaSearch />
          </div>
          <div className="d-flex gap-1 hover-effect">
            <span style={{ fontSize: "14px" }}>Cart</span>
            <FaShoppingCart />
          </div>
          <div className=" d-flex align-items-center gap-2 hover-effect">
            <div className="d-flex gap-1">
              <span style={{ fontSize: "14px" }}>Wishlist</span>

              <FaHeart /><sub style={{ fontSize: "14px" }}>0</sub>
            </div>

          </div>
        </div>
      </div>


      <div className="nav d-flex justify-content-center gap-5 px-3 bg-dark text-white py-4 " style={{ fontSize: "13px", fontFamily: "cursive" }}>
        <span className="nav-hover">Pick A Mood
          <div className="dropdown border-1 ">
            <div className="row">
              <div className="col-3">
                <h2 className="text-muted">PICK A MODE</h2>
                <div className="text-white">
                  <div>Feeling cozy</div>
                  <div>Feeling cozy</div>
                  <div>Feeling cozy</div>
                  
                </div>
              </div>

            </div>
          <div className="text-white hover-effect pb-2">Men's New Arrivals</div>
        <div className="text-white pb-2 hover-effect">Clothing</div>
        </div>
        </span>
        <span className="nav-hover">Men's <sup className="text-danger">New</sup>
        <div className="dropdown border-1 ">
          <div className="text-white hover-effect pb-2">Men's New Arrivals</div>
        <div className="text-white pb-2 hover-effect">Clothing</div>
        </div>
        
        </span>
        <span className="nav-hover ">Clothing
          </span>
        <span className="nav-hover">Footwear</span>
        <span className="nav-hover">Plus-Curve</span>
        <span className="nav-hover">New Arrivals</span>
        <span className="nav-hover">Hot Deals</span>
        <span className="nav-hover">Next Day Dispatch</span>
        <span className="nav-hover">Influencer Program</span>
        <span className="nav-hover">Support</span>
        <span className="nav-hover">Track Your Order</span>
      </div>
      {/* <div className="main-nav">
      <ul className="nav-links">
        <li className="nav-item">Pick A Mood</li>
        <li className="nav-item">Men's <sup className="text-danger">New</sup></li>
        <li className="nav-item dropdown">
          Clothing
          <div className="mega-menu">
            <Container>
              <Row>
                <Col>
                  <h6>All Clothing</h6>
                  <p className="section">Dresses</p>
                  <ul>
                    <li>All Dresses</li>
                    <li>Cocktail Dresses</li>
                    <li>Bodycon Dresses</li>
                    <li>Midi Dresses</li>
                    <li>Velvet Dresses</li>
                    <li>Maxi Dresses</li>
                    <li>Mini Dresses</li>
                    <li>Floral Dresses</li>
                    <li>Backless Dresses</li>
                  </ul>
                  <p className="section">Intimates</p>
                  <ul>
                    <li>Lingerie</li>
                    <li>Athleisure</li>
                  </ul>
                </Col>
                <Col>
                  <h6>Skirts</h6>
                  <p className="section">Tops</p>
                  <ul>
                    <li>All Tops</li>
                    <li>Crop Tops</li>
                    <li>Tank Tops</li>
                    <li>Corset Tops</li>
                    <li>Floral Tops</li>
                    <li>Halter Neck</li>
                    <li>Sleeveless Tops</li>
                    <li>Off-Shoulder</li>
                    <li>Full Sleeve Tops</li>
                  </ul>
                </Col>
                <Col>
                  <h6>T-Shirts</h6>
                  <p className="section">Trousers</p>
                  <ul>
                    <li>All Trousers</li>
                    <li>Cargo Pants</li>
                    <li>Baggy Pants</li>
                    <li>Korean Pants</li>
                    <li>Wide Leg Pants</li>
                  </ul>
                </Col>
                <Col>
                  <h6>Matching Sets</h6>
                  <ul>
                    <li>All Matching Sets</li>
                    <li>Top and Trouser Set</li>
                    <li>Top and Skirt Set</li>
                    <li>Blazer and Dress Set</li>
                  </ul>
                  <h6>Combos</h6>
                  <ul>
                    <li>All Combos</li>
                    <li>Top Combos</li>
                    <li>Trouser Combos</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </li>
        <li className="nav-item">Footwear</li>
        <li className="nav-item">Plus-Curve</li>
        <li className="nav-item">New Arrivals</li>
        <li className="nav-item">Hot Deals</li>
        <li className="nav-item">Next Day Dispatch</li>
        <li className="nav-item">Influencer Program</li>
        <li className="nav-item">Support</li>
        <li className="nav-item">Track Your Order</li>
      </ul>
    </div> */}

      <div className="container-fluid mt-1">
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              height="2px"
              src={image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={image2}
             
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>More promo or product highlight.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              
              src={image4}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Wrap-up slide text or image.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className="container-fluid text-center mt-4">

        <h5 className="fw-bold">FLAT 10% OFF DEAL OF THE DAY</h5>
        <a href="#" className="view-all">VIEW ALL</a>
        <Row className="justify-content-center mt-3">
          {products.map((products) => (
            <Col xs={10} sm={6} md={4} lg={3} key={products.id} className="mb-4">
              <Card className="img-hover">
                <img variant="top" src={products.img} className="Card-img" height="200px" />
                <Card.Body>
                  <Card.Title >{products.title}</Card.Title>
                  <Card.Text>
                    <span className="fw-bold">Rs. {products.price}.00</span>{' '}
                    <span className="text-muted text-decoration-line-through">Rs. {products.oldPrice}.00</span>{' '}
                    <span className="text-danger">Sale</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </div>
      <div className="container-fluid mt-3">
        <img src={image} alt="banner" className="img-fluid" width="100%" />

      </div>
      <div className="container mt-4 pb-5 border p-2">
        <div className="fs-3 text-dark text-center">COLLECTIONS</div>
        <div className="d-flex flex-wrap gap-4  mt-4 ms-4 fs-6 text-black text-center align-item-center ">
          <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
          <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
          <div className="img-hover" >
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
         <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
          <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
         <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
         <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
         <div className="img-hover">
            <img src={image5} className="img-fluid" height="130px" width="140px" />
            <div > SKIRT</div>
          </div>
          


        </div>
      </div>
      <div className="container-fluid mt-4">
        <img src={image} alt="banner" className="img-fluid" width="100%" />

      </div>
      <div className="bg-dark fs-5 mt-3 pb-5 container-fluid">
        <div className="row">
          <div className="col-7 mt-5 px-5">
            <div className="row">
              <div className="col-6 ">
                <div className="text-warning fs-4 fw-bold pb-3 hover-effect">Shop</div>
                <div className="text-white " style={{ fontFamily: "cursive", fontSize: "14px" }}>
                  <div className="hover-effect">New Arrivals</div>
                  <div className="hover-effect">Tops</div>
                  <div className="hover-effect">Flats & Flatforms</div>
                  <div className="hover-effect">T-Shirts</div>
                  <div className="hover-effect">Trousers</div>
                  <div className="hover-effect">Oxfords & Boots</div>
                  <div className="hover-effect">Heels & Platforms</div>
                  <div className="hover-effect">Matching Sets</div>
                  <div className="hover-effect">Best Selling</div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-warning fs-4 fw-bold pb-3 hover-effect">
                  Support
                </div>
                <div className="text-white " style={{ fontFamily: "cursive", fontSize: "14px" }}>
                  <div className="hover-effect">Exchanges</div>
                  <div className="hover-effect">Exchange Policy</div>
                  <div className="hover-effect">Privacy Policy</div>
                  <div className="hover-effect">FAQ</div>
                  <div className="hover-effect">Support</div>
                  <div className="hover-effect">Shipping</div>
                  <div className="hover-effect">Heels & Platforms</div>
                  <div className="hover-effect">Matching Sets</div>
                  <div className="hover-effect">Best Selling</div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-5 mt-5 px-5">
            <div className="text-white mt-1 hover-effect" style={{ fontSize: "15px" }}> © Littlebox Clone India 2025</div>
            <div className="text-white fw-bolder mt-3 hover-effect" style={{ fontSize: "32px" }}>Littlebox Clone </div>

            <div className=" d-flex gap-3 justify-content-between align-items-center mt-3 text-white" style={{ fontSize: "20px" }}>
              <div className="hover-effect"><FaFacebookF /></div>
         <div className="hover-effect"> <FaYoutube /></div>
         <div className="hover-effect"> <FaInstagram /></div>
          <div className="hover-effect"><FaPinterest /></div>
         <div className="hover-effect"> <FaWhatsapp /></div>
         <div className="hover-effect"> <FaTelegramPlane /></div>
         <div className="hover-effect"><FaSnapchatGhost /></div>
        
            </div>


          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white mt-1 pb-5 ">
        <div className="row px-5 py-2">
          <div className="col-8 mt-3 px-0 hover-effect">
            © 2025 Good Tribe Private Limited. All rights Reserved.
          </div>
          <div className="col-4">
            <div className=" d-flex gap-3 px-0 mt-3 text-white" style={{ fontSize: "13px" }}>
              <div className="hover-effect">Visa</div>
              <div className="hover-effect">HDFC</div>
              <div className="hover-effect">paytm</div>
              <div className="hover-effect">RuPay</div>
              <div className="hover-effect">SBI</div>
            </div>

          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
