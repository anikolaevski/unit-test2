/* eslint-disable array-callback-return */
function checkHealth({ name, health }) {
  let outValue = '';
  if (health > 50) {
    outValue = 'healthy';
  } else if (health < 15) {
    outValue = 'critical';
  } else {
    outValue = 'wounded';
  }
  return `${name} is ${outValue}`;
}

function charsArrayFunc() {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  arr.sort(
    (a, b) => b.health - a.health,
  );
  return arr;
}

export { checkHealth, charsArrayFunc };
