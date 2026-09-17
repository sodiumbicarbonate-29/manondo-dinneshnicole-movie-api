const express = require('express')
const app = express()
const PORT = 3000

const meals = [
    {
        id: 1,
        title: "Dead Poets Society",
        genre: "Drama",
        year: 1989
    },
    {
        id: 2,
        title: "Scent of a Woman",
        genre: "Drama",
        year: 1992
    },
    {
        id: 3,
        title: "Still Alice",
        genre: "Drama",
        year: 2014
    }

]

app.get('/api/movies', (req, res) => {
    res.json(meals)
})

app.get('/api/movies/:id', (req, res) => {
    const id = Number(req.params.id)
    const movie = meals.find(movie => movie.id === id)

    if (!movie) {
        return res.status(404).json({ error: true, 
            message: "Movie not found" })
    }

    res.json(movie)
});

app.post('/api/movies', (req, res) => {
    const { title, genre, year } = req.body
    const id = movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1
    const newMovie = { id, title, genre, year }
    movies.push(newMovie)

    res.status(201).json({ 
        message: "Movie added successfully", movie: newMovie 
    })
})

app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
