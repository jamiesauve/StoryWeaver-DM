import colors from '../../../styles/colors'
import { placeNames } from '../../../generalData/places'

import wikiEntryTypes from './wikiEntryTypes'

import {
  abundabarEntries,
  dragonFallsEntries,
} from './entryGroups'

const wikiEntries = {
  ...abundabarEntries,
  ...dragonFallsEntries,
  'chinclincha': {
    name: 'chinclincha',
    label: 'Chinclincha',
    placeTags: [
      placeNames.climina
    ],
    titleColor: colors.mountainsTeal,
    type: wikiEntryTypes.place.city,
    paragraphs: [
      `Chinclincha, also known as the City of Wind Chimes, is a medium-sized city on the coast of the Great Sea, in the northern reaches of Dalymbia. It sits a few hundred feet from a high cliff overlooking the ocean. Chinclincha is known primarily for its artwork; the city is home to artisans of all crafts, particularly glasswork, gold- and silversmithing, gemcutting, enchantment, and potion making. It is a favored spot for travelers to visit because of its delicate, artsy culture and the beauty of the city.`,
      `Chinclincha was the main city of Climina, a small, peaceful country on the coast of Great Sea, which was predominantly populated with elves and had strong ties to the nearby elvish city of Lindiria. It was comprised fairly evenly of elves, humans, and gnomes. In 4069, a gnomish counselor by the name of Harandandalandas sold information about the arcane defences of Climina to the Dalymbian Empire; he was discovered and caught before he could flee, and imprisoned. The damage had been done, however, and King Runazo marched on Climina within days and pillage and burned his way to Chinclincha. Spies sent ahead of the army infiltrated the city, freed Harandandalas, and the gnome brought down some of the city's defences just as the army approached. The battle last less than a day; the main effort of the defenders was to get the city's inhabitants to safety, and this was very successful. Fewer than two hundred Climinai died at Chinclincha, and when Runazo battered down the main gate, he found the city almost entirely deserted.`,
      `Many of the elvish artisans of Chinclincha fled to Lindiria, and many of the others fled to Old Lymbia, where they found refuge. In the years following the attack it became clear that Runazo's only interest in the city was conquest; many saw that it was safe to return, with the main change being the presence of Black Shields from the Dalymbian Empire. Quite a few of the refugees stayed in their new home of Old Lymbia, contributing to the education and welfare of the city, and it became a fairly wealthy city. A decade after the attack, the Academy of the Moon opened its doors in Old Lymbia; two of the five founders were from Chinclincha. As for Chinclincha, by that time it had returned almost completely to what it was before the attack.`,
      `The region, while formally a Dalymbian provice, is still called Climina, and it exports many things - fine glasswork, jewelry, clothing, magical artifacts, and potions. It imports rough gems and metal, some weaponry, and some of the more basic, bigger tools.`,
    ]
  },
  'ambalora': {
    name: 'ambalora',
    label: 'Ambalora',
    placeTags: [
      placeNames.ambalora,
      placeNames.gulandabar,
    ],
    titleColor: colors.creepyPurple,
    type: wikiEntryTypes.place['ruined city'],
    paragraphs: [
      `Ambalora is a ruined city built around 3700 SA by elvish necromancers from ;;;Abundabar%%%abundabar;;;, who were seeking a place to practice their dark arts. They chose to build on top of an abandoned diamond mine called Hoh I Noor; Hoh I Noor had been abandoned a few decades earlier when a Beholder moved in, but it was still believed to be rich in diamonds. The Ambalorans, as the eight founders called themselves, thought very highly of themselves and their magical prowess and planned to drive out the Beholder and reclaim the mine. This would provide them with a good supply of diamonds for their experiments, as diamonds are a common component in resurrection magic.`,
      `The Ambalorans, four sets of twin brothers, were Tuillas, Nandor, Horenas, Lolendas, Hurilas, Amando, Trendalos, and Trelachus. They came to Hoh I Noor and confronted the Beholder. They succeeded in killing it, but several of the Ambalorans were killed in the struggle. Trelachus was so badly disintegrated that he could not be resurrected from his coma. Trendalos, his twin, channeled his grief into ambition, eventually declaring himself king over the others. This title was grudgingly accepted, mostly because the other Ambalorans cared more about their research than they did about the title Trendalos claimed for himself; since there were only seven of them and each was capable of amassing undead servants, kingship did not make much of a difference among them.`,
      `The seven other Ambalorans spent the next few decades building Ambalora, largely through the use of animated goblin corpses for labor. It became a tall, imposing fortress overlooking the Tentacle River from a cliff above it. The seven brothers' arrogance grew as they forgot the Beholder and they delved deeper into necromantic magic, seeking a way to defeat death and truly become immortal, and to resurrect truly dead creatures. Their experiments grew more and more barbaric, and they became more and more secretive of their work. A century and a half later, a small group of dark elves came from Abundabar to check on them and see if they wanted to rebuild ties with society; the Ambalorans deceived the party and trapped them for use in experiments, believing they could learn more from their own kin than from goblin corpses. One elf managed to get a message sent before he was killed, and the Gulandabarians, horrified by what had happened, assembled an army, marched on Ambalora, and destroyed the seven founders. Then they set about destroying Ambalora, but began setting off the deadly traps the paranoid founders had set everywhere. After a short while, the army decided to retreat, since too many elves were suffering horrible consequences at the hands of the traps. This left much of Ambalora and many of its wards and spells intact. Ambalora was left, abhorred and avoided by everyone who knew anything about it.`,
      `A century or so later, around 4000 SA, a band of looters traveled to Ambalora and discovered it flooded. A Purple Worm had passed nearby, creating a new tunnel and a stream (later named Darkveil stream), which had gradually flooded the entire mine, surrounded Ambalora in a lake, and created a waterfall from the cliff down into the Tentacle River below. Ambalora has remained more or less in this condition since then.`,
      `Currently, Ambalora is a small 'island' - the main streets of the fortress are only knee-deep in water - with gracefully arching stone bridges crossing the water into it (these were originally constructed to connect the city to the rest of the land around it since mining had dug away most of the surrounding rock). These bridges are the only way it can be accessed, and is a dark place of stone and ruins, with flickers of magical activity every so often, and some wards that never sleep.`,
      `Areas of interest in Ambalora include the four schools that the founders were primarily interested in - Animation, Control, Resurrection, and Telepathy; the Meditorium; the Arcane Repository; the tomb of Trelachus (the Ambaloran first killed); and the Teleportation Circle, which sat on a rocky hill above the fortress, accessible via a winding stairway carved into the rock. Inside each school are artifacts of the research done there, including many gruesome remains; the Meditorium is mostly ruins, as it was the least warded building; the Arcane Repository is guarded by a deadly, twisted puzzle created by Trendalos, but contains a wealth of gemstones, arcane objects, and orbs; and the tomb of Trelachus is a dark place surrounded by slumbering undead skeletons, tied to Trendalos' puzzle at the Arcane Repository.`
    ]
  },
  'saddle': { // TODO: make this show up when searching Dragon Falls
    name: 'saddle',
    label: 'Saddle',
    placeTags: [
      placeNames.dragon_falls,
    ],
    titleColor: colors.coastBlue,
    type: wikiEntryTypes.place.town,
    paragraphs: [
      `Saddle is a small town a mile or so northwest of Dragon Falls that caters to the ranchers of the region, dealing in feed, livestock, tack, and has a horse corral for showing and selling, a farrier, a tack store, a couple of saddlemakers, a blacksmith, a bow maker who makes bows for horse archery and an arena where they have a show including horse archery. Some of the ranchers in the region also train horses specifically for horse archery, and some offer countryside rides for the wealthy folk in Dragon Falls. Horse races are occasionally held also.`,
    ]
  },

  
}

export const wikiEntriesAsArray = Object.values(wikiEntries) 

export default wikiEntries