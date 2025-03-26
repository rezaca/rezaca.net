import './globals.css';

export const metadata = {
  title: 'Renato Zamudio Candia',
  description: 'Product Leader in AI. Business Strategist. Technology Innovator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}