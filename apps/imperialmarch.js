Badge.apps['The Imperial March'] = function () {
  var vader = {
    width: 128, height: 64, bpp: 1,
    transparent: 0,
    buffer: E.toArrayBuffer(atob("////////////////////////////////////////////////////4H///////////////////wO8P/////////////////3//w/////////////////z///n////////////////7/5/+////////////////8/+f/3//////////////////n/9////////////////n/4//v///////////////9/+P/7///////////////8f/h//////////////////P/oH/3///////////////4/iB/t///////////////68/j+F///////////////+ZwfkcD///////////////h2//rw///////////////47///fP//////////////8d/7//7///////////////P/9//+f//////////////3/////3//////////////9//4fr///////////////+//6R//v//////////////v4fi4f7//////////////z/Dv+L/f/////////////9/4/9D/3//////////////f+frMf+//////////////v+/qpv/v/////////////7/0arH/5/////////////8/2Kqv7+f/////////////f92ADe/3/////////////n/4AA//+////////////////mRX///////////////9//+k3//9/////////////f//7L///f////////////3///T///3////////////////////////////////////5/////////////////////n///P///////////////38f///////////////////coP/////////////////2/n8/////////////////je7/P/+P////////////8D3x9///wP////////////353/x///D/////////////+b//P/////////////////H/xz/////////////////9//x//////////////////X/wf/////////////////+c/v/////////////////P//n/////////////////rf/5/////////////////63/+f////////////////9t/8f/////////////////bPx//////////////////+79///////////////////u5////////////////////u////////////////////9////////////////////ff////////////////////3////////////////////////////////////////////////////////////////////////////w=="))
  };

  var data = [440, 250, 0, 250, 440, 250, 0, 250, 440, 250, 0, 250, 349.228, 187.5, 0, 125, 523.251, 62.5, 0, 125, 440, 250, 0, 250, 349.228, 187.5, 0, 125, 523.251, 62.5, 0, 125, 440, 500, 0, 500, 659.255, 250, 0, 250, 659.255, 250, 0, 250, 659.255, 250, 0, 250, 698.456, 187.5, 0, 125, 523.251, 62.5, 0, 125, 415.305, 250, 0, 250, 349.228, 187.5, 0, 125, 523.251, 62.5, 0, 125, 440, 500, 0, 500, 880, 250, 0, 250, 440, 187.5, 0, 125, 440, 62.5, 0, 125, 880, 250, 0, 250, 830.609, 187.5, 0, 125, 783.991, 62.5, 0, 125, 698.456, 62.5, 0, 62.5, 698.456, 62.5, 0, 62.5, 698.456, 62.5, 0, 437.5, 466.164, 125, 0, 125, 622.254, 250, 0, 250, 587.33, 187.5, 0, 125, 523.251, 62.5, 0, 125, 523.251, 62.5, 0, 62.5, 493.883, 62.5, 0, 62.5, 523.251, 62.5, 0, 437.5, 261.626, 125, 0, 125, 329.628, 250, 0, 250, 261.626, 187.5, 0, 125, 391.995, 62.5, 0, 125, 311.127, 250, 0, 250, 261.626, 187.5, 0, 125, 391.995, 62.5, 0, 125, 329.628, 500];

  var white = [64, 64, 64];
  var black = [0, 0, 0];
  var red = [0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255];

  g.clear();
  g.drawImage(vader);
  g.flip();

  NC.backlight(red);

  (function play(f, t) {
    var ff = data.shift();
    var tt = data.shift();
    if (ff !== undefined) {
      setTimeout(() => {
        if (f === 0) {
          NC.ledTop(black);
          NC.ledBottom(black);
          analogWrite(VIBL, 0);
        } else {
          NC.ledTop(white);
          NC.ledBottom(white);
          analogWrite(VIBL, 0.1, { freq: f });
        }
        play(ff, tt);
      }, t);
    } else {
      NC.backlight(black);
      NC.ledTop(black);
      NC.ledBottom(black);
      analogWrite(VIBL, 0);
      Badge.menu();
    }
  })(0, 0);
};