// 1 vote 

// const vote = ['Alice', 'Bob', 'Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie', 'Bob']

// const CounterVote = (vote) => {
//     const Participants = { Alice: 0, Bob: 0, Charlie: 0, All: 0 }
//     for (index of vote) {
//         console.log(vote[index])
//     }
// }
// console.log(CounterVote(vote))


// 2  Vote

// const vote =
//     [['Alice', 'Charlie', 'Bob'],
//     ['Charlie', 'Bob', 'Alice'],
//     ['Bob', 'Charlie', 'Alice'],
//     ['Charlie', 'Alice', 'Bob'],
//     ['Alice', 'Bob', 'Charlie']]


// const CounterVote = (vote) => {
//     const Participants = {
//         Alice: { value: 0, eliminated: false }, Bob: { value: 0, eliminated: false }, Charlie: { value: 0, eliminated: false }
//     }

//     let Winner = null
//     let Min = 10000
//     let deleted = null

//     for (let i = 0; i < vote.length; i++) {
//         Participants[vote[i][0]].value = Participants[vote[i][0]].value + 1
//     }

//     for (key in Participants) {
//         Participants[key].value < Min && (Min = Participants[key].value)
//     }

//     for (key in Participants) {
//         Participants[key].value === Min && (Participants[key].eliminated = true) && (deleted = key) && delete Participants[key]
//     }

//     for (let i = 0; i < vote.length; i++) {
//         console.log([vote[i]][0])
//         if (vote[i][0] === deleted) {
//             Participants[vote[i][1]].value = Participants[vote[i][1]].value + 1
//         }
//     }
//     for (key in Participants) {
//         if (Participants[key].value > Math.floor(vote.length / 2)) {
//             Winner = key + "  win  Hoooo rrrraaa"
//         }
//     }
//     return Winner
// }
// console.log(CounterVote(vote))

