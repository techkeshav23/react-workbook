import React from "react";
import cat from "../assets/cat.jpeg";

function ImageManipulation() {
    const [catHeight, setCatHeight] = React.useState(200);
    const [catWidth, setCatWidth] = React.useState(200);
    const [red, setRed] = React.useState(0);
    const [green, setGreen] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    const [imgRotate, setImgRotate] = React.useState(0);
    function changeBgColor() {
        setBlue(Math.random() * 255);
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
    }
    function changeimgRotate() {
        setImgRotate((imgRotate + 30)%360);
    }

    function handleColor() {
        changeBgColor();
    }
    return (
        <div>
            <h2>Image Manipulation Component</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red', height: '400px', width: '400px', margin: '10px', backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
                <img src={cat} alt="Cat" style={{ height: `${catHeight}px`, width: `${catWidth}px`, transform: `rotate(${imgRotate}deg)` }} />
            </div>
            <div>
                <button onClick={() => setCatHeight(catHeight + 20)}>Increase Height</button>
                <button onClick={() => setCatHeight(catHeight - 20)}>Decrease Height</button>
                <button onClick={() => setCatWidth(catWidth + 20)}>Increase Width</button>
                <button onClick={() => setCatWidth(catWidth - 20)}>Decrease Width</button>
                <button onClick={changeimgRotate}>Rotate Image</button>
                <button onClick={handleColor}>Change Background Color</button>
            </div>
        </div>
    );
}

export default ImageManipulation;
