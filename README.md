Hey!

This is the dnd-helper app. It's aimed at a very specific group of individuals using very specific tools (possibly only me): Game Masters for online-only Dungeons and Dragons 5E games, who use Discord for audio(/video) and the Fredboat app to run ambiences and soundtracks.

It’s an app built for speed and don’t-make-me-think; as a DM you have enough things going on in your head during a game and a good helper app needs to require as little attention as possible. That being said, it doesn’t function exactly as you might expect; here's a quick overview of the features and their quirks.

Dice Roller - this gives you the result of rolling any number of dice with any number of sides. Delimit the numbers with a space, and submit with a space, ie, '3 4 ' would roll 3d4. The spaces are there to avoid having to hunt for keys or push buttons, which requires attention.

NPC Names - In future, this will be a place to store NPC names for when you need to pull them out of thin air, with an icon to cross them off once you've used them (and possibly another one that throws a modal to record notes as you invent stuff, then saves it automatically for later. But that's v2 stuff).

Notes - this is an easy place to paste the events in the order you plan on them happening (lol good luck) and more details below, so that you can scroll each field as you move through the session and keep an eye on what needs to happen next as well as see more detail about each thing. This is entirely dependent on you structuring your notes that way.

Terrain - this dropdown allows you to choose the current terrain your party is in, and provides you with only the sounds, reagents, and creatures that are appropriate to that terrain.

Search - this uses the open-source dnd5eapi, and allows you [will allow you] to search for weapons, equipment, monsters, and likely a couple of other things I haven't decided yet. To search, you have to match that API's pathname for the item exactly, which is not user-friendly but requires more effort than I want to put in right now to make it user friendly. To use this, put in a category character (chosen arbitrarily by me), followed by the item, ie 'w spear '.

Sounds - this gives you list of tracks. When you click on one, it copies the ';;play' Fredboat command followed by the track URL to your clipboard, so that you can quickly click a track, take it over to Discord, and paste it as a command to Fredboat. This could easily be rewritten to just provide the URL, which could then be pasted in a browser tab - but then it wouldn't play it for your users, and Fredboat doesn't have ads, anyway. Win win.

Search Results - whatever you search for shows up here [older items will scroll down instead of being replaced in future, to be cleared after a certain amount of time or something].

Alchemy - plants, minerals, bits of monster, whatever would commonly show up in the terrain you have selected that might be useful for realistic natural items from the party's surroundings. Great for when you have a druid, ranger, nature cleric, or 'that player'. I also intend this to link to poisons, potions, and other concoctions that users could create from these reagents (again, v2).


Dev Notes:
Please excuse the terrible commit messages; when I have no tickets, I forget to commit, and then when I do commit, I forget what I'm commiting, and since this is for fun I can't commit to committing decent commits with commit messages that aren't non-committal.

Also, this is entirely under construction.