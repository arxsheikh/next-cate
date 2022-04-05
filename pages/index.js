import Link from "next/link";
import fakePosts from "../posts";

export default function Home({ posts }) {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <h2>All Posts</h2>
        <ol>
          {posts.map((post) => (
            <li key={post.Id}>
              <Link href={`/post/${post.Slug}`}>
                <a>{post.Title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = fakePosts;

  return {
    props: { posts }
  };
}
