import React, { useState } from 'react'

const Button_Color = () => {

    const [backgroundColor, setBackgroundColor] = useState("White");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    function handleClick(){
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white")
    }

  return (
    <>
        <section style={{backgroundColor, color: textColor}}>
            <button onClick={handleClick} style={
                {buttonStyle, color: textColor, border:`2px solid ${textColor}`}
            }>White Theme</button>
        </section>

        <section className="content">
            <h1>Welcome to a <br />
            Real World
            </h1>
        </section>
    </>
  )
}

export default Button_Color
