'use client';
import Giscus from '@giscus/react';

const Commonts = () => {
  return (
    <div className='mt-16'>
      <Giscus
        repo='sakurawen/blog-comments'
        repoId='R_kgDOHhXNkw'
        category='Announcements'
        categoryId='DIC_kwDOHhXNk84CPvWm'
        mapping='pathname'
        strict='0'
        reactionsEnabled='1'
        emitMetadata='0'
        input-position='bottom'
        theme='light_protanopia'
        lang='zh-CN'
      />
    </div>
  );
};
export default Commonts;
