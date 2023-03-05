import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <div className='Footer'>
      <Container>
        <Row>
            <Col xl={3} lg={6} md={4} sm={12}>
                  <h5>يمكنك الاشتراك من هنا</h5>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  
                  <button className='bt1'>اشتراك</button>
                  <input type="gmail"/>
            </Col>
            <Col xl={3} lg={6} md={4} sm={12}>
                  <h5>خدماتنا</h5>
                  <p>تصميم وبرمجة المواقع الالكترونية <span>></span></p>
                  <p>تطبيقات الهواتف المحموله  <span>></span></p>
                  <p>برمجه انظمة الشركات والمؤسسات <span>></span></p>
                  <p>خدمات الارشفه والسيو <span>></span></p>
                  <p>حجز الاستضافات والنطاقات  <span>></span></p>
                  <p>انظمة جاهزة في مجال الادارة <span>></span></p>
            </Col>
            <Col xl={3} lg={6} md={4} sm={12}>
            <h5>لينكات</h5>
                  <p>   الرئسيه <span>></span></p>
                  <p>  من نحن  <span>></span></p>
                  <p>   الخدمات <span>></span></p>
            </Col>
            <Col xl={3} lg={6} md={14} sm={12}>
            <h5>بيور سوفت</h5>
                  <p>   شبين الكوم- المنوفيه-مصر <span>></span></p>
                  <p>   التليفون 01114515251245212  <span>></span></p>
                  <p>   pureSoft@gmail.com : البريد الالكتروني <span>></span></p>
            </Col>
        </Row>
      </Container>


      <section className='footer2'>
        <Container>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <div className='icoo'>
                    <ul>
  <li>
    <a href="#">
      <i><img src='facebook-5221.png' className='icon'/></i>    </a>
      
  </li>
  <li>
    <a href="#"><i><img src='twitter-circle-blue-logo-16617.png' className='icon'/></i></a>
  </li>
  <li>
    <a href="#"><i><img src='instagram-logo-8869 (1).png' className='icon'/></i></a></li>
 
</ul>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                  <div className='fo'>
                  <p>
                  
                
                     حقوق النشر <span style={{color:"black",fontWeight:"500"}}> بيور سوفت</span> كل الحقوق محفوظة مصمم بواسطه 
                     <br/>
                     <span style={{color:"blue"}} >Pure Soft</span>
                    </p>
                  </div>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Footer
