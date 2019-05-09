module.exports = function Client_Side_Title(mod) {

    let title_id = null;
    let debug = false;

    mod.command.add('title', (arg_1, arg_2) => {
        if (arg_1 === 'set') {
            if (arg_2 !== undefined && !isNaN(arg_2)) {
                title_id = Number.parseInt(arg_2);
                mod.send('S_APPLY_TITLE', 3, {
                    gameId: mod.game.me.gameId,
                    title: title_id
                });
                mod.command.message(`Successfully set your title id to ${title_id}.`);
            }
        }
        else if (arg_1 === 'debug') {
            debug = !debug;
            mod.command.message('Debug mode activated please select an title to obtain the id.');
        }
    });

    mod.hook('S_APPLY_TITLE', 3, (event) => {
        if (debug) {
            mod.log(`Your currently selected title id is ${event.title}.`);
        }
    });
};