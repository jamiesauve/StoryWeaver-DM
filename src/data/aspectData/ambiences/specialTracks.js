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
      title: 'Welcome to the Feywild',
      location: 'Forbidden Friendship',
      tags: ['How to train your Dragon'],
      modifyVolumeBy: 2,
    },
    {
      title: 'Cornflower',
      isMyOwnSong: true,
      location: './personal-tracks/Cornflower.mp3',
      tags: ['Composition', '',],
      modifyVolumeBy: 1,
    },
    {
      title: `Ariana's Song`,
      isMyOwnSong: true,
      location: `./personal-tracks/ArianasSong.mp3`,
      tags: ['Composition', '',],
      modifyVolumeBy: 1,
    },
    {
      title: `The Silver Sea`,
      isMyOwnSong: true,
      location: `./personal-tracks/TheSilverSea.mp3`,
      tags: ['Composition', '',],
      modifyVolumeBy: 1,
    },
  ],
}]