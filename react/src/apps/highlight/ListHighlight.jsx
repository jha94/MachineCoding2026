import { useState } from "react";
const ListHighlight = () => {
  const [searchText, setSearchText] = useState("");
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Ahmedabad",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivli",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Prayagraj",
    "Howrah",
    "Ranchi",
    "Gwalior",
    "Jabalpur",
    "Coimbatore",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Chandigarh",
    "Guwahati",
    "Solapur",
    "Hubballi-Dharwad",
    "Mysuru",
  ];
  return (
    <>
      <input
        type="text"
        onChange={(event) => setSearchText(event.target.value)}
      />
      {cities.map((city) => (
        <div
          style={{
            backgroundColor:
              searchText && city.toLocaleLowerCase().includes(searchText)
                ? "green"
                : "",
          }}
        >
          <p>{city}</p>
        </div>
      ))}
    </>
  );
};

export default ListHighlight;
