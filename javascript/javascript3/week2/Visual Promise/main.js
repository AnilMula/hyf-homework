/*   { x: 20, y: 300 },
  { x: 400, y: 300 },
  { x: 400, y: 20 },
 */

function translateOneByOne() {
  moveElement(redBox, { x: 20, y: 300 }).then(() => {
    console.log("Element has been moved");

    moveElement(blueBox, { x: 400, y: 300 }).then(() => {
      console.log("Element has been moved");

      moveElement(greenBox, { x: 400, y: 20 }).then(() => {
        console.log("Element has been moved");
      });
    });
  });
}

translateOneByOne();
function translateAllAtOnce() {
  const redBoxPromise = moveElement(redBox, { x: 20, y: 300 });
  const blueBoxPromise = moveElement(blueBox, { x: 400, y: 300 });
  const greenBoxPromise = moveElement(greenBox, { x: 400, y: 20 });
  Promise.all([redBoxPromise, blueBoxPromise, greenBoxPromise]).then(() => {
    console.log("all the elements have been moved");
  });
}
//translateAllAtOnce();
