import axios from "axios";

export const buildRequest = async (method, endpoint, params = {}, headers) => {

    const response = await window.fetch(endpoint, {
        method
    })
    if (response.ok) {
        try {
            const responseData = await response.json();
            return responseData;
        }
        catch (e) {
            return Promise.reject(e)
        }
    }
    else {
        return Promise.reject()
    }
}


export const processDataTable = (data) => {
    console.log("TEST");
    data.map(value => {
        if (typeof value !== "undefined") {
            console.log("nice")
        }
    })
}


export const prizeText = (prize) => {
    var extra_prize_text = "0 SPS";
    if (typeof prize !== "undefined" && prize !== null) {
        const extra_prize = JSON.parse(prize);
        extra_prize_text = extra_prize[0].qty + " " + extra_prize[0].type;
    }
    return extra_prize_text;
}