// @ts-nocheck
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@vocab_cards";

export default function useCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const arr = JSON.parse(saved);
        setCards(arr.map((card) => ({
            lvl: "hard",
            ...card
          })),
        )
      }
    } catch (e) {
      console.log("Ошибка загрузки карточек");
    }
  };

  const saveCards = async (newCards) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newCards));
    } catch (e) {
      console.log("Ошибка сохранения карточек");
    }
  };

  const addArrCard = (word, translation, example) => {
    const day = 24 * 60 * 60 * 1000;
    const interval = 0.5;
    const newCard = {
      id: Date.now(),
      word,
      translation,
      example,
      interval: interval,
      nextRepeat: Date.now() + interval * day,
      lvl: "Hard"
    };
    const updated = [...cards, newCard];
    setCards(updated);
    saveCards(updated); // сохраняем
  };
  const deleteCard = (id) => {
    setCards((prev) => {
      const update = prev.filter((card) => card.id !== id);
      saveCards(update);
      return update;
    });
  };

  const updateCardInterval = (newCardInterval) => {
    setCards((prev) => {
      const newArr = prev.map((card) => 
        card.id === newCardInterval.id ? newCardInterval : card,
      );
      saveCards(newArr);
      return newArr;
    });
  };

  const saveEditCard = (editCard) => {
    setCards((prev) => {
      const newArr = prev.map((card) =>
        editCard.id === card.id ? editCard : card,
      );
      saveCards(newArr);
      return newArr;
    });
  };

  return { cards, addArrCard, deleteCard, updateCardInterval, saveEditCard };
}
