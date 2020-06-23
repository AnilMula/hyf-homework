const button = document.querySelector("button");

let timeStampOld = new Date();
const checkDoubleClick = () => {
  let timeStampNew = new Date();
  let timeDifference = timeStampNew - timeStampOld; // time in milli seconds
  if (timeDifference / 1000 < 0.5) {
    console.log(
      `DOUBLE click : time difference ${timeDifference} milli seconds`
    );
  } else {
    console.log(
      `Not a double click: time difference ${timeDifference} milli seconds`
    );
  }
  timeStampOld = timeStampNew;
};

button.addEventListener("click", checkDoubleClick);
