import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Button variant="outline" size="lg" className="capitalize m-8" asChild>
        <Link href="/profile">Profile</Link>
      </Button>
    </div>
  );
}

export default HomePage;
