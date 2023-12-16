import { z } from "zod";

export const AddReportFormSchema = z.object({
  operator: z.coerce.number(),
  standard_time: z.coerce.number(),
  ended_at: z.coerce.string(),
  defective_parts_count: z.coerce.number(),
  intact_parts_count: z.coerce.number(),
  stop_controller_1_code: z.coerce.string(),
  stop_controller_1_time: z.coerce.number(),
  stop_controller_2_code: z.coerce.string(),
  stop_controller_2_time: z.coerce.number(),
  stop_controller_3_code: z.coerce.string(),
  stop_controller_3_time: z.coerce.number(),
  stop_controller_4_code: z.coerce.string(),
  stop_controller_4_time: z.coerce.number(),
});

export const AddReportFormFields = Object.freeze({
  order: { title: "order", placeholder: "شناسه سفارش", listId: "ordersId" },
  ended_at: { title: "ended_at", placeholder: "تاریخ" },
  operator: { title: "operator", placeholder: "شناسه اپراتور" },
  machine: { title: "machine", placeholder: "ماشین", listId: "machinesId" },
  time: { title: "time", placeholder: "زمان" },
  standard_time: { title: "standard_time", placeholder: "St(m)" },
  intact_parts_count: {
    title: "intact_parts_count",
    placeholder: "تعداد قطعات سالم",
  },
  defective_parts_count: {
    title: "defective_parts_count",
    placeholder: "تعداد قطعات ناسالم",
  },
  stop_controller_1_code: {
    title: "stop_controller_1_code",
    placeholder: "کد کنترل توقف 1",
  },
  stop_controller_1_time: {
    title: "stop_controller_1_time",
    placeholder: "زمان کنترل توقف 1",
  },
  stop_controller_2_code: {
    title: "stop_controller_2_code",
    placeholder: "کد کنترل توقف 2",
  },
  stop_controller_2_time: {
    title: "stop_controller_2_time",
    placeholder: "زمان کنترل توقف 2",
  },
  stop_controller_3_code: {
    title: "stop_controller_3_code",
    placeholder: "کد کنترل توقف 3",
  },
  stop_controller_3_time: {
    title: "stop_controller_3_time",
    placeholder: "زمان کنترل توقف 3",
  },
  stop_controller_4_code: {
    title: "stop_controller_4_code",
    placeholder: "کد کنترل توقف 4",
  },
  stop_controller_4_time: {
    title: "stop_controller_4_time",
    placeholder: "زمان کنترل توقف 4",
  },
});

export default AddReportFormFields;
