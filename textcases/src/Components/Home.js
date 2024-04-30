import React from "react";



function handelUppercase(){
    var txt = document.getElementById('floatingTextarea');
    txt.value = txt.value.toUpperCase();

}

function handelLowercase(){
    var txt = document.getElementById('floatingTextarea');
    txt.value = txt.value.toLowerCase();

}

function handleCopyCase() {
    var textb = document.getElementById('floatingTextarea');
    textb.select();
    navigator.clipboard.writeText(textb.value)
        .then(() => console.log("Text copied successfully!"))
        .catch(err => console.error("Failed to copy text: ", err));
}



export default function Home() {
    return (
        <>
            <div className="container">
                <div className="form-floating my-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style= {{height: "100px"}} ></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>
            </div>

            <div className="container my-3">
                <button className="btn btn-primary mx-3" onClick={handelUppercase}>TextUpperCase</button>
                <button className="btn btn-primary  mx-3" onClick={handelLowercase}>TextLowerCase</button>
                <button className="btn btn-primary  mx-3" onClick={handleCopyCase}>Text Copy</button>

            </div>

        </>
    )
}