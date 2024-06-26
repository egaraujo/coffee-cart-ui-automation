const getRandomArbitrary = (min, max) => parseInt(Math.random() * (max - min) + min, 10)
const generateRandomRGBColor = () =>
  `rgb(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, 0.002)`;

export async function makeItSlow() {
  // load big lib
  const useless = await import('./bigbigcode2.js');
  console.debug(useless);

  let shouldPrint = true;

  `rgba(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, 0.002)`;
  for (let i = 0; i < 10000; i++) {
    let random = 0;
    random = Math.floor(Math.random() * 100);
    const el = document.getElementById('invisible');
    if (shouldPrint) console.debug(random);
    shouldPrint = false;

    if (el) {
      el.innerText = `${random}`.repeat(3);
      el.style.color = `${generateRandomRGBColor()}`;
      el.style.backgroundColor = `${generateRandomRGBColor()}`;
    }
  };
}