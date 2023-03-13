import React, { useContext, useEffect } from "react";
import { FetchCompletedTournaments } from "../api/tournamentAPI";
import { ApplicationContext } from "../ApplicationContext";

const Tournaments = () => {
    const [tournaments, setTournaments] = useContext(ApplicationContext);


    useEffect(() => {
    }, []);

    return (
        <div className="tournaments-container">

        </div>
    )
}

export default Tournaments;