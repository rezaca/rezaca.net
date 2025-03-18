import './globals.css';

export const metadata = {
  title: 'Renato Zamudio Candia',
  description: 'Product Leader in AI. Business Strategist. Technology Innovator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}