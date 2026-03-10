export const randomReverseCard = (setRevers) => {
  const isRevers = Math.random() < 0.5;
  setRevers(isRevers); 
};

export const iconsCheckAnswer = (answer) => {
  if (answer) return "checkmark";
  return "close";
};

export const colorCheckAnswer = (answer) => {
  if (answer) return "green";
  return "red";
};

export const filterAndSortArr = (cards) => {
  const arr = cards.filter((card) => card.nextRepeat < Date.now());
  const sortArr = arr.sort((a, b) => a.nextRepeat - b.nextRepeat);
  return sortArr;
};

export const checkAnswer = (value, card, setAnswer, setErrorCount, errorCount) => {
  const answerUser = value.trim().toLowerCase();
  const translationWord = card.translation.trim().toLowerCase();

  const answer = translationWord
    .split(/[\s,//]+/)
    .some((word) => word === answerUser || answerUser.includes(word));

  setAnswer(answer);
  if (errorCount < 2) setErrorCount(errorCount + 1);
};

export const pickOutComplexity = (
  lvl,
  card,
  updateCardInterval,
  updateStat,
  setAnswer,
  setValue,
  setErrorCount,
  setModal,
  setRevers,
  newArr
) => {
  if (!card) return;
  
  let newInterval = card.interval || 0.5;
  const day = 24 * 60 * 60 * 1000;
  
  if (lvl === "Ease") newInterval *= 2;
  else if (lvl === "Medium") newInterval *= 1.5;
  else if (lvl === "Hard") newInterval = 0.5;
  
  const maxInterval = 90; 
  newInterval = Math.min(newInterval, maxInterval);

  const newCardInterval = {
    ...card,
    interval: newInterval,
    nextRepeat: Date.now() + newInterval * day,
  };
  
  updateCardInterval(newCardInterval);
  updateStat();
  randomReverseCard(setRevers);

  if (newArr.length > 1) {
    setAnswer(null);
    setValue("");
    setErrorCount(0);
  } else {
    setModal(true);
  }
};