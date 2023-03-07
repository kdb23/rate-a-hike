import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ width: '1900px', height: '550px' }}
          //className="d-block w-100"
          itemId = {1}
          src="https://media.istockphoto.com/id/1135715079/photo/yellowstone-national-park-wyoming-usa.jpg?s=612x612&w=0&k=20&c=ZWAnLEFlZHLSZYo7JLx2bgvPEL29jOdIk0_MRdTreB0="
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: 500, height: 550 }}
          className="d-block w-100"
          src="https://www.sftravel.com/sites/default/files/styles/hero/public/2022-11/yosemite-falls.jpg?h=05d46cef&itok=3r7CsbMg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: 500, height: 550 }}
          className="d-block w-100"
          src="https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2020/04/RMNP_BearLake_BrendaDenmark-DT.jpg?resize=1024%2C655&ssl=1"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: 500, height: 550 }}
          className="d-block w-100"
          itemId = {1}
          src="https://www.doi.gov/sites/doi.gov/files/styles/social_media_1200x627/public/blog-post/thumbnail-images/glaciernpshanlin.jpg?itok=BlwMSQH5"
          alt="Fourth slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: 500, height: 550 }}
          className="d-block w-100"
          itemId = {1}
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/utahddm/_66d4d4c3-5ff8-416b-8ee4-fe462a5a40aa.2576c93235.jpg"
          alt="Fifth slide"
        />
       
      </Carousel.Item>
    </Carousel>
    
    
  );
}

export default Header;
//"https://cdn.cheapism.com/images/National_Park_Photos.2e16d0ba.fill-1440x605.png"