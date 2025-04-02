const MovieCard = ({data}) => {

    const {title, overview, vote_average, poster_path} = data
    const posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <>
            <div style={{border: "red 2px solid"}}>
                <h1>
                    {title}
                </h1>
                <img src= {posterImage} alt={title}/>
                <p>{overview}</p>
                <p>{vote_average}</p>
            </div>
    </>
    )
}

export default MovieCard