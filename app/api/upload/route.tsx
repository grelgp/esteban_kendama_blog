import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from 'sqlite';
import config from '../config.json' assert {type: 'json'};

export async function POST(request: NextRequest) {

  const pwd = request.headers.get("Auth");
  if (!pwd) return NextResponse.json(
    { error: "Admin password required." },
    { status: 400 }
  );
  
  if (config.adminPassword != pwd) return NextResponse.json(
    { error: "Wrong admin password." },
    { status: 400 }
  );

  const formData = await request.formData();

  const file = formData.get("video") as Blob | null;
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/videos`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  let name = formData.get("name");

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${name?.toString().replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);

    const db = await open({
      filename: './database.db',
      driver: sqlite3.cached.Database
    })

    await db.run("INSERT INTO videos (name, path) VALUES (?, ?)", name, filename);

    return NextResponse.json({ fileUrl: `public${relativeUploadDir}/${filename}` });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}