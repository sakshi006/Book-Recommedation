import React, { useState } from "react";
import "./styles.css";

//flags

var flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇬": "Antigua & Barbuda",
  "🇦🇮": "Anguilla",
  "🇦🇱": "Albania",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba",
  "🇦🇽": "Åland Islands",
  "🇦🇿": "Azerbaijan",
  "🇧🇦": "Bosnia & Herzegovina",
  "🇧🇧": "Barbados",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇫": "Burkina Faso",
  "🇧🇬": "Bulgaria",
  "🇧🇭": "Bahrain",
  "🇧🇮": "Burundi",
  "🇧🇯": "Benin",
  "🇧🇱": "St. Barthélemy",
  "🇧🇲": "Bermuda",
  "🇧🇳": "Brunei",
  "🇧🇴": "Bolivia",
  "🇧🇶": "Caribbean Netherlands",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇻": "Bouvet Island",
  "🇧🇼": "Botswana",
  "🇧🇾": "Belarus",
  "🇧🇿": "Belize",
  "🇨🇦": "Canada",
  "🇨🇨": "Cocos (Keeling) Islands",
  "🇨🇩": "Congo - Kinshasa",
  "🇨🇫": "Central African Republic",
  "🇨🇬": "Congo - Brazzaville",
  "🇨🇭": "Switzerland",
  "🇨🇮": "Côte d’Ivoire",
  "🇨🇰": "Cook Islands",
  "🇨🇱": "Chile",
  "🇨🇲": "Cameroon",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇵": "Clipperton Island",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇻": "Cape Verde",
  "🇨🇼": "Curaçao",
  "🇨🇽": "Christmas Island",
  "🇨🇾": "Cyprus",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇩🇬": "Diego Garcia",
  "🇩🇯": "Djibouti",
  "🇩🇰": "Denmark",
  "🇩🇲": "Dominica",
  "🇩🇴": "Dominican Republic",
  "🇩🇿": "Algeria",
  "🇪🇦": "Ceuta & Melilla",
  "🇪🇨": "Ecuador",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇭": "Western Sahara",
  "🇪🇷": "Eritrea",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇫🇰": "Falkland Islands",
  "🇫🇲": "Micronesia",
  "🇫🇴": "Faroe Islands",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇧": "United Kingdom",
  "🇬🇩": "Grenada",
  "🇬🇪": "Georgia",
  "🇬🇫": "French Guiana",
  "🇬🇬": "Guernsey",
  "🇬🇭": "Ghana",
  "🇬🇮": "Gibraltar",
  "🇬🇱": "Greenland",
  "🇬🇲": "Gambia",
  "🇬🇳": "Guinea",
  "🇬🇵": "Guadeloupe",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇬🇸": "South Georgia & South Sandwich Islands",
  "🇬🇹": "Guatemala",
  "🇬🇺": "Guam",
  "🇬🇼": "Guinea-Bissau",
  "🇬🇾": "Guyana",
  "🇭🇰": "Hong Kong SAR China",
  "🇭🇲": "Heard & McDonald Islands",
  "🇭🇳": "Honduras",
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle of Man",
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St. Kitts & Nevis",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇰🇿": "Kazakhstan",
  "🇱🇦": "Laos",
  "🇱🇧": "Lebanon",
  "🇱🇨": "St. Lucia",
  "🇱🇮": "Liechtenstein",
  "🇱🇰": "Sri Lanka",
  "🇱🇷": "Liberia",
  "🇱🇸": "Lesotho",
  "🇱🇹": "Lithuania",
  "🇱🇺": "Luxembourg",
  "🇱🇻": "Latvia",
  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇨": "Monaco",
  "🇲🇩": "Moldova",
  "🇲🇪": "Montenegro",
  "🇲🇫": "St. Martin",
  "🇲🇬": "Madagascar",
  "🇲🇭": "Marshall Islands",
  "🇲🇰": "North Macedonia",
  "🇲🇱": "Mali",
  "🇲🇲": "Myanmar (Burma)",
  "🇲🇳": "Mongolia",
  "🇲🇴": "Macao Sar China",
  "🇲🇵": "Northern Mariana Islands",
  "🇲🇶": "Martinique",
  "🇲🇷": "Mauritania",
  "🇲🇸": "Montserrat",
  "🇲🇹": "Malta",
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",
  "🇲🇼": "Malawi",
  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇲🇿": "Mozambique",
  "🇳🇦": "Namibia",
  "🇳🇨": "New Caledonia",
  "🇳🇪": "Niger",
  "🇳🇫": "Norfolk Island",
  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇫": "French Polynesia",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",
  "🇵🇲": "St. Pierre & Miquelon",
  "🇵🇳": "Pitcairn Islands",
  "🇵🇷": "Puerto Rico",
  "🇵🇸": "Palestinian Territories",
  "🇵🇹": "Portugal",
  "🇵🇼": "Palau",
  "🇵🇾": "Paraguay",
  "🇶🇦": "Qatar",
  "🇷🇪": "Réunion",
  "🇷🇴": "Romania",
  "🇷🇸": "Serbia",
  "🇷🇺": "Russia",
  "🇷🇼": "Rwanda",
  "🇸🇦": "Saudi Arabia",
  "🇸🇧": "Solomon Islands",
  "🇸🇨": "Seychelles",
  "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",
  "🇸🇭": "St. Helena",
  "🇸🇮": "Slovenia",
  "🇸🇯": "Svalbard & Jan Mayen",
  "🇸🇰": "Slovakia",
  "🇸🇱": "Sierra Leone",
  "🇸🇲": "San Marino",
  "🇸🇳": "Senegal",
  "🇸🇴": "Somalia",
  "🇸🇷": "Suriname",
  "🇸🇸": "South Sudan",
  "🇸🇹": "São Tomé & Príncipe",
  "🇸🇻": "El Salvador",
  "🇸🇽": "Sint Maarten",
  "🇸🇾": "Syria",
  "🇸🇿": "Eswatini",
  "🇹🇦": "Tristan Da Cunha",
  "🇹🇨": "Turks & Caicos Islands",
  "🇹🇩": "Chad",
  "🇹🇫": "French Southern Territories",
  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇰": "Tokelau",
  "🇹🇱": "Timor-Leste",
  "🇹🇲": "Turkmenistan",
  "🇹🇳": "Tunisia",
  "🇹🇴": "Tonga",
  "🇹🇷": "Turkey",
  "🇹🇹": "Trinidad & Tobago",
  "🇹🇻": "Tuvalu",
  "🇹🇼": "Taiwan",
  "🇹🇿": "Tanzania",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",
  "🇺🇲": "U.S. Outlying Islands",
  "🇺🇳": "United Nations",
  "🇺🇸": "United States",
  "🇺🇾": "Uruguay",
  "🇺🇿": "Uzbekistan",
  "🇻🇦": "Vatican City",
  "🇻🇨": "St. Vincent & Grenadines",
  "🇻🇪": "Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S. Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇻🇺": "Vanuatu",
  "🇼🇫": "Wallis & Futuna",
  "🇼🇸": "Samoa",
  "🇽🇰": "Kosovo",
  "🇾🇪": "Yemen",
  "🇾🇹": "Mayotte",
  "🇿🇦": "South Africa",
  "🇿🇲": "Zambia",
  "🇿🇼": "Zimbabwe"
};

