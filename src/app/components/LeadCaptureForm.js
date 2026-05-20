'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function LeadCaptureForm({ formType = 'pilot', onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    painPoint: '',
    message: '',
    source: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Track form submission attempt
    trackEvent('form_submit_attempt', {
      form_type: formType,
      company_size: formData.companySize,
    });

    try {
      // Send to your backend/API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType,
          submittedAt: new Date().toISOString(),
          pageUrl: window.location.href,
          referrer: document.referrer,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Track successful submission
      trackEvent('form_submit_success', {
        form_type: formType,
        company_size: formData.companySize,
      });

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
      trackEvent('form_submit_error', {
        form_type: formType,
        error: err.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {formType === 'pilot' ? 'Thank You for Your Interest!' : 'Thank You!'}
        </h3>
        <p className="text-slate-600 mb-6">
          {formType === 'pilot' 
            ? "We've received your pilot request. Our team will review your submission and reach out within 24 hours to schedule your consultation."
            : "We've received your message and will get back to you within 24 hours."}
        </p>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            placeholder="Your Company"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Your Role *
          </label>
          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          >
            <option value="">Select your role</option>
            <option value="founder">Founder / CEO</option>
            <option value="cto">CTO / Tech Lead</option>
            <option value="coo">COO / Operations</option>
            <option value="manager">Department Manager</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Company Size *
        </label>
        <select
          name="companySize"
          required
          value={formData.companySize}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
        >
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Biggest Challenge with AI/Automation *
        </label>
        <select
          name="painPoint"
          required
          value={formData.painPoint}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
        >
          <option value="">Select your biggest challenge</option>
          <option value="speed">Can't compete on speed with larger enterprises</option>
          <option value="manual">Manual processes draining resources</option>
          <option value="roi">Uncertainty about AI ROI</option>
          <option value="vendor">Fear of choosing wrong vendor</option>
          <option value="talent">Lack of AI talent in-house</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          How did you hear about us?
        </label>
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
        >
          <option value="">Select source</option>
          <option value="google">Google Search</option>
          <option value="linkedin">LinkedIn</option>
          <option value="referral">Referral</option>
          <option value="event">Event / Conference</option>
          <option value="social">Social Media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Tell us about your project (Optional)
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
          placeholder="Describe what you're looking to automate or achieve with AI..."
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : (
          formType === 'pilot' ? 'Start Your Pilot' : 'Schedule Consultation'
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  );
}
