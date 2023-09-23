javascript
function checkPasswordStrength() {
  var password = document.getElementById('password').value;
  var strength = 0;
  var remarks = '';
  var lowerCount = upperCount = numCount = wspaceCount = specialCount = 0;

  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (/[a-z]/.test(char)) {
      lowerCount += 1;
    } else if (/[A-Z]/.test(char)) {
      upperCount += 1;
    } else if (/[0-9]/.test(char)) {
      numCount += 1;
    } else if (/\s/.test(char)) {
      wspaceCount += 1;
    } else {
      specialCount += 1;
    }
  }

  if (lowerCount >= 1) {
    strength += 1;
  }
  if (upperCount >= 1) {
    strength += 1;
  }
  if (numCount >= 1) {
    strength += 1;
  }
  if (wspaceCount >= 1) {
    strength += 1;
  }
  if (specialCount >= 1) {
    strength += 1;
  }

  if (strength === 1) {
    remarks = 'Это очень плохой пароль. Измените его как можно скорее.';
  } else if (strength === 2) {
    remarks = 'Это слабый пароль. Рекомендуется использовать более надежный пароль.';
  } else if (strength === 3) {
    remarks = 'Ваш пароль нормальный, но его можно улучшить.';
  } else if (strength === 4) {
    remarks = 'Ваш пароль сложно угадать, но его можно сделать еще более безопасным.';
  } else if (strength === 5) {
    remarks = 'Теперь это действительно очень сильный пароль!!!'
      + ' Хакерам не угадать такой пароль!';
  }

  var result = document.getElementById('result');
  result.innerHTML = '<p>Ваш пароль содержит:</p>'
    + '<p>' + lowerCount + ' строчных букв</p>'
    + '<p>' + upperCount + ' прописных букв</p>'
    + '<p>' + numCount + ' цифр</p>'
    + '<p>' + wspaceCount + ' пробелов</p>'
    + '<p>' + specialCount + ' специальных символов</p>'
    + '<p>Оценка сложности пароля: ' + strength / 5 + '</p>'
    + '<p>Замечания: ' + remarks + '</p>';
}
