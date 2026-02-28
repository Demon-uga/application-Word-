import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@vocab_cards";

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) setCards(JSON.parse(saved));
    } catch (e) {
      console.log("Ошибка загрузки");
    }
  };

  const saveCards = async (newCards) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newCards));
    } catch (e) {
      console.log("Ошибка сохранения");
    }
  };

  const addArrCard = (word, translation, example) => {
    const newCard = {
      id: Date.now(),
      word,
      translation,
      example,
    };
    const updated = [...cards, newCard];
    setCards(updated);
    saveCards(updated); // сохраняем
  };
  const deleteCard = (id) => {
       console.log('Удаляем карточку с id:', id);
  console.log('Текущие карточки:', cards);
    setCards((prev) => {
      const update = prev.filter((card) => card.id !== id);
      saveCards(update);
      return update
    });
  };

  return { cards, addArrCard, deleteCard };
}
