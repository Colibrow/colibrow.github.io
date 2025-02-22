import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { posts } from '../data/posts';
import { ArrowRight } from 'lucide-react';

export function PostList() {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-sm text-gray-500 mb-2">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </div>
          <h2 className="text-2xl font-bold mb-2">
            <Link to={`/post/${post.id}`} className="hover:text-blue-600">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <Link
            to={`/post/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Read more <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </article>
      ))}
    </div>
  );
}