import React from 'react';
import './Home.css';
import video from '../../img/home3.png';
import microwave from '../../img/microwave-range.jpg';
import ImageCarousel from '../../compo/ImageCarousel';
import coc from '../../img/coc.jpg'


function Home() {
  const data = [
    { id: 1, name: "Clip Data 1", img: microwave },
    { id: 2, name: "Clip Data 2", img: microwave },
    { id: 3, name: "Clip Data 3", img: microwave },
    { id: 4, name: "Clip Data 4", img: microwave },
  ];

  return (
    <>
      {/* <---  scroll      ----> */}
      <div>
        <section>
          <ImageCarousel/>
        </section>

        {/* <---  strip      ----> */}
        <section className='strip'>
          <h3>Your home is where your heart is.</h3>
          <div className='para'>
            <p>
              We make every corner of the home come alive with the infinite magic of Plastic, infusing its colors and aesthetics in daily life. At Joyo, we fill your lives with happiness through products that touch your everyday life.
            </p>
          </div>
        </section>

        {/* <---  about pooja      ----> */}
        <section className='about_section'>
          <img src={video} alt="Video" />
          <div>
            <h1>About Pooja</h1>
            <p>
              Pooja began in the year 1984, with just one injection  moulding machine and one single mould. His emphasis on quality and innovation quickly won Joyo the trust of thousands of customers.
              Today we have 100 injection moulding machines with ranging from 50 tons to 450 tons. We now have 3 facilities that are equipped with cutting-edge technology and machinery with international 
              standards audited by Walmart and Disney. Our extensive line manufacturing brings to the customer a wide range of products like Bathroom Accessories, Kitchenware, Utility products, Containers etc.
            </p>
            <button><a href="#">Read More</a></button>
          </div>
        </section>

        {/* <---  Why pooja      ----> */}
        <section className='why_section'>
          <div className='why_main'>
            <div className='item_two'>
              <h1>Why Pooja?</h1>
              <div className='item'>
                <ul>
                  <li>A wide range of products which gives numerous options to choose from.</li>
                  <li>Aesthetically perfect products bring vibrant colors and beauty to your life.</li>
                  <li>Un-compromised quality made with latest technology give you a dependable product which brings with it peace of mind cost effectively.</li>
                  <li>Our wide network of distributors ensures the timely delivery of our products.</li>
                  <li>Our dedicated team of experienced people provides us the strength to realize our mission and vision because at JOYO we believe “Great vision without great people is irrelevant”.</li>
                </ul>
                <img src={coc}></img>
                {/* <img className='iim'></img> */}
              </div>
            </div>
          </div>
        </section>

        {/* A Wide Range Of Products */}
        <section className='products'>
          <h1>A Wide Range Of Products</h1>
          <p>~ some of our best sellers ~</p>
          
          <div className="card-container">
            {data.map((item) => (
              <div key={item.id} className="card">
                <div className="card-image">
                  <img src={item.img} alt={item.name} />
                  <div className="card-text">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className='uper_footer'>
            <div>
              <h2>WANT TO KNOW MORE ABOUT US?</h2>
              <p>Contact us now to know the benefits of our products</p>
            </div>
            <div className='footer_button'>
              <button><a href="#">CONTACT US</a></button>
              <h3>Already our distributor? Login here</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
