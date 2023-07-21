const baseUrl = "https://deckofcardsapi.com/api/deck";

export const fetchDeck = async () => {
  try {
    const response = await fetch(`${baseUrl}/new/shuffle/?deck_count=6`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const drawCard = async (deckId, num) => {
  try {
    const response = await fetch(`${baseUrl}/${deckId}/draw/?count=${num}`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const reshuffleDeck = async (deckId) => {
  try {
    const response = await fetch(`${baseUrl}/${deckId}/shuffle/`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const cardBack = "https://deckofcardsapi.com/static/img/back.png";
