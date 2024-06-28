// import React from "react";

// function Categories() {
//   return (
//     <section className="categories spad">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3">
//             <div className="categories__text">
//               <h2>
//                 Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
//                 Accessories
//               </h2>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="categories__hot__deal">
//               <img src="img/product-sale.png" alt />
//               <div className="hot__deal__sticker">
//                 <span>Sale Of</span>
//                 <h5>$29.99</h5>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 offset-lg-1">
//             <div className="categories__deal__countdown">
//               <span>Deal Of The Week</span>
//               <h2>Multi-pocket Chest Bag Black</h2>
//               <div
//                 className="categories__deal__countdown__timer"
//                 id="countdown"
//               >
//                 <div className="cd-item">
//                   <span>3</span>
//                   <p>Days</p>
//                 </div>
//                 <div className="cd-item">
//                   <span>1</span>
//                   <p>Hours</p>
//                 </div>
//                 <div className="cd-item">
//                   <span>50</span>
//                   <p>Minutes</p>
//                 </div>
//                 <div className="cd-item">
//                   <span>18</span>
//                   <p>Seconds</p>
//                 </div>
//               </div>
//               <a href="#" className="primary-btn">
//                 Shop now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Categories;

import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Link, Element } from "react-scroll";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { getDiscount } from "../../Redux/action/discount.action";
import DisvountTiming from "../DiscoungTiming/DisvountTiming";

function Categories() {
  
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getDiscount());
  // }, []);

  const discountVal = useSelector((state) => state.discount);
  console.log("discountVal", discountVal.data);
  
  
  return (
    <section className="categories spad">
      <Tabs>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="categories__text">
                <TabList>
                  <Tab>
                    <button className="sell_Atags"> Clothings Hot</button>
                  </Tab>{" "}
                  <br />
                  <Tab>
                    <button className="sell_Amain">Shoe Collection</button>
                  </Tab>{" "}
                  <br />
                  <Tab>
                    <button className="sell_Atags"> Accessories</button>
                  </Tab>
                </TabList>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories__hot__deal">
                <TabPanel>
                  <img src="img/product-sale.png" alt="Sale Product" />
                </TabPanel>
                <TabPanel>
                  <img
                    src="img/shoesBackgroundremove2.png"
                    alt="Sale Product"
                  />
                </TabPanel>
                <TabPanel>
                  <img src="img/shoesBackgroundremove.png" alt="Sale Product" />
                </TabPanel>
                <div className="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>$29.99</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
               <DisvountTiming />
                <a href="#" className="primary-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default Categories;

// // App.js
// import React from "react";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import { Link, Element } from "react-scroll";
// import "react-tabs/style/react-tabs.css";

// const Tabs2 = () => {
//   return (
//     <div>
//       <Tabs>
//         <TabList>
//           <Tab>
//             <Link to="tab1" smooth={true} duration={500}>
//               Tab 1
//             </Link>
//           </Tab>
//           <Tab>
//             <Link to="tab2" smooth={true} duration={500}>
//               Tab 2
//             </Link>
//           </Tab>
//           <Tab>
//             <Link to="tab3" smooth={true} duration={500}>
//               Tab 3
//             </Link>
//           </Tab>
//         </TabList>

//         <TabPanel>
//           <Element name="tab1">
//             <h2>Content for Tab 1</h2>
//             <p>Details for Tab 1...</p>
//           </Element>
//         </TabPanel>
//         <TabPanel>
//           <Element name="tab2">
//             <h2>Content for Tab 2</h2>
//             <p>Details for Tab 2...</p>
//           </Element>
//         </TabPanel>
//         <TabPanel>
//           <Element name="tab3">
//             <h2>Content for Tab 3</h2>
//             <p>Details for Tab 3...</p>
//           </Element>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default Tabs2;
