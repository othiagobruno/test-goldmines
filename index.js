module.exports = function findBestSpot(landWidth, landHeight, exploitationWidth, exploitationHeight, goldMines) {
  if (!landWidth || !landHeight || !exploitationWidth || !exploitationHeight || !goldMines) {
    throw new Error('Incomplete arguments');
  }

  let ground = new Array(landWidth).fill(false).map(() => new Array(landHeight).fill(false))
  goldMines.map(mines => ground[mines.x][mines.y] = true);

  const exploitationLimitWidth = (exploitationWidth > landWidth) ? landWidth : exploitationWidth
  const exploitationLimitHeight = (exploitationHeight > landHeight) ? landHeight : exploitationHeight

  const explotation = [];  
  // here it generates the map in the indicated size
  for (let positionX = 0; positionX < landWidth - exploitationWidth + 1; positionX++) {
    for (let positionY = 0; positionY < landHeight - exploitationHeight + 1; positionY++) {
      let amount = 0;
      // here it checks the limit and includes the gold mines
      for (let width = 0; width < exploitationLimitWidth; width++) {
        for (let height = 0; height < exploitationLimitHeight ; height++) {
          if (ground[positionX + width][positionY + height] !== false) {
            amount += 1;
          }
        }
      }

      explotation.push({ x: positionX, y: positionY, amount });
    }
  }

  // get the maximum value and the best score of the place
  const maximumMine = Math.max.apply(Math, explotation.map((o) =>  o.amount));
  const bestLocation = explotation.find(location => location.amount === maximumMine)

  return {
    coordinates: {
      x: bestLocation.x,
      y: bestLocation.y,
    },
    goldMines: bestLocation.amount
  }
}


