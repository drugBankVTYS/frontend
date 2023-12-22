// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 footer">
      <Container className="footer_in">
        <Row>
         
          <Col lg={4} className="text-center border-right">
            <div className="footer_left">
              Mailinizi yazınız, biz sizinle
              iletişime geçelim
            </div>
           
            <form action="#">
              <div className="input-box">
                <input
                  className="email"
                  type="text"
                  placeholder="medsoft@gmail.com"
                />
                <input type="submit" value="Gönder" className="button" />
              </div>
            </form>
          </Col>

          
          <Col lg={4} className="text-center border-right" id="about">
            <h3 id="about_header">Daha fazla bilgi</h3>
            <div id="about_section">
              <a href="#">Hakkımızda</a> 
              <a href="#">Kullanıcı Şartları</a>
              <a href="#">Vizyon-Misyon</a>
            </div>
          </Col>

          <Col lg={4} className="text-center">
            <div className="social-media">
              <a href="your-linkedin-profile" className="linkedn">
                <FaLinkedin />
              </a>
              <a href="your-github-profile" className="github">
                <FaGithub />
              </a>
              <a href="mailto:your-email@example.com" className="mail">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row>
          <Col className="text-center mt-3" id="copy">
            <p>&copy; 2023 Olympus Team</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
