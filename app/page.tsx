import Card from "./card"
import fs from "fs"

export default function Home() {

  let names: string[] = [];

  for (let i = 0; i < 11; i++) {
    names.push("Element " + i);
  }

  return (
    <main>
      <header>
        <div className="bg-blue-50 py-2 px-4 flex flex-row justify-evenly items-center">
          <a href="" className="text-xl">
            Esteban Kendama
          </a>
          <a href="https://www.youtube.com/@EstebanKendama" className="flex items-center">
            <img className="w-8 mx-4" src="https://www.svgrepo.com/show/13671/youtube.svg" alt="" />
            <p className="text-xl">
              Ma chaîne
            </p>
          </a>
          <a href="" className="text-xl">
            Informations
          </a>
        </div>
      </header>
      <div className='mx-8 place-content-center grid columns-1 sm:grid-cols-auto-fit'>
        {names.map((name, index) => {
          return (
            <Card title={name} videoSrc={"/videos/" + fs.readdirSync("./public/videos").at(index)}></Card>
          )
        })}
      </div>
    </main>
  )
}
