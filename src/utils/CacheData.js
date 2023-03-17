import moment from "moment";
import { FetchCompletedTournaments, FetchTournamentsById } from "../api/tournamentAPI";
import { TournaPlayers } from "./Sample";
import { prizeText } from "./Utils";

export const CacheTournaments = (setTournaments) => {
    console.log("Caching Tournaments...");
    FetchCompletedTournaments().then(response => {
        var data = response.data.map(a => a.id);
        setTournaments(data);
        localStorage.setItem("tournaments", JSON.stringify(data));

    })
}

export const CacheJustEnjoyTournaments = (tournaments, setPlayerTournaments) => {
    // console.log("Caching Just Enjoy Tournaments...");
    FetchTournamentsById(tournaments).then((result) => {
        setPlayerTournaments(result);
        let justEnjoyData = [];
        console.log(result);
        result.map(tournament => {
            console.log(tournament);
            let id = tournament.id;
            let tournament_name = tournament.name;
            let entry_fee = tournament.entry_fee;
            let justenjoy_details = tournament.players.find(o => o.player == "justenjoy");
            if(justenjoy_details){
                justEnjoyData.push({
                    date: moment(tournament.start_date).format("MM/DD/YYYY"),
                    tournaId: id,
                    tournaName: tournament_name,
                    player: justenjoy_details.player,
                    entry_fee: entry_fee,
                    finish: justenjoy_details.finish,
                    prize: prizeText(justenjoy_details.ext_prize_info)
                })
            }
           
        })
        localStorage.setItem("justEnjoyTournaments", JSON.stringify(justEnjoyData));
    })

}