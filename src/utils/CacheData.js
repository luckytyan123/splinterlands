import moment from "moment";
import { FetchCompletedTournaments, FetchTournamentsById } from "../api/tournamentAPI";
import { prizeText } from "./Utils";

export const CacheTournaments = (setTournaments) => {
    console.log("Caching Tournaments...");
    FetchCompletedTournaments().then(response => {
        var data = response.data.map(a => a.id);
        setTournaments(data);
        localStorage.setItem("tournaments", JSON.stringify(data));
        
    })
}

export const CacheJustEnjoyTournaments = (tournaments) => {
    console.log("Caching Just Enjoy Tournaments...");
    let justEnjoyData = [];
    tournaments.map(tournament => {
        console.log(tournament);
        let id = tournament.id;
        let tournament_name = tournament.name;
        let justenjoy_details = tournament.players.find(o => o.player == "justenjoy");
        
        justEnjoyData.push({
            date: moment(tournament.start_date).format("MM/DD/YYYY"),
            tournaId: id, 
            tournaName: tournament_name, 
            player: justenjoy_details.player,
            finish: justenjoy_details.finish,
            prize: prizeText(justenjoy_details.ext_prize_info)
        })

    })
    localStorage.setItem("justEnjoyTournaments", JSON.stringify(justEnjoyData));
    
}