export class Ssingupinfo {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  indexNo:string;
  faculty:string;
  contactNo:number;

  constructor(firstname: string, lastname: string, email: string, password: string, indexno: string, faculty: string, contacno: number) {
    this.firstName= firstname;
    this.lastName = lastname;
    this.email = email;
    this.password = password;
    this.indexNo= indexno;
    this.faculty = faculty;
    this.contactNo = contacno;
  }

}
