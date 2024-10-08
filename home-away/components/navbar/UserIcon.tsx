/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  console.log(profileImage);
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="img"
        className="w-6 h-6 bg-primary rounded-full text-white"
      />
    );
  }
  return (
    <>
      <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
    </>
  );
}

export default UserIcon;
