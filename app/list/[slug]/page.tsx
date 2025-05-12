interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  return (
    <main className="container mx-auto my-10 min-h-screen">
      <h3>Todo List Detail Page Works</h3>
      <p>Details from: {params.slug}</p>
    </main>
  );
}
