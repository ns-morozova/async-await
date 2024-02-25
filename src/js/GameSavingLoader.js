import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    async load() {
        const arrBuf = await read();
        const response = await json(arrBuf);
        return JSON.parse(response);
    }
}