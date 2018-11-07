import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  width: 550px;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  
  h3 {
    font-weight: bold;
    margin-bottom: 5px;
  }

  ul {
    position: relative;
    background-color: rgba(0,0,0,0.05);
    box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.05);
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
  }

  li {
    padding-left: 11px;
  }

  li:before {
    position: absolute;
    left: 10px;
    content: "•";
  }

  dl {
    position: relative;
    background-color: rgba(0,0,0,0.05);
    box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.05);
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 10px;
  }

  dd {
    padding-left: 11px;
  }

  dd:before {
    position: absolute;
    left: 10px;
    content: "-";
  }

  p {
    margin 10px 0;
  }
`
const HtmlFormatter = ({ text }) => <Wrapper dangerouslySetInnerHTML={{ __html: text }} />

export default HtmlFormatter
