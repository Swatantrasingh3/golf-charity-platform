export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "white", color: "black" }}>
        {children}
      </body>
    </html>
  );
}
