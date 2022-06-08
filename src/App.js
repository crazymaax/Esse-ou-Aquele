import { useEffect, useState } from "react";
import { useCat } from "./providers/cat";
import { generateCatImage } from "./services/cat";
import "./style/reset.scss"
import "./style/style.scss"

function App() {

  const { firstImage, setFirstImage, secondImage, setSecondImage } = useCat()
  const [isLoading, setIsLoading] = useState(true)

  const generateImages = async () => {
    const first = await generateCatImage()
    const second = await generateCatImage()
    setFirstImage(first)
    setSecondImage(second)
    setIsLoading(false)
  }

  useEffect(() => {
    generateImages()
  }, [])

  const generateNewImage = async (message, id) => {
    setIsLoading(true)
    generateImages()
    if (message = "Esse!") {
      //Colocar a lógica onde soma a pontuação para esse ID
    } else if (message = "Aquele!") {
      //Colocar a lógica onde soma a pontuação para esse ID
    }
  }


  return (
    <>
      <header>
        <h1>Esse ou Aquele?</h1>
        <h2>Escolha o gatinho mais fofinho 🐈</h2>
      </header>
      <main>
        {isLoading === false ? (
          <>
            <div>
              <img src={firstImage.url} alt="" id={firstImage.id} />
              <button onClick={() => generateNewImage("Esse!", firstImage.id)}>Esse!</button>
            </div>
            <span>OU</span>
            <div>
              <img src={secondImage.url} alt="" id={secondImage.id} />
              <button onClick={() => generateNewImage("Aquele!", secondImage.id)}>Aquele!</button>
            </div>
          </>
        ) : (
          <h3>Carregando...</h3>
        )}
      </main>
      <article>
        <h3>Um fato sobre gatos</h3>
        <p></p>
        <button>Quero saber outro!</button>
      </article>

      <h2>Top 10</h2>
      <ul>
        <li></li>
      </ul>

      <footer>
        <h4>Redes Sociais</h4>
        <ul></ul>
      </footer>
    </>
  );
}

export default App;
