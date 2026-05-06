// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber Unit Tests
test('is valid phone number', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('is valid phone number x2', () => {
  expect(isPhoneNumber("(111) 222-3333")).toBe(true);
});

test('is NOT valid phone number', () => {
  expect(isPhoneNumber("123 456 7890")).toBe(false);
});

test('is NOT valid phone number x2', () => {
  expect(isPhoneNumber("(I23) 4S6-789O")).toBe(false);
});

// isEmail Unit Tests
test('is valid email', () => {
  expect(isEmail("example@gmail.com")).toBe(true);
});

test('is valid email x2', () => {
  expect(isEmail("student@ucsd.edu")).toBe(true);
});

test('is NOT valid email', () => {
  expect(isEmail("example@gmai1231l.com")).toBe(false);
});

test('is NOT valid email x2', () => {
  expect(isEmail("@ucsd.edu")).toBe(false);
});

// isStrongPassword Unit Tests
test('is strong password', () => {
  expect(isStrongPassword("a9H8ahfb_ah")).toBe(true);
});

test('is strong password x2', () => {
  expect(isStrongPassword("a3S_")).toBe(true);
});

test('is NOT strong password', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test('is NOT valid password', () => {
  expect(isStrongPassword("a!(@*#&*!(@#")).toBe(false);
});

// isDate Unit Tests
test('is valid date', () => {
  expect(isDate("01/14/2026")).toBe(true);
});

test('is valid date x2', () => {
  expect(isDate("5/9/2000")).toBe(true);
});

test('is NOT valid date', () => {
  expect(isDate("1/17/26")).toBe(false);
});

test('is NOT valid date x2', () => {
  expect(isDate("4/211/2014")).toBe(false);
});

// isHexColor Unit Tests
test('is valid hex color', () => {
  expect(isHexColor("#FF0")).toBe(true);
});

test('is valid hex color x2', () => {
  expect(isHexColor("#3f9a04")).toBe(true);
});

test('is NOT valid hex color', () => {
  expect(isHexColor("FFFFFFF")).toBe(false);
});

test('is NOT valid hex color x2', () => {
  expect(isHexColor("#0FR032")).toBe(false);
});