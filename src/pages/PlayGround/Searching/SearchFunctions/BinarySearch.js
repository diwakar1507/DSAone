export async function* BinarySearch(
  array,
  element,
  check,
  markVisited,
  markFound
) {
  var l = 0;
  var r = array.length - 1;
  console.log(element);
  console.log("l:" + l);
  console.log("r:" + r);
  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    yield await check(m);
    console.log("m:" + m + " [m]:" + array[m]);
    if (array[m] === element) {
      yield await markFound(m);
      return;
    } else {
      yield await markVisited(m);
    }
    if (array[m] < element) l = m + 1;
    else r = m - 1;
  }

  markFound(-1);
  yield;
}
