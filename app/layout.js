
import "./globals.css";

export const metadata = {
  title: "ESI - Together",
  description: "Base de connaissances collaborative pour les nouveaux etudiants de l'ESI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
