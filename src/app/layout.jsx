import "./globals.css";
import AuthProvider from "@/components/layouts/AuthProvider";

export const metadata = {
  title: "پروژه بشل",
  description: "سامانه انبار داری بشل",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
