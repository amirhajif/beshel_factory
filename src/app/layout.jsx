import "./globals.css";

export const metadata = {
  title: "پروژه بشل",
  description: "سامانه انبار داری بشل",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
