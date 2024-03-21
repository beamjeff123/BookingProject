document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // ตรวจสอบการ Login โดยใช้ข้อมูลที่คุณต้องการ (เช่น การส่งข้อมูลผ่าน AJAX ไปยังเซิร์ฟเวอร์)
        // ตรวจสอบข้อมูลเช่น username === 'admin' && password === 'password' หรืออื่นๆ

        // เช่น ถ้าข้อมูลถูกต้อง
        if (username === 'admin' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
            // ให้ทำการ Redirect หรือทำอย่างอื่นตามที่คุณต้องการหลังจาก Login สำเร็จ
            // เช่น window.location.href = 'dashboard.html';
        } else {
            loginMessage.textContent = 'Invalid username or password!';
            loginMessage.style.color = 'red';
        }
    });
});
