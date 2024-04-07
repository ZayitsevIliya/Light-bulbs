window.onload = function () {
  const lightsBulbs = (light1 = document.getElementById("light1")),
    buttonLightOn1 = document.getElementById("buttonLightOn1"),
    buttonLightOff1 = document.getElementById("buttonLightOff1"),
    light2 = document.getElementById("light2"),
    buttonLight2 = document.getElementById("buttonLight2"),
    light3 = document.getElementById("light3"),
    buttonLight3 = document.getElementById("buttonLight3");

  buttonLightOn1.onclick = function () {
    light1.style.backgroundColor = "yellow";
  };

  buttonLightOff1.onclick = function () {
    light1.style.backgroundColor = "white";
  };

  buttonLight2.onclick = function () {
    switch (light2.style.backgroundColor) {
      case "":
        light2.style.backgroundColor = "yellow";
        break;
      case "yellow":
        light2.style.backgroundColor = "";
        break;
    }
  };

  let lightColor = ["yellow", "red", "blue"];
  let colorIndex = 0;

  buttonLight3.onclick = function () {
    switch (light3.style.backgroundColor) {
      case "":
        light3.style.backgroundColor = lightColor[colorIndex];
        break;
      case "yellow":
        light3.style.backgroundColor = "";
        colorIndex++;
        break;
      case "red":
        light3.style.backgroundColor = "";
        colorIndex++;
        break;
      case "blue":
        light3.style.backgroundColor = "";
        colorIndex = 0;
        break;
    }
  };
};
