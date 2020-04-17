import { UserOnEarth } from "./../src/solar-age.js";
import { Planets } from "./../src/solar-age.js";
import { Mercury } from "./../src/solar-age.js";
import { Venus } from "./../src/solar-age.js";
import { Mars } from "./../src/solar-age.js";
import { Jupiter } from "./../src/solar-age.js";
import { Saturn } from "./../src/solar-age.js";
import { Uranus } from "./../src/solar-age.js";
import { Neptune } from "./../src/solar-age.js";

describe ("UserOnEarth", () => {

  var user;

  beforeEach(() => {
    user = new UserOnEarth("12/01/1982");
  });

  test ('should take in birthday and record', () => {
    expect (user.birthday).toEqual("12/01/1982");
  });

  test ('should transform user-inputted birthday into milliseconds since 1/1/1970', () => {
    expect (user.dateifier()).toEqual(407577600000);
  });

  test ('should take difference between today and birthdate and report in days', () => {
    expect (user.agerator()).toEqual(13652);
  });

  test ('should take age in days and convert to years', () => {
    expect (user.toEarthYears()).toEqual(37);
  })

  test ('should produce appropriate "remaining years of life" for user', () => {
    expect (user.lifeExpectancy()).toEqual(45.661);
  });

});

describe ("Planet", () => {
  var planetZ;
  var user = new UserOnEarth("12/01/1982");

  beforeEach(() => {
    planetZ = new Planets (10, user);
  });

  test ('should convert user age into planetZ years', () => {
    expect (planetZ.convertAge(user)).toEqual("3.70");
  });

  test ('should convert user life expectancy into planetZ years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual("4.57");
  });

});

describe ("Mercury", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetM = new Mercury;

  test ('should convert user age into Mercury years', () => {
    expect (planetM.convertAge(user)).toEqual("154.17");
  });
  test ('should convert user life expectancy into Mercury years', () => {
    expect (planetM.convertLifeExpectancy(user)).toEqual("190.25");
  });

});