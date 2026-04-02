import React from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-container">
      <section className="policy">

        <div className="policy__block">
          <h2 className="policy__title">Information We Collect</h2>
          <p className="policy__text">We collect information necessary to provide and improve our Services.</p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Personal Information</h2>
          <ul className="policy__list">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Country and address information</li>
            <li>Account credentials</li>
            <li>Payment information (processed securely via third-party providers)</li>
          </ul>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Learning & Certification Data</h2>
          <ul className="policy__list">
            <li>Course enrollment history</li>
            <li>Progress tracking and completion data</li>
            <li>Mock exam attempts and scores</li>
            <li>Final exam results</li>
            <li>Certification records</li>
          </ul>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Technical Information</h2>
          <ul className="policy__list">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Log data and usage analytics</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">How We Use Your Information</h2>
          <p className="policy__text">We use collected information to:</p>
          <ul className="policy__list">
            <li>Provide access to courses and certification exams</li>
            <li>Process payments and issue certificates</li>
            <li>Track learning progress and performance analytics</li>
            <li>Communicate important updates and support responses</li>
            <li>Improve platform functionality and user experience</li>
            <li>Ensure exam integrity and prevent misconduct</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="policy__text">We do not sell your personal data.</p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Data Retention Policy</h2>
          <p className="policy__text">
            We retain your information for as long as necessary to fulfill the purposes outlined in this policy. 
            When your data is no longer needed, we will securely delete or anonymize it.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Third-Party Sharing</h2>
          <p className="policy__text">
            We may share your information with third parties to assist in providing our services, including payment processors 
            and customer support. We ensure these parties comply with strict data protection standards.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Security Measures</h2>
          <p className="policy__text">
            We implement robust security measures to protect your personal data from unauthorized access, alteration, 
            disclosure, or destruction, including encryption and access controls.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Your Rights</h2>
          <p className="policy__text">
            You have the right to access, correct, or delete your personal data. You can also request restrictions on 
            processing and withdraw consent at any time.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Cookies and Tracking Technologies</h2>
          <p className="policy__text">
            We use cookies and similar technologies to enhance user experience, analyze site usage, and deliver targeted 
            advertisements. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">International Data Transfers</h2>
          <p className="policy__text">
            Your information may be transferred to and processed in countries outside your own. We ensure that such transfers 
            are compliant with applicable data protection laws.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Changes to This Policy</h2>
          <p className="policy__text">
            We may update this privacy policy from time to time. We will notify you of any significant changes and encourage 
            you to review the policy periodically.
          </p>
        </div>

        <div className="policy__block">
          <h2 className="policy__title">Contact Us</h2>
          <p className="policy__text">
            If you have any questions or concerns regarding this policy or our data practices, please contact our support 
            team directly through the platform.
          </p>
        </div>

      </section>
    </main>
  );
}
