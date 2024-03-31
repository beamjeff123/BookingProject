import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
      <header>
        <h1>Hotel Booking</h1>
        <div className="login-box" onClick={() => window.location.href='login.html'}>เข้าสู่ระบบ</div>
        <div className="regis-box" onClick={() => window.location.href='regis.html'}>สร้างบัญชี</div>
      </header>
      <main>
        <div className="container">
          <div className="input-box">
            <label htmlFor="checkin">Check-in Date:</label>
            <input type="date" id="checkin" name="checkin" required style={{ marginTop: '10px' }} />
          </div>
          <div className="input-box">
            <label htmlFor="checkout">Check-out Date:</label>
            <input type="date" id="checkout" name="checkout" required style={{ marginTop: '10px' }} />
          </div>
          <div className="input-box">
            <label htmlFor="numPeople">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="numPeople" name="numPeople" required style={{ marginTop: '10px' }} />
          </div>
        </div>
        <form action="succeed.html" method="POST">
          <section className="accommodations">
            {/* เริ่ม accommodation ที่ 1 */}
            <div className="accommodation">
              <img src="../../photo/1bed1king.png" alt="Accommodation 1" />
              <div className="info">
                <h3>สวีท 1 ห้องนอน 1 เตียงคิงไซส์ มีระเบียง (1 King Bed 1 Bedroom Suite With Balcony)</h3>
                <p>1 เตียงคิงไซส์</p>
                <p> ขนาดห้อง: 36 ตารางเมตร </p>
                <p>วิว: เมือง</p>
                <p>ระเบียง/ชานเรือน</p>
                <h4>Price: ฿2,499 / night</h4>
              </div>
              <div className="box" style={{ backgroundColor: '#1753d600', color: '#030303' }}>
                <h3>Booking (จองที่พัก)</h3>
                <p>เลือกห้องที่ถูกใจคุณ แล้วจองเลย!</p>
                <button onClick={() => window.location.href='booking.html'} style={{ backgroundColor: '#144bc3' }}>จองเลย</button>
              </div>
            </div>
            {/* เริ่ม accommodation ที่ 2 */}
            <div className="accommodation">
              <img src="../../photo/1king.png" alt="Accommodation 2" />
              <div className="info">
                <h3>ห้องมาตรฐาน เตียงคิงไซส์ (1 King Bed Standard)</h3>
                <p>1 เตียงคิงไซส์</p>
                <p> ขนาดห้อง: 28 ตารางเมตร </p>
                <p>วิว: เมือง</p>
                <p>ระเบียง/ชานเรือน</p>
                <h4>Price: ฿1,899 / night</h4>
              </div>
              <div className="box" style={{ backgroundColor: '#1753d600', color: '#030303' }}>
                <h3>Booking (จองที่พัก)</h3>
                <p>เลือกห้องที่ถูกใจคุณ แล้วจองเลย!</p>
                <button onClick={() => window.location.href='booking.html'} style={{ backgroundColor: '#144bc3' }}>จองเลย</button>
              </div>
            </div>
            {/* เริ่ม accommodation ที่ 3 */}
            <div className="accommodation">
              <img src="../../photo/2single.png" alt="Accommodation 3" />
              <div className="info">
                <h3>ห้องมาตรฐาน 2 เตียงเดี่ยว วิวเมือง มีระเบียง (2 Single Beds Standard City View Balcony)</h3>
                <p>2 เตียงเดี่ยว</p>
                <p> ขนาดห้อง: 28 ตารางเมตร </p>
                <p>วิว: เมือง</p>
                <p>ระเบียง/ชานเรือน</p>
                <h4>Price: ฿1,699 / night</h4>
              </div>
              <div className="box" style={{ backgroundColor: '#1753d600', color: '#030303' }}>
                <h3>Booking (จองที่พัก)</h3>
                <p>เลือกห้องที่ถูกใจคุณ แล้วจองเลย!</p>
                <button onClick={() => window.location.href='booking.html'} style={{ backgroundColor: '#144bc3' }}>จองเลย</button>
              </div>
            </div>
            {/* เริ่ม accommodation ที่ 4 */}
            <div className="accommodation">
              <img src="../../photo/standard.png" alt="Accommodation 4" />
              <div className="info">
                <h3>ห้องมาตรฐาน (Standard Room)</h3>
                <p>1 เตียงคิงไซส์</p>
                <p> ขนาดห้อง: 28 ตารางเมตร </p>
                <p>วิว: เมือง</p>
                <p>ระเบียง/ชานเรือน</p>
                <h4>Price: ฿1,699 / night</h4>
              </div>
              <div className="box" style={{ backgroundColor: '#1753d600', color: '#030303' }}>
                <h3>Booking (จองที่พัก)</h3>
                <p>เลือกห้องที่ถูกใจคุณ แล้วจองเลย!</p>
                <button onClick={() => window.location.href='booking.html'} style={{ backgroundColor: '#144bc3' }}>จองเลย</button>
              </div>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
