// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-5 footer">
      <Container className="footer_in">
        <Row>
          <Col lg={4} className="text-center border-right">
            <div className="footer_left">
              Mailinizi yazınız, biz sizinle iletişime geçelim
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
              <Link to="/about">Hakkımızda</Link>
              <Link to="/rights">Kullanıcı Şartları</Link>
              <Link to="/vision">Vizyon-Misyon</Link>
            </div>
          </Col>

          <Col lg={4} className="text-center">
            <div className="social-media">
              <a href="https://www.linkedin.com/in/muhammedsametakgul/" className="linkedn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/drugBankVTYS" className="github">
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
