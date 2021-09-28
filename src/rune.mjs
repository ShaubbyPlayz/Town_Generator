import {coin} from "./utils.mjs";


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


  // Returns
  return runeMap;

}
