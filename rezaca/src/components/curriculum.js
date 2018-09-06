import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.noworker';

class Curriculum extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={{ position: 'relative', left: '28%' }}>
        <Document file="./resume.pdf" onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default Curriculum;
