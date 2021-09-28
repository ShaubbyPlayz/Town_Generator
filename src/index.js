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

var rune = Rune();

ctx.beginPath();

if(rune[0][0] == 1) ctx.rect(0, 0, 10, 10); // Top Left
if(rune[0][2] == 1) ctx.rect(20, 0, 30, 10); // Top Middle
if(rune[0][4] == 1) ctx.rect(40, 0, 50, 10); // Top Right

if(rune[2][0] == 1) ctx.rect(0, 20, 10, 30); // Top Left
if(rune[2][2] == 1) ctx.rect(20, 20, 30, 30); // Top Middle
if(rune[2][4] == 1) ctx.rect(40, 20, 50, 30); // Top Right

if(rune[4][0] == 1) ctx.rect(0, 40, 10, 50); // Top Left
if(rune[4][2] == 1) ctx.rect(20, 40, 30, 50); // Top Middle
if(rune[4][4] == 1) ctx.rect(40, 40, 50, 50); // Top Right

ctx.endPath();
