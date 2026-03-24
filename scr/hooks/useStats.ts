// @ts-nocheck
import { useState, useEffect } from "react";
import { updateState, updateStreak, updateAddedToday } from "../logic/Stats.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@vocab_stats";

export default function useStats() {
  const [stats, setStats] = useState({
    total: 0,
    toDay: 0,
    bestDay: 0,
    streak: 0,
    lastDay: new Date().toDateString(),
    addedToday: 0,
    lastAddedDay: new Date().toDateString(),
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveStats();
    }
  }, [stats]);

  const loadStats = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        setStats(JSON.parse(saved));
      }
      setIsLoaded(true);
    } catch (error) {
      console.log("Ошибка загрузки статистики:", error);
      setIsLoaded(true);
    }
  };

  const saveStats = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (error) {
      console.log("Ошибка сохранения статистики:", error);
    }
  };

const updateStat = () => {
  setStats(prev => {
    const streakUpdated = updateStreak(prev);
    const finalStat = updateState(streakUpdated);
    saveStats(finalStat);
    return finalStat;
  });
};

  const updateAdded = () => {
    setStats(prev => {
      const newStat = updateAddedToday(prev);
      saveStats(newStat);
      return newStat;
    });
  };

  return { stats, updateStat, updateAdded };
}

