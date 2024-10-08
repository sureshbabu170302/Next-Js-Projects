"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch both users and posts
async function fetchUsersAndPosts() {
  // Start fetching users and posts at the same time
  const [usersResponse, postsResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);

  // Check if both responses are OK
  if (!usersResponse.ok || !postsResponse.ok) {
    throw new Error("Error fetching data");
  }

  // Parse the JSON data
  const users = await usersResponse.json();
  const posts = await postsResponse.json();

  // Return both users and posts
  return { users, posts };
}

function Users() {
  // Use useQuery to fetch both users and posts
  const { data, error, isLoading } = useQuery({
    queryKey: ["usersAndPosts"], // Unique key for the query
    queryFn: fetchUsersAndPosts, // Function to fetch data
  });

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (error instanceof Error)
    return <p>Error fetching data: {error.message}</p>;

  // Destructure the data
  const { users, posts } = data;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
