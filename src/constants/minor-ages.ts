export const MINOR_AGES = [{ label: `0`, value: 0 }];
const maxAge = 17;

for (let i = 0; maxAge > i; i++) {
  MINOR_AGES.push({ label: `${i + 1}`, value: i + 1 });
}
