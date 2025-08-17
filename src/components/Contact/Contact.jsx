// src/components/Contact/Contact.jsx - Template .
import './Contact.css';

function Contact() {


  return (
      
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Let's work together</h3>
                    <p>I'm always interested in hearing about new projects and opportunities.</p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>Pawaris2020@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+66 84 043 4071</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Chiang Mai, Thailand</span>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Your Name" required></input>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email" required></input>
                    </div>
                    <div class="form-group">
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Contact;