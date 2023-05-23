// defaults.js
// female actresses
import gGadot from '../assets/images/female/galGadot.jpg';
import mFox from '../assets/images/female/meganFox.jpg';
import pCruz from '../assets/images/female/penelopeCruz.jpg';
import nPortman from '../assets/images/female/nataliePortman.jpeg';
import aDaddario from '../assets/images/female/alexandraDaddario.jpg';
import eStone from '../assets/images/female/emilyStone.jpeg';

// male actors
import bPitt from '../assets/images/male/bradPitt.jpg';
import tCruise from '../assets/images/male/tomCruise.jpg';
import tHanks from '../assets/images/male/tomHanks.jpg';
import cEvans from '../assets/images/male/chrisEvans.jpg';
import jStatham from '../assets/images/male/jasonStatham.jpg';
import jDepp from '../assets/images/male/johnnyDepp.jpg';

const categories = [
    {
        id:1,
        name: "Male Category",
        gender:'male',
        title:'Gentlemen of the Year',
        nominees: [
            { id:1, name: "Brad Pitt", image: bPitt },
            { id:2, name: "Tom Cruise", image: tCruise },
            { id:3, name: "Tom Hanks", image: tHanks },
            { id:4, name: "Chris Evans", image: cEvans },
            { id:5, name: "Jason Statham", image: jStatham },
            { id:6, name: "johnny Depp", image: jDepp },
            // Add more nominees...
        ],
    },
    {
        id:2,
        name: "Female Category",
        gender:'female',
        title:'Ladies of the Year',
        nominees: [
            { id:1, name: "Gal Gadot", image: gGadot },
            { id:2, name: "Megan Fox", image: mFox },
            { id:3, name: "Penelope Cruz", image: pCruz },
            { id:4, name: "Natalie Portman", image: nPortman },
            { id:5, name: "Alexandra Daddario", image: aDaddario },
            { id:6, name: "Penelope Cruz", image: pCruz },
            // Add more nominees...
        ],
    },
    // Add more categories...
  ];
  
  export default categories;