import { useState } from "react"
const initialArticles = ["Lotta al cambiamento climatico", "Tecnologia e privacy", "Crisi economica globale", "Politica Estera"]

function App() {

  const [articles, setArticles] = useState(initialArticles);
  const [newArticles, setNewArticles] = useState("");

  const addArticle = (e) => {
    e.preventDefault();
    const article = newArticles.trim()
    setArticles([...articles, newArticles])
    setNewArticles("")
  }

  const removeArticle = (indiceElemento) => {
    const arrayArticoloClone = articles.filter((element, index) => index != indiceElemento)
    return setArticles(arrayArticoloClone)
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Articoli Di Giornale</h1>
        <ul className="list-group mt-4">
          {
            articles.map((element, index) => {
              return (
                <li key={index} className="list-group-item">{element}
                  <button className="btn btn-danger rounded-circle float-end" onClick={() => removeArticle(index)}><i class="fa-solid fa-xmark"></i></button></li>
              )
            })
          }
        </ul>

        {/* form nuovo articolo */}
        <form onSubmit={addArticle}>
          <input type="text"
            className="form-control mt-3"
            placeholder="Nuovo Articolo"
            value={newArticles}
            onChange={(e) => setNewArticles(e.target.value)} />
          <button className="btn btn-primary mt-2">ADD</button>
        </form>
      </div>


    </>
  )
}

export default App
