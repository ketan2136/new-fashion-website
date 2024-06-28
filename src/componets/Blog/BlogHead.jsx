import React from "react";

function BlogHead() {
  return (
    <>
      {/* <h1>😎😎😎😎😎</h1> */}
      <section
        className="breadcrumb-blog set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
        style={{
          backgroundImage: 'url("img/multi-colored-tShirt.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHead;
