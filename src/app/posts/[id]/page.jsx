// 2. create page to load data for individual posts

// /app/posts/[id]/page.jsx
// params is part of next.js - pull in as params.id from the api

// export default async function PostPage({ params }) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
//   );
//   const post = await response.json(); // parse the response as JSON

//   return (
//     <div>
//       <h1>Post {post.id}</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }
