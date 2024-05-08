import { Post } from "../../components/post";
import Image from 'next/image'

async function getBlogPosts() {
  const postsResponse = await fetch(
    "http://192.168.101.101:3000/sensorData",
    { cache: "force-cache" }
  );

  console.log("Refetching posts");

  return postsResponse.json();
}

export default async function Page() {
  const posts = await getBlogPosts();

  console.log("Rerendering Blog Component");

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-4xl font-bold">Member Info</h1>
      <div className="flex    flex-wrap h-full w-full">
        {posts.map((post: any) => (
          <Post key={post.DataID} post={post} />
          
        ))}
      </div>
    </div>
  );
}
