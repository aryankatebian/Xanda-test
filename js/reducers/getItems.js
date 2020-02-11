import { GET_ITEMS } from '../actions/types';

import game1 from '../../assets/game1.jpg';
import game2 from '../../assets/game2.jpg';
import game3 from '../../assets/game3.jpg';
import game4 from '../../assets/game4.jpg';

const initialState = {
  games: [
    {
      id: '1',
      title: 'Star Wars: Battlefront',
      image: game1,
      description: 'Immerse yourself in the Ultimate Star Wars Experience.',
      price: 300,
      pending: false
    },
    {
      id: '2',
      title: 'Dying Light',
      image: game2,
      description:
        'Dying light is an open world first person action-adventure video game developed by techland.',
      price: 500,
      pending: false
    },
    {
      id: '3',
      title: 'Bloodborne',
      image: game3,
      description:
        'Bloodborne is an action role-playing video game developed by FromSoftware.',
      price: 200,
      pending: false
    },
    {
      id: '4',
      title: 'Evolve',
      image: game4,
      description:
        'Evolve is a first-person shooter video game developed by Turtle Rock Studios.',
      price: 150,
      pending: false
    }
  ]
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case GET_ITEMS:
      return [...state];
    default:
      return state;
  }
}
