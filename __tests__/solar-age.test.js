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
    expect (user.toEarthYears()).toEqual(37.43);
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
    expect (planetZ.convertAge(user)).toEqual(3.74);
  });

  test ('should convert user life expectancy into planetZ years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(4.57);
  });
});

describe ("Mercury", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Mercury;

  test ('should convert user age into Mercury years', () => {
    expect (planetZ.convertAge(user)).toEqual(155.96);
  });

  test ('should convert user life expectancy into Mercury years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(190.25);
  });
});

describe ("Venus", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Venus;

  test ('should convert user age into Venus years', () => {
    expect (planetZ.convertAge(user)).toEqual(60.37);
  });
  
  test ('should convert user life expectancy into Venus years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(73.65);
  });
});

describe ("Mars", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Mars;

  test ('should convert user age into Mars years', () => {
    expect (planetZ.convertAge(user)).toEqual(19.91);
  });
  
  test ('should convert user life expectancy into Mars years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(24.29);
  });
});

describe ("Jupiter", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Jupiter;

  test ('should convert user age into Jupiter years', () => {
    expect (planetZ.convertAge(user)).toEqual(3.16);
  });
  
  test ('should convert user life expectancy into Jupiter years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(3.85);
  });
});

describe ("Saturn", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Saturn;

  test ('should convert user age into Saturn years', () => {
    expect (planetZ.convertAge(user)).toEqual(1.27);
  });
  
  test ('should convert user life expectancy into Saturn years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(1.55);
  });
});

describe ("Uranus", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Uranus;

  test ('should convert user age into Uranus years', () => {
    expect (planetZ.convertAge(user)).toEqual(0.44);
  });
  
  test ('should convert user life expectancy into Uranus years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(0.54);
  });
});

describe ("Neptune", () => {
  var user = new UserOnEarth("12/01/1982");
  var planetZ = new Neptune;

  test ('should convert user age into Neptune years', () => {
    expect (planetZ.convertAge(user)).toEqual(0.23);
  });
  
  test ('should convert user life expectancy into Neptune years', () => {
    expect (planetZ.convertLifeExpectancy(user)).toEqual(0.28);
  });
});