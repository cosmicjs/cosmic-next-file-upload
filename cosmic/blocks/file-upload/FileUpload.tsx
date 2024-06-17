"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadAllFiles } from "@/cosmic/blocks/file-upload/actions";
import { Button } from "@/cosmic/elements/Button";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

export function FileUpload({ className }: { className?: string }) {
  const onDrop = useCallback((acceptedFiles: any) => {
    setFilesInQueue(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [filesInQueue, setFilesInQueue] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  const files = filesInQueue.map((file: any) => (
    <li key={file.path} className="mb-4">
      {file.type.indexOf("image") !== -1 ? (
        <img
          className="w-60 h-44 object-cover bg-cover rounded-xl"
          src={`${URL.createObjectURL(file)}`}
        />
      ) : (
        <span>{file.name}</span>
      )}
    </li>
  ));

  async function handleSubmit() {
    setUploading(true);
    setUploadError(false);
    setUploadSuccess(false);
    let formData = new FormData();
    filesInQueue.map((file: any) => {
      formData.append("files", file, file.name);
    });
    const uploadResponse = await uploadAllFiles(formData);
    setUploading(false);
    if (uploadResponse.error) {
      setUploadError(true);
    } else {
      setUploadSuccess(true);
    }
    setFilesInQueue([]);
    setTimeout(() => setUploadSuccess(false), 3000);
  }
  return (
    <div className={className}>
      <div
        {...getRootProps()}
        className="border border-dashed text-center p-20 rounded-xl mb-4 cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {!uploadSuccess && files.length ? (
        <>
          <h4 className="mb-4">Ready to upload</h4>
          <ul className="flex gap-4 flex-wrap">{files}</ul>
          <Button onClick={handleSubmit} type="submit" disabled={uploading}>
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              `Upload files`
            )}
          </Button>
        </>
      ) : (
        ""
      )}
      {uploadSuccess ? (
        <div className="border flex border-green-600 dark:border-green-400 dark:text-green-400 p-4 text-green-600 rounded-xl">
          <CheckCircle className="relative top-1 mr-4 h-4 w-4 text-green-500" />{" "}
          Upload success!
        </div>
      ) : (
        ""
      )}
      {uploadError ? (
        <div className="border flex border-red-600 dark:border-red-400 dark:text-red-400 p-4 text-red-600 rounded-xl">
          <XCircle className="relative top-1 mr-4 h-4 w-4 text-red-500" />{" "}
          Upload error!
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
