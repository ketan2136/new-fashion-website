import React from "react";
import ReactPlayer from "react-player";

function BlogDetails() {
  return (
    <>
      <div className="video-container">
        <ReactPlayer
          url={"https://youtu.be/cLRztK1zE6s?si=YVm6BUW_4j86c6ob"}
          controls={true}
        />
      </div>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic blog_img_main set-bg"
                  //   data-setbg="img/blog/blog-1.jpg"
                  style={{
                    backgroundImage: 'url("img/blog/blogs-2.jpg")',
                  }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 16 February 2020
                  </span>
                  <h5>What Curling Irons Are The Best Ones</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-2.jpg"
                  style={{ background: 'url("img/blog/blogs-1.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 21 February 2020
                  </span>
                  <h5>Eternity Bands Do Last Forever</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-3.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 28 February 2020
                  </span>
                  <h5>The Health Benefits Of Sunglasses</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-4.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 16 February 2020
                  </span>
                  <h5>Aiming For Higher The Mastopexy</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-5.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 21 February 2020
                  </span>
                  <h5>Wedding Rings A Gift For A Lifetime</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-6.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 28 February 2020
                  </span>
                  <h5>The Different Methods Of Hair Removal</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-7.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 16 February 2020
                  </span>
                  <h5>Hoop Earrings A Style From History</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-8.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 21 February 2020
                  </span>
                  <h5>Lasik Eye Surgery Are You Ready</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-9.jpg"
                  style={{ background: 'url("img/blog/blog-2.jpg")' }}
                />
                <div className="blog__item__text">
                  <span>
                    <img src="img/icon/calendar.png" alt /> 28 February 2020
                  </span>
                  <h5>Lasik Eye Surgery Are You Ready</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
