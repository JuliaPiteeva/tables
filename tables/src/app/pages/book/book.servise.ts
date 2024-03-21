import { Injectable } from "@angular/core";
import { Position, Region } from "./book";
import { Employee } from "./book-table-info";


const positions: Position[] = [{
    ID: 1,
    Name: 'Sales Manager'
  }, {
    ID: 2,
    Name: 'Logistician'
  },{
    ID: 3,
    Name: 'Assistant sales manager'
  }
];

const regions: Region[] = [{
    ID: 1,
    Name: 'Дальний восток',
  }, {
    ID: 2,
    Name: 'Восточная сибирь',
  }, {
    ID: 3,
    Name: 'Западная сибирь',
  }, {
    ID: 4,
    Name: 'Урал',
  }, {
    ID: 5,
    Name: 'Поволжье',
  }, {
    ID: 6,
    Name: 'Европейский север',
  },  {
    ID: 7,
    Name: 'Центральная Россия',
  }
];


@Injectable({ providedIn: 'root'})

export class BookService {
    getBooks() {
        return employees;
      }
    
    getRegions() {
        return regions;
    }

    getPositions() {
        return positions;
    }
}

const employees: Employee[] = [{
    ID: '1',
    FirstName: 'John',
    LastName: 'Heart',
    EmployeeStatus: 'активен',
    Prefix: 'Mr.',
    Position: 1,
    BirthDate: '1964/03/16',
    Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St.',
    RegionID: 1,
  }, {
    ID: '2',
    FirstName: 'Olivia',
    LastName: 'Peyton',
    EmployeeStatus: 'неактивен',
    Prefix: 'Mrs.',
    Position: 1,
    BirthDate: '1981/06/03',
    Notes: 'Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
    Address: '807 W Paseo Del Mar',
    RegionID: 2,
  }, {
    ID: '3',
    FirstName: 'Robert',
    LastName: 'Reagan',
    Prefix: 'Mr.',
    Position: 1,
    BirthDate: '1974/09/07',
    Notes: 'Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
    Address: '4 Westmoreland Pl.',
    RegionID: 3,
  }, {
    ID: '4',
    FirstName: 'Greta',
    LastName: 'Sims',
    Prefix: 'Ms.',
    Position: 1,
    BirthDate: '1977/11/22',
    Notes: "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
    Address: '1700 S Grandview Dr.',
    RegionID: 4,
  }, {
    ID: '5',
    FirstName: 'Brett',
    LastName: 'Wade',
    Prefix: 'Mr.',
    Position: 3,
    BirthDate: '1968/12/01',
    Notes: 'Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
    Address: '1120 Old Mill Rd.',
    RegionID: 5,
  }, {
    ID: '6',
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 1,
    BirthDate: '1974/11/15',
    Notes: "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    Address: '4600 N Virginia Rd.',
    RegionID: 6,
  }, {
    ID: '7',
    FirstName: 'Kevin',
    LastName: 'Carter',
    Prefix: 'Mr.',
    Position: 1,
    BirthDate: '1978/01/09',
    Notes: 'Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.',
    Address: '424 N Main St.',
    RegionID: 7,
  }, {
    ID: '8',
    FirstName: 'Cynthia',
    LastName: 'Stanwick',
    Prefix: 'Ms.',
    Position: 1,
    BirthDate: '1985/06/05',
    Notes: 'Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!',
    Address: '2211 Bonita Dr.',
    RegionID: 1,
  }, {
    ID: '9',
    FirstName: 'Kent',
    LastName: 'Samuelson',
    Prefix: 'Dr.',
    Position: 1,
    BirthDate: '1972/09/11',
    Notes: 'As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.',
    Address: '12100 Mora Dr',
    RegionID: 2,
  }, {
    ID: '10',
    FirstName: 'Taylor',
    LastName: 'Riley',
    Prefix: 'Mr.',
    Position: 2,
    BirthDate: '1982/08/14',
    Notes: "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
    Address: '7776 Torreyson Dr',
    RegionID: 5,
  }, {
    ID: '11',
    FirstName: 'Sam',
    LastName: 'Hill',
    Prefix: 'Mr.',
    Position: 3,
    BirthDate: '1984/02/17',
    Notes: 'Sammy is proud to be a member of the DevAV team. He joined the team in 2012 and has been in the sales department from the beginning.\r\n\r\nHe has just picked up golf so you can find him on the links every weekend.',
    Address: '645 Prospect Crescent',
    RegionID: 1,
  }, {
    ID: '12',
    FirstName: 'Kelly',
    LastName: 'Rodriguez',
    Prefix: 'Ms.',
    Position: 3,
    BirthDate: '1988/05/11',
    Notes: "Kelly loves people and that's why she joined DevAV's support department. One of the funniest people in the company, she does stand-up on the weekends at the Laugh Factory.",
    Address: '1601 W Mountain St.',
    RegionID: 5,
  }, {
    ID: '13',
    FirstName: 'Natalie',
    LastName: 'Maguirre',
    Prefix: 'Mrs.',
    Position: 3,
    BirthDate: '1977/10/07',
    Notes: 'Natalie travels the US and teaches our partners how to explain the benefits of our products to customers.\r\n\r\nShe is a proud wife and mom and volunteers her time at the elementary school.',
    Address: '6400 E Bixby Hill Rd',
    RegionID: 2,
  }, {
    ID: '14',
    FirstName: 'Walter',
    LastName: 'Hobbs',
    Prefix: 'Mr.',
    Position: 3,
    BirthDate: '1984/12/24',
    Notes: "Walter has been developing apps and websites for DevAV since 2011. His passion is software and if you ever walk by his desk, you'll know why.\r\n\r\nWally once worked 72 hours straight - writing code and fixing bugs.",
    Address: '10385 Shadow Oak Dr',
    RegionID: 3
  }];