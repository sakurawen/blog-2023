import { Highlight, themes } from 'prism-react-renderer';
import { ReactNode } from 'react';

type CodeProps = {
  children?: ReactNode;
  className?: string;
};

const Code = ({ className, children }: CodeProps) => {
  const lang = (className?.replace('language-', '') || '') as string;
  const code = children as string;
  if (!lang) {
    return <code>{children}</code>;
  }
  return (
    <div>
      <Highlight code={code} theme={themes.vsDark} language={lang}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="!p-0 !text-sm">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
