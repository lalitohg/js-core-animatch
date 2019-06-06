class Card {

    animal = null;
    present = null;
    hatColor = null;
    eyeGlassesColor = null;
    scarfColor = null;
    topColor = null;
    bottomColor = null;

    constructor(animal, present, hatColor, eyeGlassesColor, scarfColor, topColor, bottomColor, shoesColor) {
        Object.assign(
            this,
            {
                animal,
                present,
                hatColor,
                eyeGlassesColor,
                scarfColor,
                topColor,
                bottomColor,
                shoesColor
            }
        );
    }
}