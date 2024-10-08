"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, profileSchema, validateWithZodSchema } from "./schemas";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./cloudinary";
import db from "./db";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  redirect("/");
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) return redirect("/profile/create");
  return profile;
};

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

// export const updateProfileImageAction = async (
//   prevState: any,
//   formData: FormData
// ) => {
//   const user = await getAuthUser();
//   try {
//     const image = formData.get("image") as File;
//     const validatedFields = validateWithZodSchema(imageSchema, { image });
//     const fullPath = await uploadImage(validatedFields.image);

//     await db.profile.update({
//       where: {
//         clerkId: user.id,
//       },
//       data: {
//         profileImage: fullPath,
//       },
//     });

//     revalidatePath("/profile");
//     return { message: "Profile image updated successfully" };
//   } catch (error) {
//     return {
//       message: error instanceof Error ? error.message : "An error occurred",
//     };
//   }
// };
