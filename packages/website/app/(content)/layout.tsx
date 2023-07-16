import { PropsWithChildren } from 'react';

function ContentLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto mt-4 min-h-full max-w-2xl px-2 pb-8">{children}</div>;
}

export default ContentLayout;
