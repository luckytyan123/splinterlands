import moment from "moment/moment";
import React, { useState, createContext, useEffect } from "react";
import { FetchTournamentsById } from "./api/tournamentAPI";
import { CacheTournaments, CachePlayerTournaments } from "./utils/CacheData";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
    const [tournaments, setTournaments] = useState([]);
    const [playerTournaments, setPlayerTournaments] = useState([]);


    useEffect(() => {
        if (localStorage.getItem("tournaments") === null) {
            CacheTournaments(setTournaments);
        }
        else{
            setTournaments(JSON.parse(localStorage.getItem("tournaments")));
        }
    }, [])



    //Perform every hour
    useEffect(() => {
        const interval = setInterval(() => {
            if (moment().format("mm") === "00") {
                CacheTournaments(setTournaments);
            }
        }, 60000);
        return () => clearInterval(interval);
    }, [])



    return (
        <ApplicationContext.Provider value={[
            tournaments,
            setTournaments,
            playerTournaments,
            setPlayerTournaments
        ]}>
            {props.children}
        </ApplicationContext.Provider>
    )
}