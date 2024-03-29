import localFont from 'next/font/local';
import TopLoader from 'nextjs-toploader';
import 'tailwindcss/tailwind.css';
import './globals.css';

const harmonySans = localFont({
  src: [
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/vercel.svg" />
        <meta name="description" content="大文豪的博客" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={harmonySans.className}>
        <TopLoader color="#b3c4b3" />
        <div className="relative min-h-full">{children}</div>
      </body>
    </html>
  );
}
