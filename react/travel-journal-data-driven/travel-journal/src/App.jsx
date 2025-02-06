import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {
  const entryArray = data.map((entry) => {
    return <Entry 
      key={entry.id}
      {...entry}
      /* img={{
        src: ele.img.src,
        alt: ele.img.alt
      }}
      title= {ele.title}
      country= {ele.country}
      googleMapsLink= {ele.googleMapsLink}
      dates= {ele.dates}
      text= {ele.text} */
    />
  })
  return (
    <>
      <Header/>
      <main className="container">
        {entryArray}
      </main>
    </>
  )
}

