  // ----- IMPORTS -----
import "./styles.css";
import {generateName} from "./utils.mjs";
import configData from './names.json';

// Import name.json
var names = JSON.parse(JSON.stringify(configData));

console.log(generateName(names.fDwarf));

