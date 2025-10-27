"use client";
import { useRouter } from "next/navigation";
import { ACTIVE_COUNTRIES } from "../../activeCountries";

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
           <a href="/" aria-label="Go to homepage" style={{ display: "inline-block" }}>
        <img
          src="/logo/logo.png"
          alt="Logo"
        />
        </a>
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
