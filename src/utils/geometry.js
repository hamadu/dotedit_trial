export default () => {
  const lineToDots = (fx, fy, tx, ty) => {
    const dots = [];
    if (tx < fx) {
      return lineToDots(tx, ty, fx, fy);
    } else if (fx == tx) {
      while (fy != ty) {
        dots.push([Math.floor(fx), Math.floor(fy)]);
        fy += (ty - fy >= 1) ? 1 : -1;
      }
      dots.push([fx, fy]);
    } else if (fy == ty) {
      while (fx != tx) {
        dots.push([Math.floor(fx), Math.floor(fy)]);
        fx += 1;
      }
      dots.push([fx, fy]);
    } else {
      const diff = (ty - fy) / (tx - fx + 1);
      while (fx <= tx) {
        const tty = fy + diff;
        if (diff >= 0) {
          while (fy <= tty) {
            dots.push([Math.floor(fx), Math.round(fy)]);
            fy += 1;
          }
        } else {
          while (fy >= tty) {
            dots.push([Math.floor(fx), Math.round(fy)]);
            fy -= 1;
          }
        }
        fy = tty;
        fx += 1;
      }
    }
    return dots;
  }

  return {
    lineToDots
  };
}
