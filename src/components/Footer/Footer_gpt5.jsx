import React from "react";
import "./Footer_gpt5.css";
// import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="highlands-footer">
      {/* Blue strip at the top */}
      <div className="footer-green-strip"></div>

      <div className="footer-content">

        {/* Left Section: Logo and Copyright */}
        <div className="footer-left">
          {/* <div className="footer-logo">
            <img src={logo} alt="highlands" className="footer-logo-img" />
          </div> */}
          <p className="footer-copyright">©2025 highlands. All rights reserved</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="footer-middle">
          {/* Column 1: VỀ highlands */}
          <div className="footer-column">
            <h3 className="footer-column-title">VỀ highlands</h3>
            <ul className="footer-links">
              <li><a href="/origin">Nguồn gốc</a></li>
              <li><a href="/services">Dịch vụ</a></li>
              <li><a href="/careers">Nghề Nghiệp</a></li>
              <li><a href="/contact">Liên hệ</a></li>
            </ul>
          </div>

          {/* Column 2: TIN TỨC */}
          <div className="footer-column">
            <h3 className="footer-column-title">TIN TỨC</h3>
            <ul className="footer-links">
              <li><a href="/news">Tin tức mới nhất</a></li>
              <li><a href="/promotions">Khuyến mãi</a></li>
              
            </ul>
          </div>

          {/* Column 3: HỆ THỐNG CỬA HÀNG — ✅ ĐÃ ĐƯA VÀO TRONG footer-middle */}
          <div className="footer-column">
            <h3 className="footer-column-title">HỆ THỐNG CỬA HÀNG</h3>
            <ul className="footer-links">
              <li><a href="/find-store">Tìm cửa hàng gần nhất</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media — ✅ NẰM TRONG footer-content, NGANG HÀNG footer-middle */}
        <div className="footer-right">
          <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://tiktok.com" className="social-icon" aria-label="TikTok">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>

          <div className="footer-map">
            <iframe
              title="Bản đồ địa điểm highlands"
              className="footer-map-iframe"
              src="https://www.google.com/maps?q=10.743902,106.6340446&z=17&output=embed&hl=vi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="footer-map-link"
              href="https://maps.app.goo.gl/6RuUrqKaYAFspPe57"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mở trong Google Maps
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom-legal">
        <p>
          © 2026. Công Ty Cổ Phần Đầu Tư Thương Mại highlands. GPĐKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2026.
        </p>
        <p>
          Địa chỉ: ... . Điện thoại: 028 38125960. Email: hotrotmdt@highlands.com.
        </p>
        <p>
          Chịu trách nhiệm nội dung: Nguyễn Văn A. Đại diện ủy quyền giải quyết các vấn đề liên quan bảo vệ quyền lợi người tiêu dùng. <a href="#">Xem chính sách</a>
        </p>
      </div>
            {/* Chat Icon */}
            <div className="footer-chat-icon" title="Chat với chúng tôi">
        <i className="bi bi-chat-dots-fill"></i>
      </div>
    </footer>
    
  );
};

export default Footer;