var knownFlags = Object.keys(flagDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];
    //console.log(output);

    if (meaning === undefined) meaning = "One flag at a time!😉";
    setMeaning(meaning);
  }

  function clickHandler(flag) {
    //console.log(flag);
    var meaning = flagDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span className={"f"}>F</span>lag interpreter
      </h1>
      <div className={"intro"}>
        Test Your knowledge ! One may not know about all the flags across the
        globe, so here is a small contribution for helping you know them! You
        can learn about which country the flag belongs- to or you can play{" "}
        <span className={"f"}>GUESS THE FLAG! </span>😛
      </div>

      <input
        onChange={inputHandler}
        placeholder={"Enter a Flag Emoji..."}
      ></input>
      {/* <div> {name} </div> */}

      <div className={"meaning"}> Country Name : </div>
      <div className={"answer"}> {meaning} </div>

      <div>
        {knownFlags.map(function (flag) {
          return (
            <div className={"display"}>
              <span
                className={"options"}
                onClick={() => clickHandler(flag)}
                key={flag}
              >
                {" "}
                {flag}{" "}
              </span>
            </div>
          );
        })}
      </div>

      <div className={"footer"}>
        Connect with me
        <div className={"social"}>
          <a href="https://github.com/sakshi006" target="blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sakshi-kumar-789649172/"
            target="blank"
          >
            linkedin
          </a>
          <a href="https://www.instagram.com/_.sakshiii_._/" target="blank">
            Instagram
          </a>
        </div>
        <div>&#169; Made with love &#9829; || Sakshi || 2020</div>
      </div>
    </div>
  );
}
