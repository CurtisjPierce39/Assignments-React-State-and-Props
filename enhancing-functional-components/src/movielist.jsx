import '/src/movielist.css';
import { useState } from 'react';

const MovieList = () => {
    const movies = [
        {
            id: 1,
            title: 'iRobot',
            summary: "The nine stories are linked by a framing narrative involving a reporter's interview with Susan Calvin, a former robopsychologist at U.S. Robots and Mechanical Men, Inc., whose work involved dysfunctional robots and the problems inherent in human-robot interactions.'",
        },
        {
            id: 2,
            title: 'Pineapple Express',
            summary: "Stoner Dale Denton's (Seth Rogen) enjoyment of a rare strain of marijuana may prove fatal when he drops his roach in a panic after witnessing a murder. Upon learning that the fancy weed can be traced back to them, Dale and his dealer (James Franco) go on the lam, with a dangerous drug lord (Gary Cole) and crooked cop (Rosie Perez) hot on their heels.",
        },
        {
            id: 3,
            title: 'Lord of the Rings',
            summary: 'The story of a young hobbit named Frodo Baggins who inherits a powerful ring, the One Ring, which holds the potential to bring about the dominion of the Dark Lord Sauron; Frodo must journey across Middle-earth with a fellowship of companions to destroy the ring in the fires of Mount Doom, the only place it can be unmade, in order to defeat Sauron and save the world from evil.',
        },
    ];

    const [showSummary, setShowSummary] = useState({});

    const toggleSummary = (id) => {
        setShowSummary((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
        console.log(showSummary)
    };

    return (
        <section>
            <div>
                <h2>Movies</h2>
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <strong>{movie.title}</strong>
                            {showSummary[movie.id] && <p>{movie.summary}</p>}
                            <button onClick={() => toggleSummary(movie.id)}>
                                {showSummary[movie.id] ? 'Hide Summary' : 'Show Summary'}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MovieList;