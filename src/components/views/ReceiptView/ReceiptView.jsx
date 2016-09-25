

import React from 'react';

var NewComponent = React.createClass({
    
  render: function() {
    const styles = {
        upload: {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        uploadBut: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%'
        },
        btn: {
            width: '20%',
            textAlign: 'center'
        }
    };
    return (
      <div style={styles.foo}>
        <title>Upload new File</title> 
        <h1 id = "upload" style={styles.upload}>Upload new File</h1>
        <form action="http://127.0.0.1:5000/upload" method="post" encType="multipart/form-data" style={styles.uploadBut}>
        <input style={styles.foo} type="file" name="file" />
        <input style={styles.btn} type="submit" defaultValue="Upload" />
        </form>
      </div>
    );
  }
});

export default NewComponent;