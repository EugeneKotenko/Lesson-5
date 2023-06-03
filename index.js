const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let positiveCount = 0;
let maxElement = numbers[0];
let maxElementIndex = 0;
let negativeCount = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let evenPositiveSum = 0;
let oddPositiveSum = 0;
let positiveProduct = 1;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;

  if (number > 0) {
    positiveCount++;
    positiveProduct *= number;

    if (number % 2 === 0) {
      evenPositiveCount++;
      evenPositiveSum += number;
    } 
    
    else {
      oddPositiveCount++;
      oddPositiveSum += number;
    }
  }

  if (number < 0) {
    negativeCount++;
  }

  if (number > maxElement) {
    maxElement = number;
    maxElementIndex = i;
  }
}

const message =
  `Сума: ${sum}\n` +
  `Кількість позитивних елементів: ${positiveCount}\n` +
  `Максимальний елемент: ${maxElement} (порядковий номер: ${maxElementIndex})\n` +
  `Кількість негативних елементів: ${negativeCount}\n` +
  `Кількість непарних позитивних елементів: ${oddPositiveCount}\n` +
  `Кількість парних позитивних елементів: ${evenPositiveCount}\n` +
  `Сума парних позитивних елементів: ${evenPositiveSum}\n` +
  `Сума непарних позитивних елементів: ${oddPositiveSum}\n` +
  `Добуток позитивних елементів: ${positiveProduct}`;

alert(message);
