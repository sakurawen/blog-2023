import { Pinned } from './_components/pinned';
import { getPinnedProject } from '@/app/_utils';

export const metadata = {
  title: "Wen's Blog",
};

export default async function Home() {
  const pinned = await getPinnedProject();
  return (
    <div className="mx-auto">
      <Pinned data={pinned} />
    </div>
  );
}
