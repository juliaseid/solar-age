import { UserOnEarth } from "./../src/solar-age.js";
import { Planets } from "./../src/solar-age.js";

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
    expect (user.lifeExpectancy()).toEqual(45.661)
  })

});