import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
export default function BlogPostItemFooter() {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {tags, title, editUrl, hasTruncateMarker} = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  const { colorMode } = useColorMode();
  const giscus = (
    <React.Fragment>
      <br></br>
      <Giscus       
        id="general"       
        repo="EolNuha/blog"
        repoId="R_kgDOJCfm8Q"       
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
  if (!renderFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(
        'row docusaurus-mt-lg',
        isBlogPostPage && styles.blogPostFooterDetailsFull,
      )}>
      {tagsExists && (
        <div className={clsx('col', {'col--9': truncatedPost})}>
          <TagsListInline tags={tags} />
        </div>
      )}
      
      {isBlogPostPage && giscus}

      {isBlogPostPage && editUrl && (
        <div className="col margin-top--sm">
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {truncatedPost && (
        <div
          className={clsx('col text--right', {
            'col--3': tagsExists,
          })}>
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
