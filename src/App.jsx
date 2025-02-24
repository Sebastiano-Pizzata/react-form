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
      <div className="container mt-5 p-5">
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
