'use client';

import { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

export default function LeadModal({ isOpen, onClose, formType = 'pilot' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {formType === 'pilot' ? 'Start Your AI Pilot' : 'Schedule a Consultation'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {formType === 'pilot' 
                ? 'Tell us about your business and we\'ll design a pilot program'
                : 'Fill out the form and we\'ll get back to you within 24 hours'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <LeadCaptureForm formType={formType} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
