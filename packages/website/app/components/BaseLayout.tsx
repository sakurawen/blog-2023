import { PropsWithChildren } from 'react';
import cx from 'clsx';

type BaseLayoutProps = PropsWithChildren<{
  className?: string;
}>;

const BaseLayout = ({ children, className }: BaseLayoutProps) => {
  return <div className={cx('relative max-w-xl mt-4 mx-auto min-h-full px-2 pb-8 ', className)}>{children}</div>;
};

export default BaseLayout;
