import colors from '../../styles/colors'

export default [{
  categoryLabel: "Special Events",
  titleColor: colors.specialPink,
  trackObjects: [
    {
      title: 'El Dorado',
      location: '_El Dorado',
      tags: ['Skyworld', 'wyvern', 'desert'],
    },
    {
      title: 'Cannon in D',
      location: '_Cannon in D',
      tags: ['Cannon in D'],
    },
    {
      title: 'Cornflower',
      isMyOwnSong: true,
      location: './personal-tracks/Cornflower.mp3',
      tags: ['Composition', '',],
    },
    {
      title: `Ariana's Song`,
      isMyOwnSong: true,
      location: `./personal-tracks/ArianasSong.mp3`,
      tags: ['Composition', '',],
    },
  ],
}]