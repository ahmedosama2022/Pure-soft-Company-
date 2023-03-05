import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./الريسيه.css"
import {BiReceipt} from "react-icons/bi"
import {FaRegHospital} from "react-icons/fa"
import {FaAward} from "react-icons/fa"
import {BiUser} from "react-icons/bi"
import CountUp from 'react-countup';
const الريسيه = () => {
  return (
    <div>
      <img className='main' src='https://pure-soft.com/uploads/2022_04_06_12_45_13_byor-soft.jpg'/>
      <section className='main1'>
        <Container>
            <Row>
                <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='div1'>
                        <BiReceipt className='icon1'/>
                        <h4>الاهداف</h4>
                        <p> ان نكون الافضل دائما في مجال التكنولوجيا</p>
                    </div>
                </Col>
                <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='div1'>
                        <BiReceipt className='icon1'/>
                        <h4>الرساله</h4>
                        <p> رسالتنا نحن نقدم افضل جوده  بسعر اقل ان نكون الافضل</p>
                    </div>
                </Col>
                <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='div1'>
                        <BiReceipt className='icon1'/>
                        <h4>الرؤيه</h4>
                        <p>رؤيتنا انننا الافضل في مجال التكنولوجيا</p>
                    </div>
                </Col>
                <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='div12'>
                        
                        <h2>لماذا نحن؟</h2>
                        <p>لاننا اقضل شركه في تطوير وتصميم الحلول البرمجيه المتكامله لاداره وتطوير اعمالك ورفع القدره التنظيميه والاداريه ومراعاه التكامل والجوده وتقديم افضل خدمات الدعم الفني لعملائنا </p>
                        <button className='btn1'>اقرا المزيد </button>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
   <section className='sec2'>
    <Container>
        <Row>
            <Col xl={7} lg={4} md={6} sm={12}>
            <div className='mainsec2' id='عن الشركه'>
                <h3>ماذا عنا ؟</h3>
                <p>اخذنا على انفسنا عهداً ان نكون من افضل الشركات التى تقدم خدمات تصميم وتطوير
                     المواقع الالكترونية وتطبيقات الهواتف المحمولة (اندرويد - ايفون ) ولذلك نسعى دائما لاستخدام احدث
                      التقنيات البرمجية الحديثة
                      سواء فى شق التصميم او فى شق البرمجيات بمختلف انواعها ونسير دائما فى
                       ركب التطور لكى نحقق اعلى معايير الكفاءة واقصى مدى لإرضاء عملاءنا الكرام
                </p>
            </div>
            </Col>
            <Col xl={5} lg={4} md={6} sm={12}>
            <div className='main2sec2'>
               <img src='	https://pure-soft.com/uploads/2022_01_19_10_34_51_matha-aana.png' style={{height:"300px"}}/>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
   <section className='sec3'>
    <Container>
        <Row>
            <Col xl={3} lg={4} md={6} sm={12}>
            <div className='main3sec3'>
                <FaRegHospital className="icon3"/>
                <h3><CountUp end={70}  /></h3>
                <h4>عدد الانظمة</h4>
            </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12}>
            <div className='main3sec3'>
            <FaAward className="icon3"/>
                <h3><CountUp end={150} delay={3} /></h3>
                <h4>عدد العملاء </h4>
            </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12}>
            <div className='main3sec3'>
            <BiUser className="icon3"/>
                <h3><CountUp end={60}  delay={3}/></h3>
                <h4>عدد المواقع</h4>
            </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12}>
            <div className='main3sec3'>
            <FaAward className="icon3"/>
                <h3><CountUp end={120} delay={3}  /></h3>
                <h4>عدد التطبيقات</h4>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
    </div>

  )
}

export default الريسيه
