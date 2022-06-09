import "./style/reset.scss"
import "./style/style.scss"
import { useEffect, useState } from "react";

import { useCat } from "./providers/cat";
import { generateCatImage } from "./services/cat";
import { loadingPhrases, catFacts } from "./services/cat/db"

import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti"

function App() {

  const { firstImage, setFirstImage, secondImage, setSecondImage } = useCat()
  const [isLoading, setIsLoading] = useState(true)
  const [actualFact, setActualFact] = useState("Descubra um fato interessante agora mesmo!")

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

    const randomLoadingTime = Math.floor(Math.random() * (3000 - 1000 + 1000) + 1000)
    console.log(randomLoadingTime)

    setTimeout(() => {

      generateImages()
      if (message = "Esse!") {
        //Colocar a lógica onde soma a pontuação para esse ID
      } else if (message = "Aquele!") {
        //Colocar a lógica onde soma a pontuação para esse ID
      }
    }, randomLoadingTime);
  }

  const generateFact = () => {
    setActualFact(catFacts[Math.floor(Math.random() * catFacts.length)])
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
            <span className="main__spanOr">OU</span>
            <div>
              <img src={secondImage.url} alt="" id={secondImage.id} />
              <button onClick={() => generateNewImage("Aquele!", secondImage.id)}>Aquele!</button>
            </div>
          </>
        ) : (
          <span className="main__spanLoading">{loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]}</span>
        )}
      </main>
      <article>
        <h3>Um fato sobre gatos</h3>
        <div>
          <p className={actualFact === "Descubra um fato interessante agora mesmo!" && "redText"}>{actualFact}</p>
          <button onClick={() => generateFact()}>{actualFact === "Descubra um fato interessante agora mesmo!" ? "Descobrir!" : "Quero saber outro!"}</button>
        </div>
      </article>

{/* A intenção é criar um TOP 10, porém ainda não há conhecimentos suficientes para banco de dados. */}
{/*       <section>
        <h2>Top 10 🏆</h2>
        <ul>
          <li>🥇🥈🥉</li>
        </ul>
      </section> */}

      <footer>
        <h4>Redes Sociais</h4>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/maxmilan/" target="_blank"><TiSocialLinkedinCircular size="34px" /></a>
            <a href="https://github.com/crazymaax" target="_blank" ><TiSocialGithubCircular size="34px" /></a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
