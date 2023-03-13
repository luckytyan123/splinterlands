import { CompletedTournamentsUrl, TournamentByIdUrl } from "../environments/endpoints";
import axios from "axios";
import { buildRequest } from "../utils/Utils";


export const FetchCompletedTournaments = () => {
    return new Promise((resolve, reject) => {
        axios.get(CompletedTournamentsUrl).then((response) => {
            resolve(response)
        })
            .catch(error => reject(error));
    })
}

// export const FetchTournamentsById = (id) => {
//     return new Promise((resolve, reject) => {
//         let url = `${TournamentByIdUrl}?id=${id}`;
//         buildRequest("GET", url).then((response) => {
//             resolve(response)
//         })
//             .catch(error => reject(error));
//     })
// }

export const FetchTournamentsById = (tournaments) => {
    console.log("gere")
    let Promises = tournaments.map(value => {
        let url = `${TournamentByIdUrl}?id=${value}`;
        return buildRequest("GET", url);
    })
    return Promise.all(Promises);
}

