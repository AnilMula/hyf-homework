for (let i = 10; i <= 40; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log(`${i} JACKPOT`);
  else if (i % 3 == 0) console.log(`${i} this is divisible by 3`);
  else if (i % 5 == 0) console.log(`${i} this is divisible by 5`);
  else console.log(`${i}`);
}
