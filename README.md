Hey!

This is the StoryWeaver DM app. It's for Dungeons Masters, to keep everything in one place, expand on the details quickly available to them, and increase the flow of their game.
Personally, I run an online game, using Discord for audio(/video) and a Discord bot controlled by this app for soundtracks.

StoryWeaver is built for speed and don’t-make-me-think; as a DM you have enough things going on in your head during a game and a good helper app needs to require as little attention as possible. That being said, it might not function exactly as you would expect; here's a quick overview of the features and their quirks.

Dice Roller - this gives you the result of rolling any number of dice with any number of sides. Delimit the numbers with a space, and submit with a space, ie, '3 4 ' would roll 3d4. The spaces are there for speed and to avoid having to hunt for keys or push buttons, which requires attention.

Terrain - this dropdown allows you to choose the current terrain your party is in, and provides you with only the sounds, reagents, and creatures that are appropriate to that terrain.

Search - this uses the open-source dnd5eapi, and allows you [will allow you] to search for weapons, equipment, monsters, and likely a couple of other things I haven't decided yet. To search, you have to match that API's pathname for the item exactly, which is not user-friendly but requires more effort than I want to put in right now to make it user friendly. To use this, put in a category character (chosen arbitrarily by me), followed by the item, ie 'w spear '.

Sounds - this gives you list of tracks. When you click on one it sends a request to the connected Discord bot (StoryWeaverAmbiences) to play the track for everyone in the voice channel when you click on it. I am not sure that this is set up for multiple users at once; this part may not work for you yet.

Crafting - plants, minerals, bits of monster, whatever would commonly show up in the terrain you have selected that might be useful for realistic natural items from the party's surroundings. Great for when you have a druid, ranger, nature cleric, or 'that player' who has to interact with everything. Below, there are recipes - intended for poisons and potions but also smithing directions, enchantment instructions, whatever 'recipe' you want to make that can produce something new.


Dev Notes:
Please excuse some of the terrible commit messages; I have tried to improve them since I thought of the possibility of other people seeing my work. However, when I have no tickets, I forget to commit, and then when I do commit, I forget what I'm commiting, and since this was for fun I wouldn't commit to committing decent commits with commit messages that weren't non-committal.

Also, this is still entirely under construction.

Build Notes:

1. Install Node.js (https://nodejs.org/en/download/)
2. Install NPM (https://www.npmjs.com/get-npm)
3. Clone this repository (https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
4. Open a terminal and cd into this directory (https://www.google.com/search?client=firefox-b-1-d&q=navigating+in+the+terminal)
5. From the terminal, once you are in the main directory of the project (called the root) run `npm install`, wait for it to finish, then run `npm run electron-dev`. This will open the app, and everything should work except for Ambiences (I will update this when that is good to go also).

Please open an issue on GitHub if these instructions do not work, and I will look into it! 