const LeapYear = require("../LeapYearKata.js");

test("should return true when given 16", () => {
  expect(LeapYear.LeapYear(16)).toBe(true);
});

test("should return false when given 9", () => {
  expect(LeapYear.LeapYear(9)).toBe(false);
});

test("should return true when given 20", () => {
  expect(LeapYear.LeapYear(20)).toBe(true);
});

test("should return true when given 36", () => {
  expect(LeapYear.LeapYear(36)).toBe(true);
});

test("should return false when given 100", () => {
  expect(LeapYear.LeapYear(100)).toBe(false);
});

test("should return false when given 200", () => {
  expect(LeapYear.LeapYear(200)).toBe(false);
});

test("should return false when given 300", () => {
  expect(LeapYear.LeapYear(300)).toBe(false);
});

test("should return true when given 400", () => {
  expect(LeapYear.LeapYear(400)).toBe(true);
});

test("should return true when given 800", () => {
  expect(LeapYear.LeapYear(800)).toBe(true);
});

test("should return true when given 1200", () => {
  expect(LeapYear.LeapYear(1200)).toBe(true);
});