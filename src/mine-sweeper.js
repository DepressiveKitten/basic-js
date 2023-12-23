const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let answer = Array(matrix.length+2);

  for(let i = 0; i < answer.length;i++)
  {
    answer[i]=Array(matrix[0].length+2).fill(0);
  }

  for(let i = 0; i < matrix.length; i++)
  {
    for(let j = 0; j < matrix[i].length; j++)
    {
      if(matrix[i][j])
      {
        let new_i=i+1;
        let new_j=j+1;

        answer[new_i+1][new_j+1]++;
        answer[new_i+1][new_j]++;
        answer[new_i+1][new_j-1]++;
        answer[new_i][new_j+1]++;
        answer[new_i][new_j-1]++;
        answer[new_i-1][new_j+1]++;
        answer[new_i-1][new_j]++;
        answer[new_i-1][new_j-1]++;
      }
    }
  }

  answer.pop()
  answer.shift();
  for(let i = 0; i < answer.length;i++)
  {
    answer[i].pop();
    answer[i].shift();
  }
  return answer;
}

module.exports = {
  minesweeper
};
