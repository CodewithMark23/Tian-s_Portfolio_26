import { useState } from 'react';

export default function CommissionForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    company: '',
    projectType: '',
    budgetRange: '',
    preferredDeadline: '',
    projectDescription: '',
    referenceUrl: '',
    contactMethod: 'Email',
    agreement: false
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
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

    try {
      const response = await fetch('http://localhost:3001/api/commission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

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
        referenceUrl: '',
        contactMethod: 'Email',
        agreement: false
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong while sending your request. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="commission-success-card">
        <h3 className="commission-success-title">Request sent successfully!</h3>
        <p className="commission-success-text">
          Thanks for reaching out! Your commission request has been sent. I'll review the details and get back to you as soon as possible.
        </p>
        <button 
          className="btn-primary" 
          onClick={() => setStatus('idle')}
        >
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

      <form className="commission-form" onSubmit={handleSubmit}>
        {status === 'error' && (
          <div className="commission-error-msg">{errorMessage}</div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              required 
              value={formData.fullName} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber" 
              name="contactNumber" 
              value={formData.contactNumber} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company / Organization</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectType">Project Type *</label>
            <div className="custom-select-wrapper">
              <select 
                id="projectType" 
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
            <label htmlFor="budgetRange">Budget Range *</label>
            <div className="custom-select-wrapper">
              <select 
                id="budgetRange" 
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

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="preferredDeadline">Preferred Deadline</label>
            <input 
              type="date" 
              id="preferredDeadline" 
              name="preferredDeadline" 
              value={formData.preferredDeadline} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactMethod">Preferred Contact Method</label>
            <div className="custom-select-wrapper">
              <select 
                id="contactMethod" 
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

        <div className="form-group full-width">
          <label htmlFor="projectDescription">Project Description *</label>
          <textarea 
            id="projectDescription" 
            name="projectDescription" 
            required 
            rows="5"
            placeholder="Tell me about your project, goals, required features, design preferences, and anything else I should know."
            value={formData.projectDescription} 
            onChange={handleChange} 
            className="form-input form-textarea"
          ></textarea>
        </div>



        <div className="form-group full-width checkbox-group">
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
            {status === 'sending' ? 'Sending...' : 'Send Commission Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
