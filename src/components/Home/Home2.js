import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* DSA Journey Section */}
        <Row style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              My <strong className="purple">DSA </strong> Journey
            </h1>
            <Row style={{ justifyContent: "center" }}>
              <Col md={10} style={{ paddingBottom: "20px" }}>
                <div className="leetcode-stats">
                  {/* LeetCode Stats Card */}
                  <img
                    src="https://leetcard.jacoblin.cool/neelimas?theme=dark&font=Ubuntu&ext=contest"
                    alt="LeetCode Stats"
                    className="img-fluid"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(0, 217, 255, 0.3)",
                      boxShadow: "0 4px 8px rgba(0, 217, 255, 0.2)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 217, 255, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 217, 255, 0.2)";
                    }}
                  />
                </div>
              </Col>
            </Row>
            
            <Row style={{ justifyContent: "center", paddingTop: "20px", gap: "15px" }}>
              <Col md={12} style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                <a
                  href="https://leetcode.com/u/neelimas/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 30px",
                    background: "rgba(8, 145, 178, 0.4)",
                    border: "1px solid rgba(0, 217, 255, 0.5)",
                    borderRadius: "8px",
                    color: "#00d9ff",
                    fontSize: "1.1em",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(6, 182, 212, 0.6)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 217, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(8, 145, 178, 0.4)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <SiLeetcode style={{ fontSize: "1.5em" }} />
                  View My LeetCode
                </a>
                <a
                  href="https://codolio.com/profile/Neelima"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 30px",
                    background: "rgba(8, 145, 178, 0.4)",
                    border: "1px solid rgba(0, 217, 255, 0.5)",
                    borderRadius: "8px",
                    color: "#00d9ff",
                    fontSize: "1.1em",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(6, 182, 212, 0.6)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 217, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(8, 145, 178, 0.4)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: "1.5em" }}>🏆</span>
                  View My Codolio
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/neelima-singh07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/neelima-singh-481294318/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
