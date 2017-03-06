module.exports = (data) => {
     console.log(data.userStats.quickplay.overall_stats);
    var content = `<style>
            .heroStats {
                border: 1px solid red;
                margin: 50px 50px 50px 50px;
                height: 100px;
            }

            .heroName {
                width: 15%;
                border: 1px solid red;
                height:100%;
                display: inline-block;
                text-align: center;
            }
            .stats{
                display: inline-block;
            }

            .username {
                text-align: center;
            }
        </style><h1 class="username">${data.username}</h1>
        <p class="username">Time played: ${data.userStats.quickplay.game_stats.time_played} hours || Level: ${data.userStats.quickplay.overall_stats.prestige}${data.userStats.quickplay.overall_stats.level} || Comp Rank: ${data.userStats.quickplay.overall_stats.comprank}</p>`
    for (var i = 0; data.heroes.length > i; i++) {
        var display = data.heroes[i]
        content = content + `
        <div class="heroStats">
        <div class="heroName"><h1>${display.name}</h1></div>
        <div class="stats">QP Time Played: ${display.playtime.quickplay}</div>
        <div class="stats">Deaths: ${display.stats.quickplay.general_stats.deaths}</div>
        <div class="stats">Games Won: ${display.stats.quickplay.general_stats.games_won}</div>
        <div class="stats">Damage Done: ${display.stats.quickplay.general_stats.damage_done}</div>
        <div class="stats">Most Damage Done In 1 Life: ${display.stats.quickplay.general_stats.damage_done_most_in_life}</div>
        <div class="stats">Objective Kills: ${display.stats.quickplay.general_stats.objective_kills}</div>
        <div class="stats">Eliminations: ${display.stats.quickplay.general_stats.eliminations}</div>


        </div>
        `;
       
    }
    return content;
}