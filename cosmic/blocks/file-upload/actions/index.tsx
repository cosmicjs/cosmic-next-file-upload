"use server";
import { cosmic } from "@/cosmic/client";

async function uploadFile(file: any) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const media = { originalname: file.name, buffer };
  return await cosmic.media.insertOne({
    media,
  });
}
export const uploadAllFiles = async (formData: any) => {
  try {
    const files = formData.getAll("files");
    const addAllFiles = files.map((file: any) => uploadFile(file));
    let mediaArray: any = [];
    await Promise.all(addAllFiles).then((value) => {
      mediaArray = value;
    });
    const media = mediaArray.map((obj: any) => obj.media);
    return { success: true, media };
  } catch (e) {
    console.log("Image Upload failed", e);
    return { error: true };
  }
};
