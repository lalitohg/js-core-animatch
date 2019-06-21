import { Card } from './card';
import { ANIMALS, PRESENTS, COLORS } from './constants';

export const DEFAULT_CARDS_DATA = [
    new Card(
        ANIMALS.panda,
        PRESENTS.balloons,
        COLORS.blue,
        COLORS.green,
        COLORS.pink,
        COLORS.purple,
        COLORS.blue,
        COLORS.yellow
    ),
    new Card(
        ANIMALS.panda,
        PRESENTS.book,
        COLORS.green,
        COLORS.pink,
        COLORS.green,
        COLORS.red,
        COLORS.red,
        COLORS.blue
    ),
    new Card(
        ANIMALS.sloth,
        PRESENTS.balloons,
        COLORS.pink,
        COLORS.purple,
        COLORS.red,
        COLORS.yellow,
        COLORS.red,
        COLORS.green
    ),
    new Card(
        ANIMALS.sloth,
        PRESENTS.candy,
        COLORS.blue,
        COLORS.yellow,
        COLORS.purple,
        COLORS.pink,
        COLORS.green,
        COLORS.blue
    )
];
