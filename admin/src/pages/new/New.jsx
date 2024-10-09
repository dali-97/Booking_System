import Navbar from "../../components/navbar/Navbar";
import SidBar from "../../components/sidbar/SidBar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file , setFile] = useState('')
  console.log(file)
  return (
    <div className="new">
      <SidBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : 'https://th.bing.com/th/id/OIP.H1gHhKVbteqm1U5SrwpPgwAAAA?rs=1&pid=ImgDetMain'}
              alt="avatar"
            />
          </div>
          <div className="right">
            <form>
              <div className="fromINput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              {
              // eslint-disable-next-line react/prop-types
              inputs.map((input) => {
                return (
                  <div className="fromINput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
