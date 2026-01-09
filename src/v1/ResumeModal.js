import React from "react";

const ResumeModal = ({ isOpen, isLoading, onClose, onLoad, resumeUrl }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="v1-modal-overlay" role="dialog" aria-modal="true">
      <div className="v1-modal">
        <div className="v1-modal-header">
          <h3>Resume Preview</h3>
          <button type="button" className="v1-modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        {isLoading && (
          <div className="v1-modal-loading">Loading resume preview…</div>
        )}
        <iframe
          className="v1-resume-frame"
          src={resumeUrl}
          title="Resume preview"
          onLoad={onLoad}
        />
        <div className="v1-modal-footer">
          <a className="v1-button ghost" href={resumeUrl}>
            Open full resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
