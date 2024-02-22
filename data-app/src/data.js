import koala from './koala.jpg';
import donkey from './donkey.png';
import gieraffe from './gieraffe.jpg';
import eagle from './eagle.jpg';
import sparrow from './sparrow.png';
import pigeon from './pigeon.png';
import lizard from './lizard.jpg';
import python from './python.png';
import cobra from './cobra.jpg';

const data = {
  mammals: [
    { id: 1, name: 'Koala', image: koala, width: '300px', height: '300px' },
    { id: 2, name: 'Donkey', image: donkey, width: '300px', height: '300px' },
    { id: 3, name: 'Gieraffe', image: gieraffe, width: '300px', height: '300px' },
  ],
  birds: [
    { id: 4, name: 'Eagle', image: eagle, width: '300px', height: '300px' },
    { id: 5, name: 'Sparrow', image: sparrow, width: '300px', height: '300px' },
    { id: 6, name: 'Pigeon', image: pigeon, width: '300px', height: '300px' },
  ],
  reptiles: [
    { id: 7, name: 'Lizard', image: lizard, width: '300px', height: '300px' },
    { id: 8, name: 'Python', image: python, width: '300px', height: '300px' },
    { id: 9, name: 'Cobra', image: cobra, width: '300px', height: '300px' },
  ],
};

export default data;
