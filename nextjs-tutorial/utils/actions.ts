"use server";

export const createUser = async (data: FormData) => {
  "use server";
  const firstName = data.get("firstName") as string;
  const lastName = data.get("lastName") as string;
  console.log(`creating user - ${firstName} ${lastName}`);
};
