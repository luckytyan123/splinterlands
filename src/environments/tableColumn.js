export const tournamentColumns = [
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Tournament Id',
        selector: row => row.tournaId,
        sortable: true,
    },
    {
        name: 'Tournament Name',
        selector: row => row.tournaName,
        sortable: true,
    },
    {
        name: 'Player',
        selector: row => row.player,
        sortable: true,
    },
    {
        name: 'Entry Fee',
        selector: row => row.entry_fee,
        sortable: true,
    },
    {
        name: 'Finish',
        selector: row => row.finish,
        sortable: true,
    },
    {
        name: 'Prize',
        selector: row => row.prize,
        sortable: true,
    },
];

export const MockData = [
    {
        date: "01/01/2023",
        tournaId: "123",
        tournaName: "123",
        player: "justenjoy",
        finish: "sad",
        prize: "123",
    },
    {
        date: "01/01/2023",
        tournaId: "123",
        tournaName: "123",
        player: "justenjoy",
        finish: "sad",
        prize: "1234",
    },
    {
        date: "01/01/2023",
        tournaId: "123",
        tournaName: "123",
        player: "justenjoy",
        finish: "sad",
        prize: "1235",
    }

]