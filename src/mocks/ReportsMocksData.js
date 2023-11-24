import ReportStatus from "@/constants/ReportStatus";
export const ReportsMocksData = [
  {
    _id: "123456789",
    date: "1402/11/11",
    operator: "رضا رضایی",
    machine: "ME-1",
    startedTime: "08:00",
    endedTime: "15:00",
    stage: "2",
    partsNo: "1 5 12 45 10",
    st: "4",
    noErroredPart: "8",
    erroredPart: "2",
    pauseControl1AndTm: "s1 4",
    pauseControl2AndTm: "s2 3",
    pauseControl3AndTm: "s3 2",
    pauseControl4AndTm: "s4 1",
    status: ReportStatus?.Pending,
  },
  {
    _id: "123456780",
    date: "1402/11/12",
    operator: "علی علیپور",
    machine: "ME-2",
    startedTime: "09:00",
    endedTime: "14:00",
    stage: "5",
    partsNo: "2 245",
    st: "5",
    noErroredPart: "4",
    erroredPart: "1",
    pauseControl1AndTm: "s2 4",
    pauseControl2AndTm: "s3 3",
    pauseControl3AndTm: "s4 2",
    pauseControl4AndTm: "s1 1",
    status: ReportStatus?.Accepted,
  },
  {
    _id: "123456781",
    date: "1402/11/13",
    operator: "حسن حسنپور",
    machine: "ME-6",
    startedTime: "10:00",
    endedTime: "13:00",
    stage: "10",
    partsNo: "6 7 9 123",
    st: "10",
    noErroredPart: "6",
    erroredPart: "0",
    pauseControl1AndTm: "s4 2",
    pauseControl2AndTm: "s2 4",
    pauseControl3AndTm: "s1 1",
    pauseControl4AndTm: "s3 3",
    status: ReportStatus?.Rejected,
  },
];

export default ReportsMocksData;