import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ApplicationContext } from "../ApplicationContext";
import DataTable from 'react-data-table-component';
import { MockData, tournamentColumns } from "../environments/tableColumn";
import { TournaPlayers } from "../utils/Sample";
import { prizeText, processDataTable } from "../utils/Utils";
import moment from "moment";
import { FetchTournamentsById } from "../api/tournamentAPI";
import { CacheJustEnjoyTournaments, CacheTournaments } from "../utils/CacheData";
import { ExportToExcel } from "../utils/ExportToExcel";

const Home = () => {
    const [tournaments, setTournaments, playerTournaments, setPlayerTournaments] = useContext(ApplicationContext);
    const [playerData, setPlayerData] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const urlParams = useParams();
    const user = urlParams.id;
    const fileName = "justenjoy_spltournaments";

    const PlayerDataHandler = () => {
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
        if (localStorage.getItem("justEnjoyTournaments") !== null) {
            setPlayerData(JSON.parse(localStorage.getItem("justEnjoyTournaments")))
        }
    }, [localStorage.getItem("justEnjoyTournaments")])

    const refreshHandler = () => {
        localStorage.removeItem("justEnjoyTournaments");
        localStorage.removeItem("tournaments");
        setTournaments([]);
        setPlayerData([]);
        CacheTournaments(setTournaments);
    }


    return (
        <div className="profile-container">
            <Container fluid>
                <div className="btn-actions">
                    <Button className="float-right float-right" variant="outline-primary" onClick={refreshHandler}>Refresh Data</Button>
                    <ExportToExcel apiData={playerData} fileName={fileName} />
                </div>
                <DataTable
                    columns={tournamentColumns}
                    data={playerData}
                />
            </Container>
        </div>
    )
}

export default Home;