import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';






const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);






export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Metier',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Date',
    field: 'Date',
    width: '120',
    textAlign: 'Center',
     },

  { field: 'HourA',
    headerText: 'Arrivées',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'HourD',
    headerText: 'Départ',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'shop',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employes',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];



export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 2,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
   Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
     Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
    avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Nancy Davolio',
    Title: 'electricien',
    Date: '01/02/2024',
    HourA: '08H:00',
    HourD: '18H:00',
    EmployeeImage:
      avatar2,
  },
];



