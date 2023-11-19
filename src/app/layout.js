import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body>{children}</body>
    </html>
  );
}
