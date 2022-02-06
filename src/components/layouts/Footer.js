import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer bg-dark'>
      <div className='footer-widget-area'>
        <Container>
          <Row>
            <Col sm>
              <div className='widget widget-blog widget_text'>
                <div className='textwidget'>
                  <h4>Martin's Movies</h4>
                  <p className='nomargin'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, ducimus, atque. Praesentium suscipit provident
                    explicabo dignissimos nostrum numquam deserunt earum
                    accusantium et fugit.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className='widget widget-blog widget_text'>
                <div className='textwidget'>
                  <h4>Twitter Feed</h4>
                  <div className='tp_recent_tweets'>
                    <ul>
                      <li>
                        <span>
                          Movies Review Online
                          <a
                            href='#!'
                            title='Search #furniture'
                            target='_blank'
                          >
                            #furniture
                          </a>{' '}
                          <br />
                          <a
                            href='#!'
                            title='Search #woocommerce'
                            target='_blank'
                          >
                            #woocommerce
                          </a>
                          <br />
                          <a
                            href='#!'
                            title='Search #ecommerce'
                            target='_blank'
                          >
                            #ecommerce
                          </a>
                          <br />
                          <a
                            href='#!'
                            title='Search #elementor'
                            target='_blank'
                          >
                            #elementor
                          </a>
                          …<br />
                          <a href='#!' target='_blank'>
                            https://t.co/hZzbkri8X5
                          </a>
                        </span>{' '}
                        <br />
                        <a className='twitter_time' target='_blank' href='#!'>
                          <small style={{fontStyle: 'italic'}}>yesterday</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className='widget widget_nav_menu'>
                <h4>Useful Links</h4>
                <div className='menu-footer'>
                  <ul>
                    <li>
                      <a href='#!'>About Movify</a>
                    </li>
                    <li>
                      <a href='#!'>Blog</a>
                    </li>
                    <li>
                      <a href='#!'>Contact Us</a>
                    </li>
                    <li>
                      <a href='#!'>Testimonials</a>
                    </li>
                    <li>
                      <a href='#!'>Error 404</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm>
              <h4>Instagram</h4>
              <div className='menu-footer'>
                <ul>
                  <li>
                    <a href='#!'>Instagram has returned invalid data.</a>
                  </li>
                  <li>
                    <a href='#!'>Follow Us!</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer-copyright-area' style={{ padding: '30px 0' }}>
        <Container>
          <Row>
            <div className='d-flex'>
              <div className='links'>
                <ul id='menu-footer-menu' className='list-inline'>
                  <li className='list-inline-item'>
                    <a href='#!'>Privacy & Cookies</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#!'>Terms & Conditions</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#!'>Legal Disclaimer</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#!'>Community</a>
                  </li>
                </ul>
              </div>
              <div className='copyright'>
                Copyright {new Date().getFullYear()}. All rights reserved{' '}
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
