import { useState } from "react"
const initialArticles = ["Lotta al cambiamento climatico", "Tecnologia e privacy", "Crisi economica globale"]

function App() {

  const [articles, setArticles] = useState(initialArticles);
  const [newArticles, setNewArticles] = useState("");

  const addArticle = (e) => {
    e.preventDefault();
    const article = newArticles.trim()
    setArticles([...articles, newArticles])
    setNewArticles("")
  }
  return (
    <>
      <div>
        <h1>Articoli Di Giornale</h1>
        <ul className="list-group">
          {
            articles.map((element, index) => {
              return (
                <li key={index} className="list-group-item">{element}</li>
              )
            })
          }
        </ul>

        {/* form nuovo articolo */}
        <form onSubmit={addArticle}>
          <input type="text"
            className="form-control"
            placeholder="Nuovo Articolo"
            value={newArticles}
            onChange={(e) => setNewArticles(e.target.value)} />
        </form>
      </div>


    </>
  )
}

export default App
