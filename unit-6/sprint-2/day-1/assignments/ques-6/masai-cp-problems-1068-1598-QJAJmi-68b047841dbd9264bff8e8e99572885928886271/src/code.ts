interface AddressTypes {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string
}
interface PersonDetailsType {
  prefix?: string;
  phone: number[];
  addresses: object[];
  email?: string;
  firstName: string;
  middleName?: string;
  lastname: string
}
const Data = [];
const PhoneBook = (PersonDetails: PersonDetailsType) => {
    Data.push(PersonDetails);
};
export  {PhoneBook,Data}; // Make no changes here
