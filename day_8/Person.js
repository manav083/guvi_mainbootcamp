class Person {
    constructor(FirstName, LastName, Age, Gender, Address, PhoneNo, Email) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Gender = Gender;
        this.Address = Address;
        this.PhoneNo = PhoneNo;
        this.Email = Email;
    }

    getFullName() {
        return this.FirstName + this.LastName;
    }
}