export function updateAllStats(stats, type) {
  const today = new Date().toDateString();
  const newStats = { ...stats };
  
  // Новый день для повторений?
  const isNewDayForRepeat = today !== stats.lastDay;
  // Новый день для добавлений?
  const isNewDayForAdd = today !== stats.lastAddedDay;
  
  // Обновляем повторения
  if (type === 'repeat' || type === 'both') {
    if (isNewDayForRepeat) {
      newStats.toDay = 1;
      newStats.lastDay = today;
    } else {
      newStats.toDay = (stats.toDay || 0) + 1;
    }
    newStats.total = (stats.total || 0) + 1;
    
    // Обновляем streak
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
  
  // Обновляем добавления
  if (type === 'add' || type === 'both') {
    if (isNewDayForAdd) {
      newStats.addedToday = 1;
      newStats.lastAddedDay = today;
    } else {
      newStats.addedToday = (stats.addedToday || 0) + 1;
    }
  }
  
  // Обновляем bestDay
  if (newStats.toDay > (newStats.bestDay || 0)) {
    newStats.bestDay = newStats.toDay;
  }
  
  return newStats;
}