import Link from 'next/link';
import { ComponentProps } from 'react';

export default function ButtonLink(linkProps: ComponentProps<typeof Link>) {
  return (
    <Link
      {...linkProps}
      className="rounded-full bg-black text-white py-1 px-3 inline-block"
    />
  );
}
