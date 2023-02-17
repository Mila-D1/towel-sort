
module.exports = function towelSort(matrix) {
  let sorted = []
  let reversed = false

  if (matrix === undefined) {
      return []
  }
  for (let i = 0; i < matrix.length; i++) {
      sorted = sorted.concat(reversed ? matrix[i].reverse() : matrix[i])
      reversed = !reversed
  }

  return sorted
}
