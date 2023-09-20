import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        height: "2.5rem",
      }}
    >
      <div className="Container">
        <div className="Row">
          <div>
            <img src="/images/map.jpg" alt="" />
          </div>
          <div>
            <h4 style={{ color: "yellowgreen" }}>About Us</h4>
            <p style={{ color: "white" }}>
              "Govi Saviya" is an agricultural farm that has been there in the
              industry for a considerable time period. It is well reputed,
              highly demanding agricultural farm having a significant customer
              base.
            </p>
          </div>
          <div>
            <h4 style={{ color: "yellowgreen" }}>Contact Us</h4>
            <div>
              <ul className="ftr-links-sub">
                <li>
                  <img
                    width="14"
                    height="14"
                    alt=""
                    src="/images/i1.png"
                    className="photo"
                  />

                  <span>+94 112567876</span>
                </li>
                <li>
                  <img
                    width="24"
                    height="24"
                    alt=""
                    src="/images/i2.png"
                    className="photo"
                  />
                  <span>govisaviya@gmail.com</span>
                </li>

                <li>
                  <img
                    width="24"
                    height="24"
                    alt=""
                    src="/images/i3.png"
                    className="photo"
                  />
                  <span>No.200,Kiesly Road,Colombo 10,Sri Lanka.</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="ftr-hdr" style={{ color: "yellowgreen" }}>
              Follow Us
            </h4>
            <div>
              <ul className="ftr-links-sub">
                <li>
                  <img
                    width="14"
                    height="14"
                    alt=""
                    src="/images/fb.jpg"
                    className="photo"
                  />
                  <span>govisaviya.facebook.com</span>
                </li>
                <li>
                  <img
                    width="24"
                    height="24"
                    alt=""
                    src="/images/insta.jpg"
                    className="photo"
                  />
                  <span>govisaviya.facebook.instergram.com</span>
                </li>

                <li>
                  <img
                    width="24"
                    height="24"
                    alt=""
                    src="/images/linkin.jpg"
                    className="photo"
                  />
                  <span>govisaviya.linkedin.com</span>
                </li>

                <li>
                  <img
                    width="24"
                    height="24"
                    alt=""
                    src="/images/tweet.jpg"
                    className="photo"
                  />
                  <span>govisaviyatwitter.com.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h6>
          <p style={{ color: "white" }}>
            Copyright &copy; 2020 Govisaviya Farm Management System.
          </p>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
