"use client";
import { useRouter } from "next/navigation";
import { ACTIVE_COUNTRIES } from "../../countryData";

export default function CountryNavbar() {
  const router = useRouter();

  const handleSelect = (e) => {
    const country = e.target.value;
    if (country) {
      router.push(`/country/${encodeURIComponent(country)}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo"> 
        <img
          src="/logo/logo.png"
          alt="Logo"
        />
      </div>
      {/* Dropdown */}
      <select
        onChange={handleSelect}
        defaultValue=""
        className="navbar-select"
      >
        <option value="" disabled>
          Countries
        </option>
        {ACTIVE_COUNTRIES.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </nav>
  );
}
