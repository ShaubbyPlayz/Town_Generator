import {coin} from "./utils.mjs";


// ---------- CONNECTOR CHECK ----------
function checkConnector(row, column, runeMap, chance) {

  // Check Horizontal or Vertical
  if(row == 0 || row == 2 || row == 4) { // Horizontal

    // Check runeMap
    if(runeMap[row][column + 1] == 1 && runeMap[row][column - 1] == 1) {
      // Return if possible
      return coin(chance);
    } else {
      // Return is not possible
      return 0;
    }

  } else if (row == 1 || row == 3){ // Vertical

    // Check runeMap
    if(runeMap[row + 1][column] == 1 && runeMap[row - 1][column] == 1) {
      // Return if possible
      return coin(chance);
    } else {
      // Return is not possible
      return 0;
    }

  }

}



// ---------- RUNE FUNCTION ----------
export function Rune() {

  // Rune Map
  var runeMap = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0]];

  // ----- Generate Corners -----

  runeMap[0][0] = coin(5/7); // Top Left
  runeMap[0][2] = coin(5/7); // Top Middle
  runeMap[0][4] = coin(6/7); // Top Right
  
  runeMap[2][0] = coin(5/7); // Middle Left
  runeMap[2][2] = coin(6/7); // Middle Middle
  runeMap[2][4] = coin(6/7); // Middle Right
  
  runeMap[4][0] = coin(4/7); // Bottom Left
  runeMap[4][2] = coin(5/7); // Bottom Middle
  runeMap[4][4] = coin(3/7); // Bottom Right

  // ----- Generate Connectors -----

  // --- Horizontal ---
  runeMap[0][1] = checkConnector(0, 1, runeMap, 3/4); // Top Left
  runeMap[0][3] = checkConnector(0, 3, runeMap, 3/4); // Top Right
  
  runeMap[2][1] = checkConnector(2, 1, runeMap, 3/4); // Middle Left
  runeMap[2][3] = checkConnector(2, 3, runeMap, 3/4); // Middle Right

  runeMap[4][1] = checkConnector(4, 1, runeMap, 3/4); // Bottom Left
  runeMap[4][3] = checkConnector(4, 3, runeMap, 3/4); // Bottom Right

  // --- Vertical ---
  runeMap[1][0] = checkConnector(1, 0, runeMap, 3/4); // Top Left
  runeMap[1][2] = checkConnector(1, 2, runeMap, 3/4); // Top Middle
  runeMap[1][4] = checkConnector(1, 4, runeMap, 3/4); // Top Right

  runeMap[3][0] = checkConnector(3, 0, runeMap, 3/4); // Bottom Left
  runeMap[3][2] = checkConnector(3, 2, runeMap, 3/4); // Bottom Middle
  runeMap[3][4] = checkConnector(3, 4, runeMap, 3/4); // Bottom Right

  // Returns
  return runeMap;

}

// ---------- RUNE DRAWER ----------
export function drawRune(ctx, xoffset, yoffset) {

  // Rune
  var rune = Rune();

  // Begin Path
  ctx.beginPath();

  // ----- Corners -----
  
  // Top
  if(rune[0][0] === 1) ctx.fillRect(0 + xoffset, 0 + yoffset, 10, 10); // Top Left
  if(rune[0][2] === 1) ctx.fillRect(25 + xoffset, 0 + yoffset, 10, 10); // Top Middle
  if(rune[0][4] === 1) ctx.fillRect(50 + xoffset, 0 + yoffset, 10, 10); // Top Right

  // Middle
  if(rune[2][0] === 1) ctx.fillRect(0 + xoffset, 30 + yoffset, 10, 10); // Middle Left
  if(rune[2][2] === 1) ctx.fillRect(25 + xoffset, 30 + yoffset, 10, 10); // Middle Middle
  if(rune[2][4] === 1) ctx.fillRect(50 + xoffset, 30 + yoffset, 10, 10); // Middle Right

  // Bottom
  if(rune[4][0] === 1) ctx.fillRect(0 + xoffset, 60 + yoffset, 10, 10); // Bottom Left
  if(rune[4][2] === 1) ctx.fillRect(25 + xoffset, 60 + yoffset, 10, 10); // Bottom Middle
  if(rune[4][4] === 1) ctx.fillRect(50 + xoffset, 60 + yoffset, 10, 10); // Bottom Right

  // ----- Horizontal Connectors -----

  // Top
  if(rune[0][1] === 1) ctx.fillRect(10 + xoffset, 0 + yoffset, 15, 10); // Top Left
  if(rune[0][3] === 1) ctx.fillRect(35 + xoffset, 0 + yoffset, 15, 10); // Top Right

  // Middle
  if(rune[2][1] === 1) ctx.fillRect(10 + xoffset, 30 + yoffset, 15, 10); // Top Left
  if(rune[2][3] === 1) ctx.fillRect(35 + xoffset, 30 + yoffset, 15, 10); // Top Right

  // Bottom
  if(rune[4][1] === 1) ctx.fillRect(10 + xoffset, 60 + yoffset, 15, 10); // Top Left
  if(rune[4][3] === 1) ctx.fillRect(35 + xoffset, 60 + yoffset, 15, 10); // Top Right

  // ----- Vertical Connectors -----

  // Top
  if(rune[1][0] === 1) ctx.fillRect(0 + xoffset, 10 + yoffset, 10, 20); // Top Left
  if(rune[1][2] === 1) ctx.fillRect(25 + xoffset, 10 + yoffset, 10, 20); // Top Middle
  if(rune[1][4] === 1) ctx.fillRect(50 + xoffset, 10 + yoffset, 10, 20); // Top Left

  // Bottom
  if(rune[3][0] === 1) ctx.fillRect(0, + xoffset, 40 + yoffset, 10, 20); // Bottom Right
  if(rune[3][2] === 1) ctx.fillRect(25 + xoffset, 40 + yoffset, 10, 20); // Bottom Middle
  if(rune[3][4] === 1) ctx.fillRect(50 + xoffset, 40 + yoffset, 10, 20); // Bottom Left

  // Close Path
  ctx.closePath();

}
