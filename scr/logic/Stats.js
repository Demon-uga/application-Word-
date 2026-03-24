export function updateState(stats){
    const toDay = new Date().toDateString()

    if( toDay !== stats.lastDay){
        return {
            ...stats,
            total: stats.total + 1,
            toDay: 1,
            lastDay: toDay
        }
    }

    const bestDay = stats.toDay + 1 > stats.bestDay ? stats.toDay + 1 : stats.bestDay
    return {
        ...stats,
        total: stats.total + 1,
        toDay: stats.toDay + 1,
        lastDay: toDay,
        bestDay: bestDay
    }
}

export function updateStreak(stats) {
  const today = new Date();
  const last = new Date(stats.lastDay);

  const todayStr = today.toDateString();
  const lastStr = last.toDateString();

  if(stats.streak == 0){
        return {
            ...stats,
            streak: 1,
        }
    }

  if (todayStr === lastStr) return stats;

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (lastStr === yesterday.toDateString()) {
    return { ...stats, streak: stats.streak + 1, lastDay: todayStr };
  }

  return { ...stats, streak: 1, lastDay: todayStr };
}


export function updateAddedToday(stats) {
  const today = new Date().toDateString();
  
  if (today !== stats.lastAddedDay) {
    return {
      ...stats,
      addedToday: 1,
      lastAddedDay: today
    };
  }
  
  return {
    ...stats,
    addedToday: (stats.addedToday || 0) + 1
  };
}

