"use server";
import { cosmic } from "@/cosmic/client";

async function uploadFile(file: any) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const media = { originalname: file.name, buffer };
  await cosmic.media.insertOne({
    media,
  });
}
export const uploadAllFiles = async (formData: any) => {
  try {
    const files = formData.getAll("files");
    const addAllFiles = files.map((file: any) => uploadFile(file));
    await Promise.all(addAllFiles).then((values) => {
      console.log(values);
    });
    return { success: true };
  } catch (e) {
    console.log("Image Upload failed", e);
    return { error: true };
  }
};
