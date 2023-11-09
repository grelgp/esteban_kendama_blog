import Card from "./card"
import sqlite3 from "sqlite3";
import { open } from 'sqlite'

export default async function Home() {

  let videos: {name: string, path: string}[] = [];
  
  const db = await open({
    filename: './database.db',
    driver: sqlite3.cached.Database
  })

  videos = await db.all('SELECT name, path, difficulty FROM videos')

  return (
    <main>
      <div className='mx-8 place-content-center grid columns-1 sm:grid-cols-auto-fit'>
        {videos.map((video, index) => {
          return (
            <Card key={video.name} title={video.name} videoSrc={"/videos/" + video.path}></Card>
          )
        })}
      </div>
    </main>
  )
}
