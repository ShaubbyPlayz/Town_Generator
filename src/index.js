  // ----- IMPORTS -----
import "./styles.css";
import {coin, generateName} from "./utils.mjs";
import {Rune, drawRune} from "./rune.mjs";
import configData from './names.json';

// Init Vars
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// Import name.json
var names = JSON.parse(JSON.stringify(configData));

drawRune(ctx, 0, 0);
