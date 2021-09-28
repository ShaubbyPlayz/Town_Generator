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
  runeMap[0][3] = coin(5/7); // Top Middle
  runeMap[0][5] = coin(6/7); // Top Right
  runeMap[3][0] = coin(5/7); // Middle Left
  runeMap[3][3] = coin(6/7); // Middle Middle
  runeMap[3][5] = coin(6/7); // Middle Right
  runeMap[5][0] = coin(4/7); // Bottom Left
  runeMap[5][3] = coin(5/7); // Bottom Middle
  runeMap[5][5] = coin(3/7); // Bottom Right


  // Returns
  return runeMap;

}
