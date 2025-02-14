const sort = (a, b, col) => {
  return a[col - 1] - b[col - 1] || b[0] - a[0]
}

const solution = (data, col, row_begin, row_end) => {
  data.sort((a, b) => sort(a, b, col));

  return data.map((row, i) => row.reduce((acc, c) => acc + (c % (i + 1)),0))
  .slice(row_begin-1, row_end)
  .reduce((acc, cur) => acc ^ cur, 0);
}