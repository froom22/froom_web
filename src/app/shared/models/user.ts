export class User {
  $key: string;
  userName: string;
  emailId: string;
  password?: string;
  location?: {
    lat: number;
    lon: number;
  };
  phoneNumber: string;
  createdOn?: string;
  isAdmin: boolean;
  avatar?: string;
}

export class UserDetail {
  $key: string;
  firstName: string = 'firstNames';
  lastName: string = 'lastNames';
  userName: string;
  emailId: string = 'test@test.com';
  address1: string = 'Door 123, Street F';
  address2: string = 'Lane 33';
  country: string = 'United States';
  state: string = 'California';
  zip: number = 30001;
}
