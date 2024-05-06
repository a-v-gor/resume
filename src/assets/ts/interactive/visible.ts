function returnInteractiveNodes(select: string) {
  const selector =
    select === 'all'
      ? '.interactive'
      : select === 'header'
        ? '.header .interactive'
        : '.footer .interactive';
  return document.querySelectorAll(selector);
}
function makeInteractiveHide() {
  const nodesToHide = returnInteractiveNodes('all');
  nodesToHide.forEach((element) => {
    element.classList.add('interactive_unactive');
  });
}
function makeNodesVisible(nodes: NodeList) {
  let timeToWait = 0;

  nodes.forEach((element) => {
    function showElement() {
      const el: HTMLElement = <HTMLElement>element;
      el.classList.replace('interactive_unactive', 'interactive_active');
    }
    setTimeout(showElement, timeToWait);
    timeToWait += 220;
  });
}
function makeInteractiveHeaderVisible() {
  const nodesToShow = returnInteractiveNodes('header');
  makeNodesVisible(nodesToShow);
}
function makeInteractiveFooterVisible() {
  const nodesToShow = returnInteractiveNodes('footer');
  makeNodesVisible(nodesToShow);
}

export {
  makeInteractiveHide,
  makeInteractiveHeaderVisible,
  makeInteractiveFooterVisible,
};
