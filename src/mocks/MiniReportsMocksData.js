import ReportStatus from "@/constants/ReportStatus";
export const MiniReportsMocksData = [
  {
    id: "123456789",
    date: "1402/11/11",
    operator: "رضا رضایی",
    machine: "ME-1",
    status: ReportStatus?.Accepted?.title,
    dummy: "",
  },
  {
    id: "123456780",
    date: "1402/11/12",
    operator: "علی علیپور",
    machine: "ME-2",
    status: ReportStatus?.Rejected?.title,
    dummy: "",
  },
  {
    id: "123456781",
    date: "1402/11/13",
    operator: "حسن حسنپور",
    machine: "ME-3",
    status: ReportStatus?.Pending?.title,
    dummy: "",
  },
  {
    id: "123456782",
    date: "1402/11/11",
    operator: "رضا رضایی",
    machine: "ME-4",
    status: ReportStatus?.Accepted?.title,
    dummy: "",
  },
  {
    id: "123456783",
    date: "1402/11/12",
    operator: "علی علیپور",
    machine: "ME-5",
    status: ReportStatus?.Rejected?.title,
    dummy: "",
  },
  {
    id: "123456784",
    date: "1402/11/13",
    operator: "حسن حسنپور",
    machine: "ME-6",
    status: ReportStatus?.Pending?.title,
    dummy: "",
  },
];

export default MiniReportsMocksData;
