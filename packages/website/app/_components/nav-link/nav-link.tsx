'use client';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = Omit<LinkProps<any>, 'className'> & {
  className: string | ((active: boolean) => string);
};

export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  const { href, className, ...restProps } = props;
  let isActive = href === pathname;
  let cx: string;
  if (typeof className === 'string') {
    cx = className;
  } else {
    cx = className(isActive);
  }
  return <Link className={cx} href={href} {...restProps}></Link>;
}
