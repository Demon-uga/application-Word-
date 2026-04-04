export function updateAllStats(stats, type) {
  const today = new Date().toDateString();
  const newStats = { ...stats };

  const isNewDayForRepeat = today !== stats.lastDay;
  const isNewDayForAdd = today !== stats.lastAddedDay;

  if (type === "repeat" || type === "both") {
    if (isNewDayForRepeat) {
      newStats.toDay = 1;
      newStats.lastDay = today;
    } else {
      newStats.toDay = (stats.toDay || 0) + 1;
    }
    newStats.total = (stats.total || 0) + 1;

    if (stats.streak === 0) {
      newStats.streak = 1;
    } else if (isNewDayForRepeat) {
      const yesterday = new Date();
      yesterday.setDate(new Date().getDate() - 1);
      if (stats.lastDay === yesterday.toDateString()) {
        newStats.streak = (stats.streak || 0) + 1;
      } else {
        newStats.streak = 1;
      }
    }
  }

  if (type === "add" || type === "both") {
    if (isNewDayForAdd) {
      newStats.addedToday = 1;
      newStats.lastAddedDay = today;
    } else {
      newStats.addedToday = (stats.addedToday || 0) + 1;
    }
  }

  if (newStats.toDay > (newStats.bestDay || 0)) {
    newStats.bestDay = newStats.toDay;
  }

  return newStats;
}

export function updateStatsOnAppStart(stats) {
  const today = new Date().toDateString();
  const newStats = { ...stats };

  const isNewDayForRepeat = today !== stats.lastDay;
  const isNewDayForAdd = today !== stats.lastAddedDay;

  if (isNewDayForRepeat) {
    newStats.toDay = 0;

    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);

    if (stats.lastDay !== yesterday.toDateString()) {
      newStats.streak = 0;
    }
  }

  if (isNewDayForAdd) {
    newStats.addedToday = 0;
  }

  return newStats;
}
