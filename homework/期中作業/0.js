function play(userChoice) {
  const choices = ['剪刀', '石頭', '布'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = `平手！你出的是 ${userChoice}，電腦也是 ${computerChoice}`;
  } else if (
    (userChoice === '剪刀' && computerChoice === '布') ||
    (userChoice === '石頭' && computerChoice === '剪刀') ||
    (userChoice === '布' && computerChoice === '石頭')
  ) {
    result = `你贏了！你出的是 ${userChoice}，電腦出的是 ${computerChoice}`;
  } else {
    result = `你輸了！你出的是 ${userChoice}，電腦出的是 ${computerChoice}`;
  }

  document.getElementById('result').textContent = result;
}
