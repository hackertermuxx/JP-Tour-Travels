import { BlogCard } from "./BlogCard";

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  image_url?: string;
  author?: string;
  date?: string;
  tags?: string[];
}

interface BlogGridProps {
  posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
