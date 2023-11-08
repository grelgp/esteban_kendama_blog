"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function FileUploader() {
  const [videoUrl, setVideoUrl] = useState("/videos/airplane.mp4");

  const onImageFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      console.warn("files list is empty");
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.error("something went wrong, check your console.");
        return;
      }

      const data: { fileUrl: string } = await res.json();

      setVideoUrl(data.fileUrl);
    } catch (error) {
      console.error("something went wrong, check your console.");
    }

    /** Reset file input */
    e.target.type = "text";
    e.target.type = "file";
  };

  return (
    <div
      className="flex-col justify-center h-96 space-y-4 text-center w-full"
    >
      <video className="h-full w-full">
        <source src={videoUrl} />
      </video>
      

      <form action="/api/upload" method="post" className="space-y-4" encType="multipart/form-data">
        <input
          className=""
          type="file"
          name="video"
          //onChange={onImageFileChange}
        />
        <div className="">
          <label>Nom : </label>
          <input className="border-1 shadow-sm rounded-2xl" type="text" name="name" id="name" required />
        </div>
        <div className="">
          <input className="border-2 border-gray-600 rounded-2xl w-36" type="submit" value="Envoyer"/>
        </div>
      </form>
    </div>
  );
}