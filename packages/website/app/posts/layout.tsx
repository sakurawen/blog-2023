import { PropsWithChildren } from 'react';

export default function PostsLayout({ children }: PropsWithChildren) {
  return <div className="relative mx-auto mt-4 min-h-full max-w-xl px-2 pb-8 ">{children}</div>;
}

