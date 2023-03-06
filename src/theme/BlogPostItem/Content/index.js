import React from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
export default function BlogPostItemContent({children, className}) {
  const {isBlogPostPage} = useBlogPost();
  const { colorMode } = useColorMode();
  const giscus = (
    <React.Fragment>
      <br></br>
      <Giscus       
        id="general"       
        repo="EolNuha/blog"
        repoId="R_kgDOJCfm8Q="       
        category="General"       
        categoryId="DIC_kwDOJCfm8c4CUsKu"       
        mapping="pathname"       
        reactionsEnabled="1"       
        emitMetadata="0"       
        inputPosition="bottom"       
        theme={colorMode}       
        lang="en"       
        loading="lazy"       
      />
    </React.Fragment>
  )
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}
      itemProp="articleBody">
      <MDXContent>
        {children}
        {isBlogPostPage && giscus}
      </MDXContent>
    </div>
  );
}
