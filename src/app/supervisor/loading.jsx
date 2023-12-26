import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="flex flex-col gap-5 w-full h-[100vh] items-center justify-center">
      <CircularProgress color="secondary" />
      <p>درحال بارگذاری</p>
    </div>
  );
}
