//1. outputs a list of post titles
// export default async function PostsPage() {
// const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
// const posts = await response.json(); // parse the response as JSON

// return (
//     <div>
//     <h1>Posts</h1>
//     <ul>
//         {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//         ))}
//     </ul>
//     </div>
// );
// }

// 3. Add a query string to sort list

// /app/posts/page.jsx
import Link from "next/link";

export default async function PostListPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // reverse the posts array if the sort parameter is set to descending
  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2>Post List</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> -{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
