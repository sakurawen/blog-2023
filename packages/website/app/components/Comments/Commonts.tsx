'use client';
import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="mt-16">
      <Giscus
        repo="sakurawen/blog-comments"
        repoId="R_kgDOHhXNkw"
        category="Announcements"
        categoryId="DIC_kwDOHhXNk84CPvWm"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        theme="light_tritanopia"
        emitMetadata="0"
        input-position="bottom"
        lang="zh-CN"
      />
    </div>
  );
}
