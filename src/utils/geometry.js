export default () => {
  const lineToDots = (fx, fy, tx, ty) => {
    const dots = [];
    if (fx == tx) {
      while (fy != ty) {
        dots.push([Math.floor(fx), Math.floor(fy)]);
        fy += (ty - fy >= 1) ? 1 : -1;
      }
    } else {
      const diff = Math.abs((ty - fy) / (tx - fx));
      while (fx != tx) {
        const tty = fy + diff * ((ty >= fy) ? 1 : -1);
        if (diff >= 0) {
          while (fy <= tty) {
            dots.push([Math.floor(fx), Math.floor(fy)]);
            fy += 1;
          }
        } else {
          while (fy >= tty) {
            dots.push([Math.floor(fx), Math.floor(fy)]);
            fy -= 1;
          }
        }
        fy = tty;
        fx += (tx - fx >= 1) ? 1 : -1;
      }
    }
    return dots;
  }

  return {
    lineToDots
  };
}
