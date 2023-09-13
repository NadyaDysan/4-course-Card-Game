**A card remember game written in Type Script**

**Working environment**
The project has a working environment configured and a unified coding style:
 
✅ Configured a linter for JS/TS code.
✅ Configured a linter for CSS/SASS code.
✅ Configured prettier for code formatting.
✅Linters are launched automatically before creating a commit.
✅Webpack is used.

**The game**

✅ Layout corresponds to Figma layout (HTML/CSS).
✅ The logic for selecting the difficulty level has been implemented.
✅ The logic for selecting and comparing cards has been implemented.
✅ The logic for displaying game results has been implemented.
✅ TypeScript is integrated into the project.

**Description of the game:**

This is a card game, the rules of which is quite simple: you have to remember and choose all pairs of cards.
The first step is to choose the difficulty of the game. After that, a field will be opened with the number of cards corresponding to the selected difficulty level:
- Easy level - 6 cards (3 pairs)
- Intermediate level - 12 cards (6 pairs)
- Difficult level - 18 cards (9 pairs)
After 3 seconds, the cover of the cards turns over, the timer starts and you need to guess the pairs. 
If it fails, the game ends. If the answer is correct, the game continues until all the pairs of cards will be chosen or first mistake.
