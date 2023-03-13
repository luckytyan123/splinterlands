import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ApplicationContext } from "../ApplicationContext";
import DataTable from 'react-data-table-component';
import { MockData, tournamentColumns } from "../environments/tableColumn";
import { TournaPlayers } from "../utils/Sample";
import { prizeText, processDataTable } from "../utils/Utils";
import moment from "moment";
import { FetchTournamentsById } from "../api/tournamentAPI";
import { CacheJustEnjoyTournaments } from "../utils/CacheData";

const Profile = () => {
    const [tournaments, setPlayerTournaments, playerTournaments] = useContext(ApplicationContext);
    const [playerData, setPlayerData] = useState([]);
    const urlParams = useParams();
    const user = urlParams.id;

    const PlayerDataHandler = () => {
        console.log("HERE")
        let userTournaments = playerTournaments.filter(({ players }) => players.find(o => o.player == user));
        let currentPlayerData = [];
        userTournaments.map(tournament => {
            let id = tournament.id;
            let tournament_name = tournament.name;
            let player_details = tournament.players.find(o => o.player == user);

            currentPlayerData.push({
                date: moment(tournament.start_date).format("MM/DD/YYYY"),
                tournaId: id,
                tournaName: tournament_name,
                player: player_details.player,
                finish: player_details.finish,
                prize: prizeText(player_details.ext_prize_info)
            })
        })
        setPlayerData(currentPlayerData);

    }

    useEffect(() => {
        if (user !== null && playerTournaments.length > 0) {
            PlayerDataHandler();
        }
    }, [playerTournaments])


    useEffect(() => {
        if (tournaments.length > 0 && playerTournaments.length === 0) {
            FetchTournamentsById(tournaments).then((result) => {
                setPlayerTournaments(result);
            })

        }

    }, [tournaments])

    return (
        <div className="profile-container">
            <Container>
                <DataTable
                    columns={tournamentColumns}
                    data={playerData}
                />
            </Container>
        </div>
    )
}

export default Profile;