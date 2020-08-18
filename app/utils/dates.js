export const YYYY_MM_DD_HH_MM_SS = 'YYYY_MM_DD_HH_MM_SS';

const format = function(date) {
  return `${[date.getMonth() + 1, date.getDate(), date.getFullYear()].join(
    '/',
  )} ${[date.getHours(), date.getMinutes(), date.getSeconds()].join(':')}`;
};

export { format };
