import { PropsWithChildren } from 'react';

function ContentLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto min-h-full max-w-2xl  px-4 py-8">{children}</div>;
}

export default ContentLayout;
