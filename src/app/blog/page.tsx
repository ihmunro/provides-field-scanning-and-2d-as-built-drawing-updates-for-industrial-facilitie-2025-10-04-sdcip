export default function Blog() {
  return (
    <main className="container mx-auto px-6 py-16 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="prose prose-neutral max-w-none">
        <p className="text-muted-foreground">No posts yet. Add articles here to share updates and insights.</p>
      </div>
    </main>
  );
}
