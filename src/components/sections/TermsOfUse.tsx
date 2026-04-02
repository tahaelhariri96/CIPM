import React from 'react';
import './TermsOfUse.css';

export default function TermsOfUse() {
  return (
    <main className="terms-main">
      <section className="terms">

        <div className="terms__section">
          <h2 className="terms__title">Eligibility</h2>
          <p className="terms__text">
            You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account and enroll in certification programs. By registering, you confirm that the information you provide is accurate and complete.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Account Registration</h2>
          <p className="terms__text">To access certain features, you must create an account. You agree to:</p>
          <ul className="terms__list terms__text">
            <li>Provide accurate and current information</li>
            <li>Maintain the confidentiality of your login credentials</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>
          <p className="terms__text">
            We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Use of Services</h2>
          <p className="terms__text">You agree to use the Services only for lawful purposes. You may not:</p>
          <ul className="terms__list terms__text">
            <li>Copy, reproduce, or distribute course materials without authorization</li>
            <li>Share exam content, questions, or certification materials</li>
            <li>Attempt to disrupt platform security or functionality</li>
            <li>Impersonate another individual or organization</li>
          </ul>
          <p className="terms__text">
            All learning materials, exams, and certifications are protected by intellectual property laws.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Certification and Examinations</h2>
          <p className="terms__text">
            Certification is granted upon successful completion of required training and passing the official examination.
          </p>
          <p className="terms__text">We reserve the right to:</p>
          <ul className="terms__list terms__text">
            <li>Verify candidate identity</li>
            <li>Cancel or invalidate exam results in cases of misconduct</li>
            <li>Update certification requirements</li>
          </ul>
          <p className="terms__text">
            Certification does not guarantee employment or professional advancement.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Payments and Refunds</h2>
          <p className="terms__text">
            All fees are clearly displayed prior to purchase. By enrolling, you agree to pay the listed fees.
          </p>
          <p className="terms__text">
            Refund policies, where applicable, are governed by the specific terms provided at the time of purchase. Examination fees may be non-refundable once the exam has been accessed or scheduled.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Intellectual Property</h2>
          <p className="terms__text">
            All content on the platform—including text, graphics, videos, exam materials, logos, and certificates—is the property of the organization or its licensors. Unauthorized use, duplication, or distribution is strictly prohibited.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Limitation of Liability</h2>
          <p className="terms__text">
            The Services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free functionality.
          </p>
          <p className="terms__text">To the maximum extent permitted by law, we are not liable for:</p>
          <ul className="terms__list terms__text">
            <li>Indirect or consequential damages</li>
            <li>Loss of data or profits</li>
            <li>Technical interruptions beyond our control</li>
          </ul>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Indemnification</h2>
          <p className="terms__text">
            You agree to indemnify, defend, and hold harmless us, our affiliates, and our respective officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising out of your use of the Services.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Termination</h2>
          <p className="terms__text">
            We reserve the right to suspend or terminate your access to the Services at any time, without notice, if we believe you have violated these Terms or applicable law.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__title">Governing Law</h2>
          <p className="terms__text">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law principles.
          </p>
        </div>

      </section>
    </main>
  );
}
