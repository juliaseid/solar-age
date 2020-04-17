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

};