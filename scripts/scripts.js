window.onload = function () {
  //Slider

  const slider = document.getElementById("slider");
  const globalLight = document.getElementById("globalLight");
  const overlay = document.getElementById("overlay");

  slider.onclick = function () {
    slider.classList.toggle("slider-on");
    overlay.classList.toggle("overlay-on");
    buttonLight2.classList.toggle("dark-buttons");
  };

  //Light 1

  const buttonLightOn1 = document.getElementById("buttonLightOn1");
  const buttonLightOff1 = document.getElementById("buttonLightOff1");
  const light1 = document.getElementById("light1");

  lightOn1 = function () {
    light1.classList.add("light-yellow");
  };

  lightOff1 = function () {
    light1.classList.remove("light-yellow");
  };

  buttonLightOn1.onclick = function () {
    lightOn1();
  };

  buttonLightOff1.onclick = function () {
    lightOff1();
  };

  //Light 2

  const light2 = document.getElementById("light2");
  const buttonLight2 = document.getElementById("buttonLight2");

  lightOn2 = function () {
    light2.classList.toggle("light-yellow");
  };

  buttonLight2.onclick = function () {
    lightOn2();
  };

  //Light 3

  const light3 = document.getElementById("light3");
  const buttonLight3 = document.getElementById("buttonLight3");
  let lightColors = ["light-yellow", "light-red", "light-blue", "light-green"];
  let colorIndex = 0;
  let lightStatus = false;

  lightOn = function () {
    light3.classList.add(lightColors[colorIndex]);
    colorIndex = (colorIndex + 1) % lightColors.length;
    lightStatus = true;
  };

  lightOff = function () {
    light3.classList.remove(...lightColors);
    lightStatus = false;
  };

  lightSwitch = function () {
    lightStatus ? lightOff() : lightOn();
  };

  buttonLight3.onclick = function () {
    lightSwitch();
  };
};
