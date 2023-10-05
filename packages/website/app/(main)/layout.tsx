import { PropsWithChildren } from 'react';
import Header from '@/app/_components/page-header';
function MainLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="mx-auto min-h-full max-w-3xl px-4 pb-8 pt-8">{children}</div>
    </div>
  );
}

export default MainLayout;
