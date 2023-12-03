import { z } from "zod";
export const AddReportFormSchema = z.object({
  operator: z.coerce.string(),
  machine: z.coerce.string(),
  stage: z.coerce.number(),
  partsNo: z.coerce.string(),
  st: z.coerce.number(),
  erroredPart: z.coerce.number(),
  noErroredPart: z.coerce.number(),
  pauseControl1AndTm: z.coerce.string(),
  pauseControl2AndTm: z.coerce.string(),
  pauseControl3AndTm: z.coerce.string(),
  pauseControl4AndTm: z.coerce.string(),
});

export const AddReportFormFields = Object.freeze({
  date: { title: "date", placeholder: "تاریخ" },
  operator: { title: "operator", placeholder: "اپراتور" },
  machine: { title: "machine", placeholder: "ماشین" },
  time: { title: "time", placeholder: "زمان" },
  stage: { title: "stage", placeholder: "مرحله" },
  partsNo: { title: "partsNo", placeholder: "شماره قطعات" },
  st: { title: "st", placeholder: "St(m)" },
  noErroredPart: { title: "noErroredPart", placeholder: "تعداد قطعات سالم" },
  erroredPart: { title: "erroredPart", placeholder: "تعداد قطعات ناسالم" },
  pauseControl1AndTm: {
    title: "pauseControl1AndTm",
    placeholder: "کنترل توفق 1 - T(m)",
  },
  pauseControl2AndTm: {
    title: "pauseControl2AndTm",
    placeholder: "کنترل توفق 2 - T(m)",
  },
  pauseControl3AndTm: {
    title: "pauseControl3AndTm",
    placeholder: "کنترل توفق 3 - T(m)",
  },
  pauseControl4AndTm: {
    title: "pauseControl4AndTm",
    placeholder: "کنترل توفق 4 - T(m)",
  },
  status: {
    title: "status",
    placeholder: "وضعیت",
  },
});

export default AddReportFormFields;
