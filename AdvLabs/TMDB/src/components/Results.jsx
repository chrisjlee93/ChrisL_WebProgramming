import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard.jsx";
import ErrorCard from "./Error.jsx";

const Results = ({ query }) => {
    const [movies,    setMovies]    = useState([]);
    const [loading,   setLoading]   = useState(false);
    const [noResults, setNoResults] = useState(false);

    // 1) Fetch “Now Playing” as raw data
    const fetchNowPlaying = useCallback(() => {
        setLoading(true);
        setNoResults(false);

        axios
            .get("https://api.themoviedb.org/3/movie/now_playing", {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
                },
                params: {
                    language: "en-US",
                    page: 1,
                    include_adult: false
                }
            })
            .then(res => {
                const results = res.data.results || [];
                setMovies(results);
            })
            .catch(err => {
                console.error("Now Playing error:", err);
                setMovies([]);
                setNoResults(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // 2) On mount, load “Now Playing”
    useEffect(() => {
        fetchNowPlaying();
    }, [fetchNowPlaying]);

    // 3) Whenever `query` changes, either re‑load Now Playing or run the debounced search
    useEffect(() => {
        if (!query) {
            fetchNowPlaying();
            return;
        }

        const timer = setTimeout(() => {
            setLoading(true);
            axios
                .get("https://api.themoviedb.org/3/search/movie", {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
                    },
                    params: {
                        query,
                        include_adult: false,
                        language: "en-US",
                        page: 1
                    }
                })
                .then(res => {
                    const results = res.data.results || [];
                    setMovies(results);
                    setNoResults(results.length === 0);
                })
                .catch(err => {
                    console.error("Search error:", err);
                    setMovies([]);
                    setNoResults(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 500);

        return () => clearTimeout(timer);
    }, [query, fetchNowPlaying]);

    return (
        <div style={{ padding: 16, textAlign: "center" }}>
            <h1 >{query ? `Results for “${query}”` : "Now Playing"}</h1>

            {loading ? (
                <p>Loading…</p>
            ) : noResults ? (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 16,
                            justifyContent: "center"
                        }}
                    >
                        <ErrorCard search={query} />
                    </div>

            ) : (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        justifyContent: "center"
                    }}
                >
                    {movies.map(movie => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Results;
