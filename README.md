# Anti‑Very

Turn "very + word" into one stronger word.

## Features

- Fixed, no‑shift UI
- Curated local dictionary with multiple alternatives per word
- Click “Get/Refresh result” to cycle alternatives
- “Random” picks a random entry

## Tech

- React + Vite
- Tailwind CSS

## Usage

- Type a word (e.g., `beautiful`) into the input.
- Click “Get/Refresh result” to cycle through alternatives (e.g., `gorgeous`, `stunning`, ...).
- Click “Random” to load a random word and its first alternative.

## Data

Curated map lives in `src/data/veryMap.js`. Add entries like:

```js
export const veryMap = {
  beautiful: ["gorgeous", "stunning", "exquisite"],
  // ...
};
```
