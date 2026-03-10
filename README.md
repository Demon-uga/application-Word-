Flashcards App

Мобильное приложение для изучения слов с интервальным повторением.

Приложение показывает карточки со словами и автоматически рассчитывает, когда слово нужно повторить снова. Чем легче слово, тем реже оно будет появляться.

---

Features

- Добавление карточек со словами
- Интервальное повторение (spaced repetition)
- Разные уровни сложности ответа
- Случайное направление перевода (EN → RU / RU → EN)
- Статистика обучения
- Streak (серия дней без пропусков)

---

Screens

1. Add Card
   Добавление новой карточки со словом и переводом.

2. Cards List
   Список всех добавленных карточек.

3. Repeat Cards
   Экран повторения слов по алгоритму интервального повторения.

4. Statistics
   Статистика обучения и streak.

---

Tech Stack

- React Native
- Expo
- TypeScript
- AsyncStorage

---

Project Structure

scr/
├── components/
│ ├── buttons/
│ │ ├── ButtonAdd.tsx
│ │ ├── ButtonEdit.tsx
│ │ ├── ButtonForCard.tsx
│ │ ├── ButtonStatistics.tsx
│ │ └── MyButton.tsx
│ │
│ ├── cards/
│ │ ├── Card.tsx
│ │ ├── CardItem.tsx
│ │ └── RepeatCard.tsx
│ │
│ └── modal/
│ ├── ModalDelete.tsx
│ ├── ModalEdit.tsx
│ ├── ModalEnd.tsx
│ └── ModalInput.tsx
│
├── hooks/
│ ├── useCards.ts
│ └── useStats.ts
│
├── logic/
│ ├── RepeatLogic.js
│ └── Stats.js
│
└── screens/
├── AddCard.tsx
├── ListCards.tsx
├── RepeatCards.tsx
└── Stats.tsx

How repetition works

Каждая карточка хранит:

- "interval" — через сколько дней повторить слово
- "nextRepeat" — дата следующего показа

После ответа пользователя интервал изменяется:

- Hard → интервал = 0.5 день
- Norm → интервал × 1.5
- Easy → интервал × 2

Следующая дата повторения:

nextRepeat = now + interval * 1 day

Карточки для повторения сортируются по "nextRepeat", поэтому сначала показываются самые "просроченные".

---

Future Improvements

- Темы карточек
- Улучшенный алгоритм повторения (Anki-style)
- Анимации
- Экспорт / импорт карточек
- Облачная синхронизация

---

Author

Pet-project created for learning React Native and spaced repetition algorithms.