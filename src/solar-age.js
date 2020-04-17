export class UserOnEarth {
  constructor (birthday) {
    this.birthday = birthday
    this.ageInDays = 0;
  };

  dateifier () {
    let birthDate = Date.parse(this.birthday);
    return birthDate;
  };

  agerator () {
    const oneDay = 24 * 60 * 60 * 1000;
    let ageInDays = parseInt((Date.now() - this.dateifier())/oneDay);
    return ageInDays;
  };

  toEarthYears () {
    const yearInDays = 364.75;
    let ageInEarthYears = Math.floor(Math.abs((this.agerator())/yearInDays));
    return ageInEarthYears;
  };

  lifeExpectancy () {
    let lifeExpectancy;
    if ((this.toEarthYears()) <= 9) {
      lifeExpectancy = 74.493
    }
    else if ((this.toEarthYears()) >= 10 && (this.toEarthYears()) <= 19) {
      lifeExpectancy = 64.6525
    } 
    else if ((this.toEarthYears()) >= 20 && (this.toEarthYears()) <= 29) {
      lifeExpectancy = 55.0395
    }
    else if ((this.toEarthYears()) >= 30 && (this.toEarthYears()) <= 39) {
      lifeExpectancy = 45.661
    }
    else if ((this.toEarthYears()) >= 40 && (this.toEarthYears()) <= 49) {
      lifeExpectancy = 36.427
    }
    else if ((this.toEarthYears()) >= 50 && (this.toEarthYears()) <= 59) {
      lifeExpectancy = 27.6405
    }
    else if ((this.toEarthYears()) >= 60 && (this.toEarthYears()) <= 69) {
      lifeExpectancy = 19.615
    }
    else if ((this.toEarthYears()) >= 70 && (this.toEarthYears()) <= 79) {
      lifeExpectancy = 12.461
    }
    else if ((this.toEarthYears()) >= 80 && (this.toEarthYears()) <= 89) {
      lifeExpectancy = 6.7965
    }
    else if ((this.toEarthYears()) >= 90 && (this.toEarthYears()) <= 99) {
      lifeExpectancy = 3.3095
    }
    else if ((this.toEarthYears()) >= 100 && (this.toEarthYears()) <= 109) {
      lifeExpectancy = 1.7835
    }
    else if ((this.toEarthYears()) >= 110 && (this.toEarthYears()) <= 119) {
      lifeExpectancy = 0.9005
    }
    else {
      lifeExpectancy = 1000000
    }
  return lifeExpectancy; 
  };

};

export class Planets {
  constructor (yearLength) {
    this.yearLength=yearLength;
  };

convertAge (user) {
  let ageOnPlanet = user.toEarthYears()/this.yearLength;
  return ageOnPlanet.toFixed(2); 
}

convertLifeExpectancy (user) {
  let lifeExpectancyOnPlanet = user.lifeExpectancy()/this.yearLength;
  return lifeExpectancyOnPlanet.toFixed(2);
}

};

export class Mercury extends Planets {
  constructor (user) {
    super (.24, user);
  };
};

export class Venus extends Planets {
  constructor (user) {
    super (.62, user);
  };
};

export class Mars extends Planets {
  constructor (user) {
    super (1.88, user);
  };
};

export class Jupiter extends Planets {
  constructor (user) {
    super (11.86, user);
  };
};

export class Saturn extends Planets {
  constructor (user) {
    super (29.53, user);
  };
};

export class Uranus extends Planets {
  constructor (user) {
    super (84.13, user);
  };
};

export class Neptune extends Planets {
  constructor (user) {
    super (165.02, user);
  };
};
