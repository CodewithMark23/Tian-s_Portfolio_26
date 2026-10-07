import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────
// Replace these three values after setting up EmailJS (see README below)
const EMAILJS_SERVICE_ID = 'service_ql3nv5p';
const EMAILJS_TEMPLATE_ID = 'template_rlm0o9o';
const EMAILJS_PUBLIC_KEY = 'a_IDogfJ1pZvyx305';
// ──────────────────────────────────────────────────────────

export default function CommissionForm() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    company: '',
    projectType: '',
    budgetRange: '',
    preferredDeadline: '',
    projectDescription: '',
    contactMethod: 'Email',
    agreement: false
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Website Development',
    'Web Application',
    'Mobile Application',
    'E-commerce / Shopify',
    'UI/UX Design',
    'Landing Page',
    'Portfolio Website',
    'AI Integration / Automation',
    'Bug Fix / Website Improvement',
    'Other'
  ];

  const budgetRanges = [
    'Less than ₱5,000',
    '₱5,000 - ₱10,000',
    '₱10,000 - ₱25,000',
    '₱25,000 - ₱50,000',
    '₱50,000+',
    "Let's discuss"
  ];

  const contactMethods = ['Email', 'Phone', 'Messenger / Social Media'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      contact_number: formData.contactNumber || 'N/A',
      company: formData.company || 'N/A',
      project_type: formData.projectType,
      budget_range: formData.budgetRange,
      deadline: formData.preferredDeadline || 'N/A',
      contact_method: formData.contactMethod,
      message: formData.projectDescription,
      reply_to: formData.email,
      submitted_at: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        company: '',
        projectType: '',
        budgetRange: '',
        preferredDeadline: '',
        projectDescription: '',
        contactMethod: 'Email',
        agreement: false
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong while sending your request. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="commission-success-card">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h3 className="commission-success-title">Request sent successfully!</h3>
        <p className="commission-success-text">
          Thanks for reaching out! Your commission request has been sent. I'll review the details and get back to you as soon as possible.
        </p>
        <button className="btn-primary" onClick={() => setStatus('idle')}>
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="commission-form-container">
      <div className="commission-form-header">
        <h3 className="commission-form-title">Commission Request</h3>
        <p className="commission-form-sub">
          Have a project in mind? Tell me what you need and I'll get back to you as soon as possible.
        </p>
      </div>

      <form ref={formRef} className="commission-form" onSubmit={handleSubmit} noValidate>

        {status === 'error' && (
          <div className="commission-error-msg" role="alert">{errorMessage}</div>
        )}

        {/* Row 1 — Name + Email */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cf-fullName">Full Name <span className="req">*</span></label>
            <input
              type="text"
              id="cf-fullName"
              name="fullName"
              required
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cf-email">Email Address <span className="req">*</span></label>
            <input
              type="email"
              id="cf-email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        {/* Row 2 — Phone + Company */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cf-contactNumber">Contact Number</label>
            <input
              type="tel"
              id="cf-contactNumber"
              name="contactNumber"
              autoComplete="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cf-company">Company / Organization</label>
            <input
              type="text"
              id="cf-company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        {/* Row 3 — Project Type + Budget */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cf-projectType">Project Type <span className="req">*</span></label>
            <div className="custom-select-wrapper">
              <select
                id="cf-projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="" disabled>Select Project Type</option>
                {projectTypes.map(pt => (
                  <option key={pt} value={pt}>{pt}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cf-budgetRange">Budget Range <span className="req">*</span></label>
            <div className="custom-select-wrapper">
              <select
                id="cf-budgetRange"
                name="budgetRange"
                required
                value={formData.budgetRange}
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="" disabled>Select Budget Range</option>
                {budgetRanges.map(br => (
                  <option key={br} value={br}>{br}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 4 — Deadline + Contact Method */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cf-preferredDeadline">Preferred Deadline</label>
            <input
              type="date"
              id="cf-preferredDeadline"
              name="preferredDeadline"
              value={formData.preferredDeadline}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cf-contactMethod">Preferred Contact Method</label>
            <div className="custom-select-wrapper">
              <select
                id="cf-contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="form-input form-select"
              >
                {contactMethods.map(cm => (
                  <option key={cm} value={cm}>{cm}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="form-group">
          <label htmlFor="cf-projectDescription">Project Description <span className="req">*</span></label>
          <textarea
            id="cf-projectDescription"
            name="projectDescription"
            required
            rows="5"
            placeholder="Tell me about your project, goals, required features, design preferences, and anything else I should know."
            value={formData.projectDescription}
            onChange={handleChange}
            className="form-input form-textarea"
          />
        </div>

        {/* Agreement */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreement"
              required
              checked={formData.agreement}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="checkbox-text">
              I understand that submitting this form is a project enquiry and does not guarantee acceptance of the commission.
            </span>
          </label>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary submit-btn"
          >
            {status === 'sending'
              ? <><span className="spinner" aria-hidden="true" /> Sending…</>
              : 'Send Commission Request'}
          </button>
        </div>

      </form>
    </div>
  );
}
