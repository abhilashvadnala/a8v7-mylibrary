import React from 'react';
import { Button } from 'react-bootstrap';

function FileUpload(props) {
  return(
    <Button
    variant="outline-secondary"
    type="file"
    disabled
    >
    Upload JSON File
    </Button>
  );
}

export default FileUpload;