import React from 'react';
import { useNavigate,Link } from 'react-router-dom';


export default function MainScreen() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/LoginPage');
  };

  return (
    <>
<nav class="navbar">
    <div class="container">
        <div class="logo">
        <a href="#">
    <img src="public/images/Logo.png" alt="Logo Icon"/>
</a>
</div>
        <ul class="nav-links-left">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support</a></li>
        </ul>
        <ul class="nav-links-right">
            <li><button class="login-btn" onClick={goToLogin}>Login</button></li>
            <li><button class="get-started-btn">Get Started</button></li>
        </ul>
    </div>
</nav>


      <header className="hero-section">
        <div className="container">
          <h1>Track your shipments effortlessly, anywhere in the world, with real-time updates and advanced security.</h1>
          <p>Our platform ensures package integrity by monitoring temperature, humidity, and shock, making it the trusted choice for both individual users and large enterprises.</p>
          <div className="track-package">
            <input type="text" placeholder="Track Package" />
            <button>Track</button>
          </div>
        </div>
      </header>
      <section class="features-section">
    <div class="container">
        <div class="features-grid">
            <div class="feature-card">
                <h3><img src="public/images/server.png" alt="Server Icon" /> Server</h3>
                <p>The PGT software delivers outstanding performance and stability across all platforms, whether installed on Windows, Linux, or other environments. Our solution can be hosted on-premise or in the cloud, providing flexibility to meet your specific needs. Additionally, we offer a variety of hosted options backed by professional support to ensure seamless operation.</p>
            </div>
            <div class="feature-card">
                <h3><img src="public/images/Multiple Devices.png" alt="Devices Icon" /> Devices</h3>
                <p>PGT stands out among GPS tracking systems by supporting a wide range of protocols and device models. Whether you opt for affordable, generic GPS trackers or premium, high-quality brands, PGT gives you the freedom to choose from a broad selection of vendors.</p>
            </div>
            <div class="feature-card">
                <h3><img src="public/images/Layout.png" alt="Interface Icon" /> Interface</h3>
                <p>PGT offers a modern and comprehensive web interface optimized for both desktop and mobile devices. In addition, we provide native mobile applications for Android and iOS platforms. Furthermore, we offer a suite of applications that can turn mobile devices into GPS trackers.</p>
            </div>
            <div class="feature-card">
                <h3><img src="public/images/Tracking.png" alt="Live Tracking Icon" /> Live Tracking</h3>
                <p>PGT allows you to view the real-time location of your GPS devices without any delay. With multiple mapping options available, including road maps and satellite imagery, you can choose the one that best suits your needs. Additionally, PGT can efficiently manage a wide range of sensors and data provided by GPS units.</p>
            </div>
            <div class="feature-card">
                <h3><img src="public/images/Google.png" alt="Alerts Icon" /> Alerts</h3>
                <p>The PGT software provides instant notifications, including support for push notifications, emails, and other methods. These features allow the software to alert users of harsh driving behavior, fuel drops, maintenance events, geo-fencing breaches, and many other types of alerts.</p>
            </div>
            <div class="feature-card">
                <h3><img src="public/images/presentation.png" alt="Reports Icon" /> Reports</h3>
                <p>PGT offers a variety of reports, including location history, trip, chart, and summary reports. These reports can be accessed directly through the web or mobile app and can also be exported as Excel files. Additionally, PGT allows users to visualize location history on a map for a more intuitive understanding of their data.</p>
            </div>
        </div>
    </div>
</section>
      <section class="get-started-section">
    <div class="container">
        <h2>Ready to get started?</h2>
        <button class="get-started-btn">Get Started</button>
    </div>
</section>
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-left">
                <h3><img src="public/images/Logo.png"/> Package GPS Tracking</h3>
                <li><a href="#">Subscribe to our newsletter</a></li>
                <div class="social-icons">
                    <a href="#"><img src="public/images/Facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="public/images/TwitterX.png" alt="Twitter" /></a>
                    <a href="#"><img src="public/images/LinkedIn.png" alt="LinkedIn" /></a>
                </div>
            </div>
            <div class="footer-right">
                <div class="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div class="footer-company">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div class="footer-bottom">
            <p>&copy; 2024 Package GPS Tracking. All rights reserved.</p>
        </div>
    </div>
</footer>

    </>
  );
}
