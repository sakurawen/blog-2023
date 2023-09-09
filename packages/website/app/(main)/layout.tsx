import { PropsWithChildren } from 'react';
import Header from '@/app/_components/Header';
function MainLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-4 min-h-full max-w-2xl px-2 pb-8 sm:px-0">{children}</div>
    </div>
  );
}

export default MainLayout;
