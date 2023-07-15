export const calculatePercent = (curr, total) => {
  let percent = Math.ceil((curr / total) * 100);

  //   console.log("percent: " + percent + "%");
  return 100 - percent;
};

// calculatePercent(110, 120);
// calculatePercent(45, 120);
// calculatePercent(120, 120);
// calculatePercent(3, 120);
