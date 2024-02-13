namespace randomNumber {
  // Challenge 5
  //
  // Beklenenler:
  // TypeScript kullanmanın faydaları nelerdir?
  // 1-100 arasında rastgele üretilen 10 sayıdan en küçüğü ile en büyüğünü ve aritmetik ortalamayı bulan program.
  //
  // Örnek Çıktı:
  // Üretilen sayılar: [10,9,34,9,15,24,7]
  // En küçük sayi: [7]
  // En büyük sayi: [34]
  // Aritmetik ortalama: [21]
  //DEĞİŞKENLER
  //RASTGELE SAYI
  //EN KÜÇÜK SAYI

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  export function getRandomNumbersArray(
    count: number,
    min: number,
    max: number
  ): number[] {
    const numbers: number[] = [];

    for (let i = 0; i < count; i++) {
      numbers.push(generateRandomNumber(min, max));
    }
    return numbers;
  }

  export function findNumbers(arr: number[]) {
    if (arr.length > 0) {
      const minNumber = Math.min(...arr);
      const maxNumber = Math.max(...arr);
      const averageNumber = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
      return { minNumber, maxNumber, averageNumber };
    } else {
      return { minNumber: 0, maxNumber: 0, averageNumber: 0 };
    }
  }
}

const randomNumbersArray = randomNumber.getRandomNumbersArray(10, 1, 100);
const someNumbers = randomNumber.findNumbers(randomNumbersArray);
console.log(someNumbers);

const resultsContainer = document.createElement("div");
resultsContainer.innerHTML = `
  <p>Üretilen sayılar: [${randomNumbersArray.join(", ")}]</p>
  <p>En küçük sayı: [${someNumbers.minNumber}]</p>
  <p>En büyük sayı: [${someNumbers.maxNumber}]</p>
  <p>Aritmetik ortalama: [${someNumbers.averageNumber}]</p>
`;

document.body.appendChild(resultsContainer);
