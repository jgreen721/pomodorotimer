export const cardinalToSeconds = (cardinal) => {
  if (JSON.stringify(cardinal).indexOf(":") == -1)
    return parseInt(cardinal) * 60;
  // console.log("CardinalTIME: " + cardinal);
  let total = parseInt(cardinal.split(":")[0]) * 60;
  total += parseInt(cardinal.split(":")[1]);

  console.log("totalSeconds: " + total);
  return total;
};

export const secondsToCardinal = (totalSeconds) => {
  // console.log("TotalSeconds: " + totalSeconds);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  seconds = JSON.stringify(seconds).padStart(2, 0);

  // console.log(minutes + ":" + JSON.stringify(seconds).padStart(2, 0));
  return { minutes, seconds };
};

// secondsToCardinal(119); // 1:59
// secondsToCardinal(180); // 3:00
// secondsToCardinal(240); // 4:00
// secondsToCardinal(157); // 2:37
// secondsToCardinal(432); // 7:12
// secondsToCardinal(19); // 0:19
// cardinalToSeconds("3:49");
// cardinalToSeconds("5:00");
// secondsToCardinal(cardinalToSeconds("1:39"));
