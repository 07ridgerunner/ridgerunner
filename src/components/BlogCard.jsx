import Link from 'next/link';

export function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${post.image}")` }} />
        <span className="absolute left-3 top-3 rounded-full bg-ridge-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ridge-navy">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold leading-tight text-ridge-navy">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-5 text-sm">
          <span className="text-slate-500">By {post.author}</span>
          <span className="inline-flex items-center gap-2 font-semibold text-ridge-navy">
            Read <i className="fa-solid fa-arrow-right text-ridge-yellow-dark transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
