// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isPlatinum &&
    hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
