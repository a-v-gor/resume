function returnSkills() {
  return document.querySelectorAll('.skills__item');
}

export default function zeroSkills() {
  const skills = returnSkills();
  skills.forEach((item) => {
    console.log(item.lastChild);
  });
}

// function logOk() {
//   const domRect = skillsSectionObject.section.getBoundingClientRect();
//   if(domRect.bottom <= window.innerHeight && domRect.bottom > 0) {
//     console.log(domRect);
//   }
// }

// window.addEventListener('scroll', logOk);
