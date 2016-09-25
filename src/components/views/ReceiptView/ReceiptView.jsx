

import React from 'react';

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Upload new File</title>
        <h1>Upload new File</h1>
        <form action="http://127.0.0.1:5000/upload" method="post" encType="multipart/form-data">
          <p><input type="file" name="file" />
            <input type="submit" defaultValue="Upload" />
          </p></form>
      </div>
    );
  }
});

export default NewComponent;