import axios from "axios";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [image, setimage] = useState([]);

  const uploadImage = async (e) => {
    // const cloudName = "your cloud name"
    // TODO: paste your cloud name above
    let files = e.target.files[0];
    const data = new FormData();
    data.append("file", files); //"file" is a key must be same and "file" is target value(uploaded image)
    data.append("upload_preset", "2nd-app"); // "upload_preset" is a key must be same and "2nd-app" is the cloudinary preset name
    data.append("cloud_name", cloudName); // "cloud_name" is a key must be same and "vvorkcloudtechnologies" actual cloud name
    let arr = [];
    await axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
      .then((res) => {
        arr.push(...image, res.data.url);
        setimage(arr);
      })
      .catch((err) => {
        console.log(err, "its a error");
      });
  };

  console.log(image);
  return (
    <div className="mainParent">
      <div className="App">
        <h1>upload image to cloudinary</h1>
        <input type="file" name="file" onChange={uploadImage} />
        {/* {image.map((e,i)=>{ */}
        <p>
          uploaded images # <span>{image.length} </span>
        </p>

        {/* })} */}
        <div className="toFlex">
          {image.map((e, i) => {
            console.log(e, i);
            return (
              <div className="card" key={i}>
                <img src={e} alt="" height="100%" width="100%" />
                <h2> IMAGE # {i + 1} </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
