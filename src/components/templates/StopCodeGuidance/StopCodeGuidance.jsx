"use client";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import StopGuidanceCodes from "@/constants/StopGuidanceCodes";

export default function StopCodeGuidance() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <p className="text-sm cursor-pointer" onClick={handleClickOpen}>
        <span>
          <AssignmentLateIcon />
        </span>
        <span>راهنمای انتخاب کد توقف</span>
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogContent>
          <div className="px-3 py-6">
            {StopGuidanceCodes.map(({ title, code }) => (
              <p className="my-1" key={code}>
                <span>{code}</span> : <span>{title}</span>
              </p>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="text-sm border-2 border-slate-500 px-3 py-1 rounded-lg"
            onClick={handleClose}>
            بستن
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
