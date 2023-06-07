const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sum = 0;
let positiveCount = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number > 0) {
    positiveCount++;
    sum += number;
  }
}

const message = `
Сума: ${sum}
Кількість позитивних елементів: ${positiveCount}
`;

alert(message);
