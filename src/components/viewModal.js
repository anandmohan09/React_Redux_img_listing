
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Examples({ele}) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
//   const [imageCicked, setImageCicked] = useState();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    // setImageCicked(x.imagePreview.name)
    // console.log('viewsid',x);
    
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button variant='success' key={idx} className="me-2 mb-2" onClick={() => handleShow(v)} style={{marginTop:'5px'}}>
          View
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)
  
    }
    // style={{width:'800px',zIndex:'1'}}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>View Image</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <img src={ele.imagePreview.name} alt='imageCicked' style={{width:'100%',height:'86vh',padding:"66px 55px",
    }}></img>
     
                  
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Examples;
