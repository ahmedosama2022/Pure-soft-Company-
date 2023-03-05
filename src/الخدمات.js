import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./الخدمات.css"
import 'animate.css';
const الخدمات = () => {
  return (
    <div>
      <div className='serverSec1 container'>
      <h2>خدماتنا</h2>
      <hr className='hr1'></hr>
      <p>نحن دائما في خدمتكم</p>
      </div>
     
      <section className='sec2'>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={12} sm={12}>
             <div className='serves_div1'>
             <img src='https://pure-soft.com/uploads/2022_01_21_10_40_11_brmg-anthm-alshrkat-oalmossat.png' style={{width:"120px", height:"80px"}}/>
              <h4 class="animate__animated animate__bounce animate__delay-2s">تصميم وبرمجة المواقع الالكترونية</h4>
              <p>كل ماتريد من انظمه لشركتك او مؤسستك او مصنعك او اي نشاط تجاري آخر تجدها معنا بسهوله</p>
             </div>
            </Col>
            <Col xl={4} lg={6} md={12} sm={12}>
             <div className='serves_div1'>
             <img src='	https://pure-soft.com/uploads/2022_01_21_10_34_24_ttbykat-alhoatf-almhmolh.png' style={{width:"120px", height:"80px"}}/>
             <h4>تطبيقات الهواتف المحموله</h4>
              <p>كل ماتريد من انظمه لشركتك او مؤسستك او مصنعك او اي نشاط تجاري آخر تجدها معنا بسهوله</p>
             </div>
            </Col>
            <Col xl={4} lg={6} md={12} sm={12}>
             <div className='serves_div1'>
             <img src='https://pure-soft.com/uploads/2022_01_21_10_26_36_khdmat-alarshfh-oalsyo.png' style={{width:"120px", height:"80px"}}/>
             <h4>خدمات الارشفه والسيو</h4>
              <p>كل ماتريد من انظمه لشركتك او مؤسستك او مصنعك او اي نشاط تجاري آخر تجدها معنا بسهوله</p>
             </div>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col xl={4} lg={6} md={12} sm={12}>
             <div className='serves_div1'>
             <img src='https://pure-soft.com/uploads/2022_01_19_11_03_07_hgz-alastdafat-oalntakat.png' style={{width:"120px", height:"80px"}}/>
             <h4>حجز الاستضافات والنطاقات</h4>
              <p>كل ماتريد من انظمه لشركتك او مؤسستك او مصنعك او اي نشاط تجاري آخر تجدها معنا بسهوله</p>
             </div>
            </Col>
            <Col xl={4} lg={6} md={12} sm={12}>
             <div className='serves_div1'>
             <img src='https://pure-soft.com/uploads/2022_01_21_10_40_11_brmg-anthm-alshrkat-oalmossat.png' style={{width:"120px", height:"80px"}}/>
             <h4>انظمه جاهزة في مجال الادارة</h4>
              <p>كل ماتريد من انظمه لشركتك او مؤسستك او مصنعك او اي نشاط تجاري آخر تجدها معنا بسهوله</p>
             </div>
            </Col>
            <Col xl={4} lg={6} md={12} sm={12}>
             <div className='serves_div1'>
             <img src='https://pure-soft.com/uploads/2022_01_21_10_40_11_brmg-anthm-alshrkat-oalmossat.png' style={{width:"120px", height:"80px"}}/>
             <h4>برمجة انظمة الشركات والمؤسسات</h4>
              <p>كل ماتريد من انظمه لشركتك او مؤسستك او مصنعك او اي نشاط تجاري آخر تجدها معنا بسهوله</p>
             </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='servse_sec3'>
    <div className='servr5'>
    <div className='serverSec1'>
      <div className='container'></div>
      <h2>خدماتنا</h2>
      <hr className='hr1'></hr>
      <p>فقط كل ماعليك فعله هو اكمال بعض التفاصيل البسيطه ونحن سنتولي باقي الامور .هيا بنا لنبدأ</p>
      </div>
      <section className='form'>
        <Container>
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
        </Container>
      </section>
    </div>
      </section>



      <section className='project'>
      <div className='serverSec1 container'>
      <h2>أعمال قد شرفنا بالعمل عليها</h2>
      <hr className='hr1'></hr>
      <p>لقد سعدنا بالعمل علي هذه المشاريع ونسعد بآنضمام مشروعكم الي سابقه اعمالنا . فأنتم مصدر فخر واعتزاز لنا </p>
      </div>
      <div className='project_top'>
      <Container>
        <Row>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='https://pure-soft.com/uploads/2022_01_21_05_41_05_alfoz-alaaalmyh.png'/>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='https://pure-soft.com/uploads/2022_01_20_04_45_49_aksys-alryad-llsyarat-alfakhr.png'/>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='https://pure-soft.com/uploads/2022_01_20_04_16_53_mokaa-sok-alnkhyl.png'/>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='https://pure-soft.com/uploads/2022_01_20_04_45_36_adar-llastthmar-altgaryh.png'/>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='	https://pure-soft.com/uploads/2022_01_21_05_34_27_mfroshat-alfoz.png'/>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='	https://pure-soft.com/uploads/2022_01_21_05_36_24_ohlh-adah-altsmym-alrkmy.png'/>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='https://pure-soft.com/uploads/2022_01_21_05_37_40_tmd3.png'/>
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}>
            <img src='https://pure-soft.com/uploads/2022_01_21_05_37_40_tmd3.png
'/>
          </Col>
        </Row>
      </Container>
      </div>
      </section>
    </div>
  )
}

export default الخدمات
