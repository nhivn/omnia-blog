import React from 'react';

// https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js
export function formatReadingTime(minutes) {
  const roundedTime = Math.round(minutes);
  const coffees = Math.round(minutes / 5);
  const lunches = Math.round(coffees / Math.E);

  if (coffees > 5)
    return {
      minutes: roundedTime,
      type: 'lunch',
      count: lunches
    }

  return {
    minutes: roundedTime,
    type: 'coffee',
    count: coffees,
  };
}
