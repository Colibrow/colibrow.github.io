import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { posts } from '../data/posts';
import Giscus from '@giscus/react';

export function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="bg-white rounded-lg shadow-sm p-6">
      <div className="text-sm text-gray-500 mb-2">
        {format(new Date(post.date), 'MMMM d, yyyy')}
      </div>
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="prose max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <div className="mt-12">
        <Giscus
          repo="colibrow/colibrow.github.io"
          repoId="R_kgDOLvKqyA"
          category="General"
          categoryId="DIC_kwDOLvKqyM4CdyVJ"
          mapping="pathname"
          term="Welcome to the discussion!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="en"
          loading="lazy"
        />
      </div>
    </article>
  );
}