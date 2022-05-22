import React from "react"
import Select from "react-select"
const Index = () => {

  const customStyles = {
    input: (provided) => ({
      ...provided,
      fontSize: '0.8rem',
        height: '2.5rem'
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#000",
      fontSize: '0.8rem'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      position: 'relative',
      top: '-0.4rem'
    }),
    control: (provided) => ({
      ...provided,
      border: '1px solid black',
      boxShadow: 'none',
      backgroundColor: "#FFF",
      border: "1px solid #E7E7E7 !important",
      height: '2.5rem',
      borderRadius: '0.3125rem',
      paddingLeft: '0.6rem',
    }),
    valueContainer: (provided) => ({
      ...provided,
      width: "80%",
      cursor: 'pointer',
      paddingLeft: "10px",
      color: "#686767",
      position: 'relative',
      top: '-0.4rem'
    }),
    menu: (provided) => ({
      ...provided,
      position: "absolute",
      zIndex: "990",
      fontSize: "0.8rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(34, 41, 57)",
      fontSize: "0.8rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#777',
      fontSize: "0.8rem",
    }),
  }
  
  return (
    <>
      <div className="select-custom w-full">
        <Select
          styles={customStyles}
          placeholder={'Sort By'}
          className="react-select"
         
        />
      </div>
    </>
  )
}
export default Index