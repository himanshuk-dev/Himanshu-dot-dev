import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

const ResumeModal = ({
  isOpen,
  isLoading,
  onClose,
  onLoad,
  resumeUrl,
  previewUrl,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="resume-dialog-title"
      BackdropProps={{ className: "v1-modal-overlay" }}
      PaperProps={{ className: "v1-modal" }}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle
        className="v1-modal-header"
        id="resume-dialog-title"
        component="div"
      >
        <Typography component="h3">Resume Preview</Typography>
        <IconButton
          type="button"
          className="v1-modal-close"
          onClick={onClose}
          aria-label="Close resume preview"
          disableRipple
        >
          ×
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {isLoading && (
          <Box className="v1-modal-loading">Loading resume preview…</Box>
        )}
        <Box
          component="iframe"
          className="v1-resume-frame"
          src={previewUrl || resumeUrl}
          title="Resume preview"
          onLoad={onLoad}
        />
      </DialogContent>
      <DialogActions className="v1-modal-footer">
        <Box className="v1-modal-actions">
          <Typography className="v1-modal-note" component="span">
            Download available via Drive
          </Typography>
          <Button
            className="v1-button ghost"
            component="a"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            disableElevation
            disableRipple
          >
            Open full resume
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ResumeModal;
