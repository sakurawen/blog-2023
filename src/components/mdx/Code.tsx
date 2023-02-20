import HighLight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { ReactNode } from 'react';

type CodeProps = {
	children?: ReactNode;
	className?: string;
};

const Code = ({ className, children }: CodeProps) => {
	const lang = (className?.replace('language-', '') || '') as Language;
	const code = children as string;
	if (!lang) {
		return <code>{children}</code>;
	}
	return (
		<div>
			<HighLight
				{...defaultProps}
				code={code}
				theme={theme}
				language={lang}>
				{({ tokens, getLineProps, getTokenProps }) => (
					<pre className='!p-0 !text-sm'>
						{tokens.map((line, i) => (
							<div
								{...getLineProps({ line })}
								key={i}>
								{line.map((token, key) => (
									<span
										{...getTokenProps({ token })}
										key={key}
									/>
								))}
							</div>
						))}
					</pre>
				)}
			</HighLight>
		</div>
	);
};

export default Code;
