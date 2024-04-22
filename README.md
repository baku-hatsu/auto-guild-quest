### TERA Auto Guild Quest (MT: The Dream)

This mod runs on default in-launcher Toolbox.

## Version 3.0.2

Create two files in `toolbox/data/definitions`
- C_REQUEST_FINISH_GUILD_QUEST.1.def that contains one line `int32 quest`.
- C_REQUEST_START_GUILD_QUEST.1.def that contains one line `int32 questId`.

Create one file in `toolbox/data/opcodes`
- protocol.376012.map that contains two lines `C_REQUEST_FINISH_GUILD_QUEST = 41778` and `C_REQUEST_START_GUILD_QUEST = 30633`.