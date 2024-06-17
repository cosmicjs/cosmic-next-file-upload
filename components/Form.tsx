/* eslint-disable @next/next/no-img-element */
"use client";

import { FileUpload, FileType } from "@/cosmic/blocks/file-upload/FileUpload";
import { useState } from "react";

function mediaList(file: FileType) {
  return (
    <li key={file.id} className="mb-4">
      <a href={file.url} target="_blank">
        {file.type.indexOf("image") !== -1 ? (
          <img
            className="w-60 h-44 object-cover bg-cover rounded-xl"
            src={`${file.imgix_url}?w=500&auto=format,compression`}
            alt={file.name}
          />
        ) : (
          <span>{file.name}</span>
        )}
      </a>
    </li>
  );
}

export function Form({ className }: { className?: string }) {
  const [uploadedMedia, setUploadedMedia] = useState<FileType[]>([]);
  return (
    <div className={className}>
      <FileUpload
        onComplete={(response) => {
          // Do something with the response here
          if (response.media)
            setUploadedMedia([...response.media, ...uploadedMedia]);
        }}
        className="mb-4"
      />
      {uploadedMedia.length ? (
        <>
          <h4 className="mb-4">Files uploaded</h4>
          <ul className="flex gap-4 flex-wrap">
            {uploadedMedia.map((file: FileType) => {
              return mediaList(file);
            })}
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
