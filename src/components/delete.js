import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteTodo } from '../actions';
import { useDispatch,useSelector } from 'react-redux';

function Example1({x,id,ele}) {
    console.log('deleteid',id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.imageListingReducers.list);
  console.log('lists',list);

  return (
    <>
      <Button variant="danger" onClick={handleShow} style={{height:'37px',marginTop:'5px'}}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>Are U Sure You want to Delete?</h5></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" 
          onClick={() => {
            dispatch(deleteTodo(ele));
            handleClose();
          }}
        
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example1;