import { MinorAges, Minors } from '../../context';
import { IMinor } from '../../services/dtos/fincafe-back.dto';

const childrenMaxAge = 5;
export const MinorAgesToMinorsUtil = (minors: MinorAges[]) => {
  let children = 0;
  let youngs = 0;

  minors.forEach((minor) => {
    if (minor.age <= childrenMaxAge) {
      children++;
      return;
    }
    youngs++;
    return;
  });

  return { children, youngs };
};

export const MinorAgesToMinorsInfo = (minors: MinorAges[]) => {
  const children: IMinor[] = [];
  const youngs: IMinor[] = [];
  minors.forEach((minor) => {
    if (minor.age <= childrenMaxAge) {
      children.push({ age: minor.age });
      return;
    }
    youngs.push({ age: minor.age });
    return;
  });

  return { children, youngs };
};

export const MinorsTotal = (minors: Minors) => {
  const { children, youngs } = minors;
  return children.length + youngs.length;
};
