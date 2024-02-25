// TODO: write your code here

import GameSavingLoader from "./GameSavingLoader";
import GameSaving from "./GameSaving";

const gameSaving = new GameSaving();
const gameLoad = new GameSavingLoader();

(async () => {
  try {
    gameSaving.saving = await gameLoad.load();
  } catch(err) {
    alert(err.message);
  }
})();