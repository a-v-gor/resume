import returnElement from './returnElement';

interface Props {
  tag?: string;
  classes: string[];
  wrapperTag: string;
  wrapperClasses: string[];
  headerClasses: string[];
  descriptionClasses: string[];
  title?: string;
  subitle?: string;
}

interface resultObj {
  section: HTMLElement;
  header: HTMLElement;
  description: HTMLElement;
}

export default function returnSection(props: Props): resultObj {
  let tag = '';
  if (props.tag !== undefined) {
    tag = props.tag;
  } else {
    tag = 'div';
  }
  const section = returnElement({
    tag: tag,
    classes: props.classes,
  });
  const wrapper = returnElement({
    tag: props.wrapperTag,
    classes: props.wrapperClasses,
  });
  const header = returnElement({
    tag: 'div',
    classes: props.headerClasses,
  });
  const description = returnElement({
    tag: 'div',
    classes: props.descriptionClasses,
  });
  if (props.title !== undefined && props.subitle !== undefined) {
    const title = returnElement({
      tag: 'h2',
      classes: ['article-block__title', 'title'],
      textContent: props.title,
    });
    const subtitle = returnElement({
      tag: 'p',
      classes: ['article-block__subtitle', 'text'],
      textContent: props.subitle,
    });
    header.append(title, subtitle);
  }

  wrapper.append(header, description);
  section.append(wrapper);

  const result = {
    section: section,
    header: header,
    description: description,
  };

  return result;
}
