// import { pageElements } from "../common/pageElements";
// import { makeInteractiveFooterVisible, makeInteractiveHeaderVisible, makeInteractiveHide } from "./visible";

// function returnSkills() {
//   return document.querySelectorAll('.item__progress');
// }

// function showSkillsProgress(dataArr: string[]) {
//   const skills = returnSkills();
//   skills.forEach((item, index) => {
//     if (item.getAttribute('value') !== dataArr[index]) {
//       item.setAttribute('value', dataArr[index]);
//     }
//   });
// }

// function checkSkillsView() {

//   const [header, skills, footer] = [pageElements.header, pageElements.skills, pageElements.footer];
//   makeElementInteractive(header, makeInteractiveHeaderVisible, makeInteractiveHide);
//   makeElementInteractive(footer, makeInteractiveFooterVisible, makeInteractiveHide);
// }
// function checkSkillsView() {
//   const skillsSection: HTMLElement = <HTMLElement>(
//     document.querySelector('.skills')
//   );
//   const domRect = skillsSection.getBoundingClientRect();
//   if (domRect.bottom <= window.innerHeight && domRect.top > 0) {
//     const progressNodeList = document.querySelectorAll('.item__percent');
//     const percents: string[] = [];
//     progressNodeList.forEach((item) => {
//       const percent: string = <string>item.textContent;
//       percents.push(percent);
//     });
//     showSkillsProgress(percents);
//   } else if (domRect.bottom < 0 || domRect.top > window.innerHeight) {
//     const dataArr: string[] = <string[]>new Array(6).fill('0');
//     showSkillsProgress(dataArr);
//   }
// }

// export { checkSkillsView };
