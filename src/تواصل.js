import React from 'react'
import { Row ,Col, Container} from 'react-bootstrap'
import "./تواصل.css"
import {FiMapPin} from "react-icons/fi"
import {CgMail} from "react-icons/cg"
import {BsFillPhoneFill} from "react-icons/bs"
const تواصل = () => {
  return (
    <div style={{marginTop:"50px"}} id="تواصل">
      <div className='serverSec1 container' >
      <h2 >تواصل</h2>
      <hr className='hr1'></hr>
      <p>تواصل الان واحصل علي خصم 30%</p>
      </div>
      <div className='map'>
        <Container>
        <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d881865.7492494049!2d31.007291!3d30.300094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d68d74c21285%3A0xbaac07dd3b0248da!2sPure%20Soft%20Software%20Industry!5e0!3m2!1sen!2seg!4v1677760823513!5m2!1sen!2seg" style={{width:"100%" ,height:"450px", border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
        </Container>
      </div>


      <section className='form2' >
        <Container>
            <section className='form'>
            <Row>
           <Col xl={7} lg={6} md={12} sm={12}>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
            <div className='input_top'>
              <input type="gmail" placeholder='البريد الالكتروني' />
            </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
            <div className='input_top'>
              <input type="name" placeholder='الاسم' />
            </div>
            </Col>
           
          </Row>
          <br/>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
            <div className='input_top'>
              <select name="الخدمه" id="servers">
                <option value="volvo">اختر الخدمه</option>
                <option value="saab">تصميم و برمجه المواقع الالكترونيه</option>
                <option value="mercedes">تطبيقات الهواتف المحموله</option>
                <option value="audi">خدمات الارشفه والسيو</option>
                <option value="audi"> حجز الاستضافات و النطاق</option>
                <option value="audi">  انظمة جاهزة في نظام الاداره</option>
              </select>
            </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
            <div className='input_top'>
              <input type="number" placeholder='الهاتف' />
            </div>
            </Col>
           
          </Row>
          <br/>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
           <div className='form_bottom'>
               <textarea className='input_bootom' type="text" placeholder='الرساله'/>
           </div>
            </Col>
            <div className='bt'>
              <button className='bt1'>ارسال</button>
            </div>
          </Row>
         </Col>

         <Col xl={5} lg={6} md={12} sm={12}>
           <section className='site'>
              <div className='site1' style={{display:"flex" , justifyContent:"center" ,width:"200px"}}>
                            <div >
                            <h4>:الموقع</h4>
                                <p>شبين الكوم - المنوفيه - مصر</p>
                            </div>
                                <div>
                            <FiMapPin className="icon2"/>
                            </div>
              </div>
              <div className='site4' style={{display:"flex" , justifyContent:"center",width:"200px" ,position:"relative", right:"10px", top:"5px"}}>
                            <div>
                            <h4>:البريد</h4>
                                <p>puresoft.co@gmail.com</p>
                            </div>
                                <div>
                            <CgMail className="icon2"/>
                            </div>
              </div>
              <div className='site5' style={{display:"flex" , justifyContent:"center",width:"200px", position:"relative", left:"30px", top:"20px"}}>
                            <div>
                            <h4>:الهاتف</h4>
                                
                                <p>01117818079</p>
                            </div>
                                <div>
                            <BsFillPhoneFill className="icon2"/>
                            </div>
              </div>
           </section>
         </Col>
           </Row>
            </section>
        </Container>
           
      </section>
    </div>
  )
}

export default تواصل
