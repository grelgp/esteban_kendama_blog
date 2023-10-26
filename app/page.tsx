import Card from "./card"
import fs from "fs"

export default function Home() {

  let names: string[] = [];

  for (let i = 0; i < 11; i++) {
    names.push("Element " + i);
  }

  return (
    <main>
      <div className='mx-8 place-content-center grid columns-1 sm:grid-cols-auto-fit'>
        {names.map((name, index) => {
          return (
            <Card key={name} title={name} videoSrc={"/videos/" + fs.readdirSync("./public/videos").at(index)}></Card>
          )
        })}
      </div>
    </main>
  )
}
