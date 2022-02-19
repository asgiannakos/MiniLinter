let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


//splits the entered paragraph into an array of words
const storyWords = arr => {
  return arr.split(' ');
};

//removes unnessary words, specified as an array, from the first array
const removeUnnecessaryWords = (arr1, arr2) => {
  for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
          arr1.splice(i, 1);
      }
    }
  }
  return arr1;
};

//counts the number of times a word from the second array appears in the first array
const overusedWordsCount = (arr1, arr2) => {
  let wordCount = 0;
    for (let i=0; i<arr1.length; i++) {
      for (let j=0; j<arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          wordCount ++;
      }
    }
  }
  return wordCount;
};

//counts the number of sentences
const numSentences = arr => {
  let sentCount = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === '.' || arr[i] === '!') {
        sentCount ++;
      }
  }
  return sentCount;
};

//logs all the information
const logInformation = (arr1, arr2) => {
  const wordCount = storyWords(arr1).length;
  const sentCount = numSentences(arr1);
  const numOverusedCount = overusedWordsCount(storyWords(arr1), arr2);
  console.log(`The word count is ${wordCount}.`);
  console.log(`The sentence count is ${sentCount}.`);
  console.log(`The number of times an overused word is used is ${numOverusedCount}.`);
}
