"use client";

import React from "react";

function error({ error }: { error: Error }) {
  console.log(error);
  return <div>An error occured...</div>;
}

export default error;
