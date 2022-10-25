import H1 from "../images/hero/h1.png";
import H2 from "../images/hero/h2.png";
import H3 from "../images/hero/h3.png";
import H4 from "../images/hero/h4.png";
import H6 from "../images/hero/h6.png";

//recently
import ListOne from "../images/list/p-1.jpeg";
import ListTwo from "../images/list/p-2.jpeg";
import ListSeven from "../images/list/p-3.jpeg";
import ListFour from "../images/list/p-4.jpeg";
import ListFive from "../images/list/p-5.jpeg";
import ListSix from "../images/list/p-6.jpeg";

//location
import LocationOne from "../images/location/city-1.jpeg";
import LocationTwo from "../images/location/city-2.jpeg";
import LocationThree from "../images/location/city-3.jpeg";
import LocationFour from "../images/location/city-4.jpeg";
import LocationFive from "../images/location/city-5.jpeg";
import LocationSix from "../images/location/city-6.jpeg";

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "Property",
    path: "/property",
  },
  {
    text: "services",
    path: "/services",
  },
  // {
  //   text: "blog",
  //   path: "/blog",
  // },
  // {
  //   text: "pricing",
  //   path: "/pricing",
  // },
  {
    text: "contact",
    path: "/contact",
  },
];
export const featured = [
  {
    cover: H1,
    name: "Agricultural",
    total: "15 Property",
  },

  {
    cover: H3,
    name: "Residential",
    total: "30 Property",
  },
  {
    cover: H4,
    name: "Industrial",
    total: "10 Property",
  },
  {
    cover: H6,
    name: "Commercial",
    total: "20 Property",
  },
];
export const list = [
  {
    id: 1,
    cover: ListOne,
    name: "Shankar Real Estate",
    location: "Bangalore",
    category: "For Rent",
    price: "Negotiable",
    type: "Apartment",
  },
  {
    id: 2,
    cover: ListTwo,
    name: "Shankar Real Estate",
    location: "Bangalore",
    category: "For Sale",
    price: "Negotiable",
    type: "Condos",
  },
  {
    id: 3,
    cover: ListSeven,
    name: "Shankar Real Estate",
    location: "Bangalore",
    category: "For Rent",
    price: "Negotiable",
    type: "Offices",
  },
  {
    id: 4,
    cover: ListFour,
    name: "Shankar Real Estate",
    location: "Bangalore",
    category: "For Sale",
    price: "Negotiable",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: ListFive,
    name: "Shankar Real Estate",
    location: "Bangalore",
    category: "For Rent",
    price: "Negotiable",
    type: "Commercial",
  },
  {
    id: 6,
    cover: ListSix,
    name: "Shankar Real Estate",
    location: "Bangalore",
    category: "For Sale",
    price: "Negotiable",
    type: "Apartment",
  },
];
export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
export const location = [
  {
    id: 1,
    name: " Sanjay Nagar ",
    Villas: "6 Villas",
    Apartments: "2 Apartments",
    Offices: "9 Offices",
    cover: LocationOne,
  },
  {
    id: 2,
    name: "Dollars Colony ",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: LocationTwo,
  },
  {
    id: 3,
    name: " RT Nagar",
    Villas: "16 Villas",
    Apartments: " 1 Apartments",
    Offices: "4 Offices",
    cover: LocationThree,
  },
  {
    id: 4,
    name: "Msr Nagar ",
    Villas: "1 Villas",
    Apartments: " 8 Apartments",
    Offices: "8 Offices",
    cover: LocationFour,
  },
  {
    id: 5,
    name: "Vidyaranyapura",
    Villas: "11 Villas",
    Apartments: " 1 Apartments",
    Offices: "7 Offices",
    cover: LocationFive,
  },
  {
    id: 6,
    name: "Hebbal",
    Villas: "16 Villas",
    Apartments: " 6 Apartments",
    Offices: "2 Offices",
    cover: LocationSix,
  },
];
export const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];
export const footer = [
  {
    title: "Pages",
    text: [
      {
        list: "Home ",
        path: "/",
      },
      {
        list: "About ",
        path: "/about",
      },
      {
        list: "Service ",
        path: "/services",
      },
      {
        list: "Property ",
        path: "/properties",
      },
      {
        list: "Contact ",
        path: "/contact",
      },
    ],
  },
];
