/**
 * Find the friend with the smallest name
 */

function smallestName(names) {
  let small = names[0];
  for (const name of names) {
    if (small.length > name.length) {
      small = name;
    }
  }

  return small;
}

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
const smallName = smallestName(heights2);
console.log(heights2, "Smallest name is: ", smallName);
