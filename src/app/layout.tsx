import './globals.css';
import localFont from '@next/font/local';

const harmonySans = localFont({
	src: [
		{
			path: '../../public/fonts/harmonySans/HarmonyOS_Sans_SC_Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<meta
					name='description'
					content='社会柴薪的博客'
				/>
				<meta
					content='width=device-width, initial-scale=1'
					name='viewport'
				/>
			</head>
			<body className={harmonySans.className}>
				<div className='min-h-full'>{children}</div>
			</body>
		</html>
	);
}
