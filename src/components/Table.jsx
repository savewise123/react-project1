import React from "react";

const Table = ({ countries, settCountries }) => {
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold);

  return (
    <table className="medal-table">
      <thead>
        <tr>
          <th>국가</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries.map((country) => (
          <tr key={country.id}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
              <button onClick={() => handleDeleteCountry(country.id)}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
