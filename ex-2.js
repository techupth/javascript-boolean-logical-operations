// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = 4001;
isWeekday = true;
hasBoughtProductFromITCategory = true;
hasAttendedDiscountEvent = true;
isPlatinum = true;

hasPromotion =
  4000 < lastMonthPaidMoreThan4000 &&
  isWeekday &&
  hasBoughtProductFromITCategory &&
  hasAttendedDiscountEvent &&
  isPlatinum &&
  console.log(hasPromotion);
