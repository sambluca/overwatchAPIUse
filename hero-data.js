const apiCall = require('./api-call');

const args = process.argv.slice(2);
const username = args[0] || 'Trammy123';
const platform = args[1] || 'psn';

module.exports = () => {
    return apiCall(username, platform)
        .then((result) => {
            if (platform == 'psn' || platform == 'xbl') {
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
                const userStats = result.any.stats;
                const userAchievements = result.any.achievements;
        
                return {
                    username: username,
                    platform: platform,
                    userStats,
                    userAchievements,
                    heroes
                }

            } else {
                const quickplayTimePlayed = result.eu.heroes.playtime.quickplay;
                const competitiveTimePlayed = result.eu.heroes.playtime.competitive;
                const competitiveStats = result.eu.heroes.stats.competitive;
                const quickplayStats = result.eu.heroes.stats.quickplay;

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
                const userStats = result.eu.stats;
                const userAchievements = result.eu.achievements;

                return {
                    username: username,
                    platform: platform,
                    userStats,
                    userAchievements,
                    heroes
                }

            }

        }).catch(function () {

            console.log('arguments')
            console.log(arguments)
        })

}