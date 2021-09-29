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

  } else { // Vertical
    return 0;
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
  runeMap[0][1] = checkConnector(0, 1, runeMap, 1/2); // Top Left
  runeMap[0][3] = coin(); // Top Right
  
  runeMap[1][1] = coin(); // Middle Left
  runeMap[1][2] = coin(); // Middle Right

  runeMap[3][1] = coin(); // Bottom Left
  runeMap[3][2] = coin(); // Bottom Right

  // Returns
  return runeMap;

}
