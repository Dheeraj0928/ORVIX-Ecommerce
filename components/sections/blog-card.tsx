import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { getAuthor, getCategory } from "@/content/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const author = getAuthor(post.author);
  const category = getCategory(post.category);

  return (
    <article className="panel-lift flex h-full flex-col p-7">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--signal)]">
        {category ? (
          <Link href={`/blog/category/${category.slug}`}>{category.title}</Link>
        ) : null}
        <span className="text-[var(--line-strong)]">·</span>
        <time
          dateTime={post.date}
          className="normal-case tracking-[-0.01em] text-[var(--text-3)]"
        >
          {new Date(post.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>
      <h2 className="mt-4 text-[1.2rem] font-semibold tracking-[-0.03em] text-[var(--ink)]">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-[var(--signal)]"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed tracking-[-0.015em] text-[var(--text-2)]">
        {post.description}
      </p>
      <p className="mt-6 border-t border-[var(--line)] pt-4 text-[13px] text-[var(--text-3)]">
        By{" "}
        {author ? (
          <Link
            href={`/blog/author/${author.slug}`}
            className="font-medium text-[var(--ink)] hover:underline"
          >
            {author.name}
          </Link>
        ) : (
          "ORVIX"
        )}
      </p>
    </article>
  );
}
