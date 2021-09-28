  // ----- IMPORTS -----
import "./styles.css";
import {coin, generateName} from "./utils.mjs";
import {Rune} from "./rune.mjs";
import configData from './names.json';

// Import name.json
var names = JSON.parse(JSON.stringify(configData));

// ---------- RUNE GENERATOR ----------

console.log(Rune());
