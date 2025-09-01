function towerBuilder(nFloors) {
  const result = []

  for (let floor = 0; floor < nFloors; floor++) {
    const stars = "*".repeat(2 * floor + 1)
    const spaces = " ".repeat(nFloors - floor - 1)

    result.push(spaces + stars + spaces)
  }

  return result
}

console.log(towerBuilder(2));
