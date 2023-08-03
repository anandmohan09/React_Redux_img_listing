import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { BiSolidFilePng } from "react-icons/bi";
import {SiJpeg} from 'react-icons/si';
// import Example1 from "./delete";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputData, setInputData] = useState([]);

  function handleChange(e) {
    const file = e.target.files[0];
    const dataObj = {
      file: file,
      imagePreview: { ["name"]: URL.createObjectURL(e.target.files[0]) },
    };
    // console.log(file,'gdhjkjfh')
    setInputData([...inputData, dataObj]);
    // setInputData([...inputData,{["name"]:URL.createObjectURL(e.target.files[0])}]);
    // console.log(inputData,'gdhjkjfh')
  }
  console.log(inputData, "inputdata");
  const dispatch = useDispatch();
  //   useSelector((state) =>console.log('states',state)
  // const list = useSelector((state) => state.todoReducers.list);
  // console.log(list,'lists');
  //    state.todoReducers.list

  function deleteImage(index) {
    if (window.confirm("Are u sure u want to delete")) {
      const t = [...inputData];
      t.splice(index, 1);
      setInputData(t);
    }
  }

  //   console.log(list);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ width: "60px", height: "40px", marginTop: "10px" }}
      >
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <BsFillPersonFill
              style={{
                fontSize: "45px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            />
            Add New Employee Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "1em",
              fontSize: "1.2em",
            }}
          >
            Upload image
          </p>
          <div
            className="file-card"
            style={{
              backgroundColor: "#edf2f7",
              border: "3px dashed #cbd5e0",
              padding: "1em",
              minWidth: "380px",
              minHeight: "230px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="file-inputs"
              style={{ position: "relative", marginBottom: "1.5em" }}
            >
              <input
                onChange={
                  handleChange
                  // setInputData(URL.createObjectURL(e.target.files[0]))
                }
                type="file"
                style={{
                  position: "relative",
                  maxWidth: "200px",
                  height: "46px",
                  zIndex: "2",
                  cursor: "pointer",
                  opacity: "0",
                }}
              ></input>
              <button
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  zIndex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  backgroundColor: "#f55e30",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: "none",
                  outline: "none",
                  transitionBackgroundColor: "0.4s",
                  boxShadow: "0px 8px 24px rgba(149,157,165,0.5)",
                }}
              >
                <CgAddR
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    padding: "0.4em",
                    backgroundColor: "#fff",
                    color: "#f55e30",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "0.8em",
                    fontSize: "0.8em",
                  }}
                />
                upload
              </button>
            </div>
            <p>Support files</p>
            <p>JPEG,PNG</p>
          </div>
        </Modal.Body>
        <table style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Serial no</th>
              <th>Image Name</th>
              <th>Size</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          {inputData.length > 0
            ? inputData.map((ele, index) => {
                if (ele?.file?.type === "image/png") {
                  return (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <BiSolidFilePng style={{color:'red'}} />
                          {ele?.file.name}
                          {/* <Example1/> */}
                        </td>
                        <td>{ele?.file.size}kb</td>
                        <td>{ele?.file.type}</td>
                        <td
                          onClick={() => deleteImage(index)}
                          style={{ cursor: "pointer" }}
                        >
                           
                          <RxCrossCircled
                            style={{
                              fontSize: "30px",
                              fontWeight: "bold",
                              color: "red",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  );
                }
                else if(ele?.file?.type === "image/jpeg"){
                    return (
                        <tbody>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <SiJpeg style={{color:'red'}} />
                              {ele?.file.name}
                              {/* <Example1/> */}
                            </td>
                            <td>{ele?.file.size}kb</td>
                            <td>{ele?.file.type}</td>
                            <td
                              onClick={() => deleteImage(index)}
                              style={{ cursor: "pointer" }}
                            >
                               
                              <RxCrossCircled
                                style={{
                                  fontSize: "30px",
                                  fontWeight: "bold",
                                  color: "red",
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      );

                }
              })
            : console.log("tumse na ho payega")}
        </table>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            //   onClick={handleClose}
            onClick={() => {
              dispatch(addTodo(inputData));
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
