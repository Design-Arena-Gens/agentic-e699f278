import './globals.css';

export const metadata = {
  title: 'Wyoming LLC Handbook',
  description: 'Comprehensive, investor-ready briefing on forming and operating a Wyoming limited liability company.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
