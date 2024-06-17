/* eslint-disable @next/next/no-img-element */
"use client";

import { FileUpload } from "@/cosmic/blocks/file-upload/FileUpload";
import { useState } from "react";

function mediaList(file: any) {
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

export function Form() {
  const [uploadedMedia, setUploadedMedia] = useState<any>([]);
  return (
    <div className="m-4">
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
            {uploadedMedia.map((file: any) => {
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