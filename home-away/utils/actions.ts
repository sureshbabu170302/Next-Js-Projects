/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { profileSchema } from "./schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  "use server";
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return { message: "Porfile created" };
  } catch (error) {
    console.error(error);
    return { message: "An error occured..." };
  }
};
