'use strict';

class AutoGuildQuest {
    constructor(mod) {
        this.registerCommands(mod);

        mod.hook('S_UPDATE_GUILD_QUEST_STATUS', 1, (event) => {
            if (event.targets[0].completed == event.targets[0].total) {
                setTimeout(() => { mod.send('C_REQUEST_FINISH_GUILD_QUEST', 1, { quest: event.quest }) }, 500);
                setTimeout(() => { mod.send('C_REQUEST_START_GUILD_QUEST', 1, { questId: event.quest }) }, 1000);
            }
        });
    }

    registerCommands(mod) {
        mod.command.add('gq', {
            '$none': () => {
                mod.settings.enabled = !mod.settings.enabled;
                mod.command.message(`${mod.settings.enabled ? 'En' : 'Dis'}abled`);
            },
            '$default': () => {
                mod.command.message(`Invalid argument. Usage : gq`);
            }
        });
    }
}

module.exports = { NetworkMod: AutoGuildQuest };