// Spread and Destructuring  Exercise 

// 1a
const mcuShows = ["Loki", "What If..."];
// 1b
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
// 1c
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"];
// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
    action: "Extraction",
    crime: "The Irishman"
};
2
// 2b
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night In Miami"
};
// 2c
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
};
// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = ["Mickey Mouse Clubhouse", "Sipdey and His Amazing Friends"];
// 3b
const [mickey, spidey] = disneyJunior;
// 3c
console.log(mickey, spidey);

// 4a
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
};
// 4b
const {warMachine, theHulk} = avengers;
// 4c
console.log(warMachine, theHulk);
// 4d
const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
};
// 4e
const {nat, ...others} = moreAvengers;
// 4f
console.log(nat, others);