const apiCall = require('./api-call');
// Trammy123
const args = process.argv.slice(2);
const username = args[0] || 'Trammy123';
const platform = args[1] || 'pc';

module.exports = apiCall(username, platform)
    .then((result) => {
        const quickplayTimePlayed = result.any.heroes.playtime.quickplay;
        const competitiveTimePlayed = result.any.heroes.playtime.competitive;

        const competitiveStats = result.any.heroes.stats.competitive;
        const quickplayStats = result.any.heroes.stats.quickplay;


        const heroes = Object.keys(quickplayTimePlayed).map((hero) => {
            return {
                name: hero,
               
                    playtime: {
                        competitive: competitiveTimePlayed[hero],
                        quickplay: quickplayTimePlayed[hero]
                    },
                    stats: {
                        competitive: competitiveStats[hero],
                        quickplay: quickplayStats[hero]
                    }
            }
        });
        // console.log('xxxx: ', JSON.stringify(heroes[0], undefined, 2));
        const userStats = result.any.stats;
        const userAchievements = result.any.achievements;
         console.log('xxxx: ', heroes[0]);
    })

