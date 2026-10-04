import { Suspense } from "react";
import { cacheLife } from "next/cache";

async function CachedTime() {
  "use cache";
  cacheLife("minutes");
  return <p>Cached time (use cache): {new Date().toISOString()}</p>;
}

async function DynamicInfo({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <p>Current time at render: {new Date().toISOString()}</p>
      <p>Search query: {q ?? "(none)"}</p>
    </>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Rendering Lab</h1>
      <CachedTime />
      <Suspense fallback={<p>Loading...</p>}>
        <DynamicInfo searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
