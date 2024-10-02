import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block m-5">
        Home
      </Link>
    </div>
  );
}

export default ContactPage;
