const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositive = 0;
let countPositive = 0;
let maxElement = numbers[0];
let maxElementIndex = 0;
let countNegative = 0;
let countOddPositive = 0;
let countEvenPositive = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productPositive = 1;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number > 0) {
    sumPositive += number;
    countPositive++;

    if (number % 2 === 0) {
      countEvenPositive++;
      sumEvenPositive += number;
    } else {
      countOddPositive++;
      sumOddPositive += number;
    }

    productPositive *= number;
  }

  if (number < 0) {
    countNegative++;
  }

  if (number > maxElement) {
    maxElement = number;
    maxElementIndex = i;
  }
}

const message = `
Сума позитивних елементів: ${sumPositive}
Кількість позитивних елементів: ${countPositive}
Максимальний елемент: ${maxElement} (порядковий номер: ${maxElementIndex})
Кількість негативних елементів: ${countNegative}
Кількість непарних позитивних елементів: ${countOddPositive}
Кількість парних позитивних елементів: ${countEvenPositive}
Сума парних позитивних елементів: ${sumEvenPositive}
Сума непарних позитивних елементів: ${sumOddPositive}
Добуток позитивних елементів: ${productPositive}
`;

alert(message);
