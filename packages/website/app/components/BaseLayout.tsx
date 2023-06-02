import { PropsWithChildren } from 'react';
import cx from 'clsx';

type BaseLayoutProps = PropsWithChildren<{
  className?: string;
}>;

export default function BaseLayout({ children, className }: BaseLayoutProps) {
  return <div className={cx('relative mx-auto mt-4 min-h-full max-w-xl px-2 pb-8 ', className)}>{children}</div>;
}
