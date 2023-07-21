export const randomKey = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const parseCardValue = (value) => {
  switch (value) {
    case "KING":
    case "QUEEN":
    case "JACK": {
      return 10;
    }
    case "ACE": {
      // setIsAce(true);
      console.log("ACE case. No logic yet");
      return 1;
    }
    default: {
      return parseInt(value);
    }
  }
};

export const updateScore = (cards) => {
  let score = 0;
  let aces = 0;

  cards.forEach((card) => {
    if (card.value === "ACE") {
      aces += 1;
      score += 1;
    } else {
      score += parseCardValue(card.value);
    }
  });
  while (score <= 11 && aces > 0) {
    score += 10;
    aces -= 1;
  }
  return score;
};
