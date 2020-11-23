import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import fbs from "../utils/firebase";
const { storage } = fbs;

const UploadBox = () => {
  const customRequest = (params) => {
    const { file } = params;
    console.log(file.name);
    const ref = storage.ref().child(`productImages/${file.name}`);
    ref.put(file).then(function (snapshot) {
      console.log("upload a file!");
    });
  };
  return (
    <Upload
      listType="picture"
      customRequest={(params) => customRequest(params)}
    >
      <Button icon={<UploadOutlined />}>Click to upload</Button>
    </Upload>
  );
};

export default UploadBox;











// const change = (e) => {
//     console.log(e.file.name);
//     // console.log(e.target.files[0]);
//     setImage(e.file);
//     console.log(1111);
//   };
//   const uploadFunc = () => {

//     const uploadTask = storage
//       .ref(
//         `productImages/${image.name}
//           `
//       )
//       .put(image);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (err) => {
//         console.log(err);
//       },
//       () => {
//         storage
//           .ref("productImages")
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => console.log(url));
//       }
//     );
//   };
