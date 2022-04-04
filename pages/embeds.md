# Embeds

You can use the embed creator in the settings menu located at the lower right corner of a call to generate embed URLS. Sometimes you may want to be able to edit these embeds after the fact though, so it may be helpful to know how they work.

Embed URLS are constructed as follows:

`https://ping.gg/call/<slug>/embed?<query1>&<query2>...`

Valid query parameters are:

- `view=<userId>` -- you can include multiple of these to add multiple users
- `audio=on` -- to enable audio (will default to no audio if this is not included)
- `spacing=<number>` -- to set the spacing between users (defaults to 0)
- `nameplates=on` -- to show nameplates on each user in the embed

## OBS Setup

You can use Ping embeds as browser sources inside of OBS.

### Tips & Tricks:

If you are planning to have your embeds in multiple scenes in OBS, It is recommended to create a scene that's just the embed, and then use a "Scene" source with that scene instead of the browser sources, so that OBS only needs to pull the video feed once.
