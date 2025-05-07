// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test valid phone number 10 digits', () => { //valid format (xxx) xxx-xxxx
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
})

test('test invalid format with letters', () => { //"abc" returns false
  expect(isPhoneNumber("abc")).toBe(false);
})

test('test valid email format', () => { // abc@def.ghi
  expect(isEmail("bald@gmail.com")).toBe(true);
})

test('test invalid email format', () => { // no @ no . symbols
  expect(isEmail("baldgmailcom")).toBe(false);
})

test('test strong password', () => { //meets requirements, utilizes all passable inputs
  expect(isStrongPassword("Abc123__12_def")).toBe(true);
})

test('test weak and invalid password', () => { //other symbols
  expect(isStrongPassword("Abc123__12_def!@#$")).toBe(false);
})

test('test single digit date', () => { //meets format, tests XX as 1 digit
  expect(isDate("1/1/2005")).toBe(true);
})

test('test wrong date, letters', () => { // ab / cd / 2000
  expect(isStrongPassword("aB/Cd/2005")).toBe(false);
})



