  // ----- IMPORTS -----
import "./styles.css";
import {coin, generateName} from "./utils.mjs";
import {Rune} from "./rune.mjs";
import configData from './names.json';

// Init Vars
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// Import name.json
var names = JSON.parse(JSON.stringify(configData));

// ---------- RUNE GENERATOR ----------

// Rune
var rune = Rune();

// Begin Path
ctx.beginPath();

// ----- Corners -----

// Top
if(rune[0][0] === 1) ctx.fillRect(0, 0, 10, 10); // Top Left
if(rune[0][2] === 1) ctx.fillRect(30, 0, 10, 10); // Top Middle
if(rune[0][4] === 1) ctx.fillRect(60, 0, 10, 10); // Top Right

// Middle
if(rune[2][0] === 1) ctx.fillRect(0, 30, 10, 10); // Middle Left
if(rune[2][2] === 1) ctx.fillRect(30, 30, 10, 10); // Middle Middle
if(rune[2][4] === 1) ctx.fillRect(60, 30, 10, 10); // Middle Right

// Bottom
if(rune[4][0] === 1) ctx.fillRect(0, 60, 10, 10); // Bottom Left
if(rune[4][2] === 1) ctx.fillRect(30, 60, 10, 10); // Bottom Middle
if(rune[4][4] === 1) ctx.fillRect(60, 60, 10, 10); // Bottom Right

// ----- Horizontal Connectors -----

if(rune[0][1] == 1) ctx.fillRect(10,)



ctx.closePath();
