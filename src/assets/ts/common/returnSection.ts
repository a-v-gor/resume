import returnElement from './returnElement';

interface Props {
  tag: string;
  classes: string[];
  wrapperTag: string;
  wrapperClasses: string[];
  headerClasses: string[];
  descriptionClasses: string[];
}

interface resultObj {
  section: HTMLElement;
  header: HTMLElement;
  description: HTMLElement;
}

export default function returnSection(props: Props): resultObj {
  const section = returnElement({
    tag: props.tag,
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

  wrapper.append(header, description);
  section.append(wrapper);

  const result = {
    section: section,
    header: header,
    description: description,
  };

  return result;
}
