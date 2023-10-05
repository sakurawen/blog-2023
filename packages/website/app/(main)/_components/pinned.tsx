'use client';
import { PinnedResponse } from '@/app/_utils';
import { Star } from 'lucide-react';
export function Pinned({ data }: { data: PinnedResponse }) {
  const projectList = data.data.user.pinnedItems.edges;
  return (
    <div className="flex  flex-wrap">
      {projectList.map((proj) => {
        return (
          <a
            key={proj.node.name}
            target="_blank"
            href={proj.node.url}
            className="mb-6 w-full md:w-1/2 md:odd:pr-2 md:even:pl-2"
          >
            <div className="proj-card h-full cursor-default select-none space-y-2 rounded-md ">
              <h2 className="mb-1 text-lg font-bold ">{proj.node.name}</h2>
              <div className="min-h-[2em]">
                <p className="line-clamp-2 text-base text-gray-500">{proj.node.description}</p>
              </div>
              <div className="flex items-center opacity-50">
                <Star className="mr-1 h-4 w-4" />
                <span className="text-xs">{proj.node.stargazerCount}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
