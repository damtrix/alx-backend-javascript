export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number')
      throw new TypeError('Length must be a number');
    if (!Array.isArray(students))
      throw new TypeError('Students must be an array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(na) {
    if (typeof na !== 'string') throw new TypeError('Name must be a string');
    this._name = na;
  }

  get length() {
    return this._length;
  }

  set length(le) {
    if (typeof le !== 'number') throw new TypeError('Length must be a number');
    this._length = le;
  }

  get students() {
    return this._students;
  }

  set students(stu) {
    if (!Array.isArray(stu)) throw new TypeError('Students must be an array');
    this._students = stu;
  }
}
