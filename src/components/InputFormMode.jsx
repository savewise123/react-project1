import React, { useState } from "react";

const InputForm = ({ countries, setCountries }) => {
 
  const [countryInfo, setCountryInfo] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0
  });

 
  const searchCountry = countries.find(({ name }) => name === countryInfo.name);

 
  const addCountry = (e) => {
    e.preventDefault();

    if (countryInfo.name === "") {
      alert("국가명을 적어주세요.");
    } else if (!searchCountry) {
      setCountries([...countries, countryInfo]);
    } else {
      alert("이미 추가된 나라입니다.");
    }
    console.log(countries);


  
      <div className="input-container">
        <form onSubmit={addCountry}>
          <div className="input-item">
            <label>국가명</label>
            <input type="text" placeholder="국가 입력" value={countryInfo.name} name="name" onChange={onInputChange} />
          </div>
          <div className="input-item">
            <label>금메달</label>
            <input type="number" value={countryInfo.gold} name="gold" onChange={onInputChange} />
          </div>
          <div className="input-item">
            <label>은메달</label>
            <input type="number" value={countryInfo.silver} name="silver" onChange={onInputChange} />
          </div>
          <div className="input-item">
            <label>동메달</label>
            <input type="number" value={countryInfo.bronze} name="bronze" onChange={onInputChange} />
          </div>

          <div className="button-container">
            <button type="submit">국가 추가</button>
            <button type="button" onClick={handleUpdateCountry}>
              업데이트
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputForm;
