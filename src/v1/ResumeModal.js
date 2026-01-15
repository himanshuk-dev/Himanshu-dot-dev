import React from "react";

const ResumeModal = ({
  isOpen,
  isLoading,
  onClose,
  onLoad,
  resumeUrl,
  previewUrl,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="v1-modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="v1-modal" onClick={(event) => event.stopPropagation()}>
        <div className="v1-modal-header">
          <h3>Resume Preview</h3>
          <button
            type="button"
            className="v1-modal-close"
            onClick={onClose}
            aria-label="Close resume preview"
          >
            ×
          </button>
        </div>
        {isLoading && (
          <div className="v1-modal-loading">Loading resume preview…</div>
        )}
        <iframe
          className="v1-resume-frame"
          src={previewUrl || resumeUrl}
          title="Resume preview"
          onLoad={onLoad}
        />
        <div className="v1-modal-footer">
          <div className="v1-modal-actions">
            <span className="v1-modal-note">Download available via Drive</span>
            <a
              className="v1-button ghost"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open full resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
