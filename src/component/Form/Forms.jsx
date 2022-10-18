
import { Card } from 'antd';
import { Button, Select, Form, Input,Radio ,Col, Row,message, Upload,InputNumber} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const { Option } = Select;
const { TextArea } = Input;

// import { useState } from 'react';


// const [Submit,setsubmit]=useState()



const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};

export default function Forms() {

  const [Forme, setForme] = useState({ ProductName: "", ProductCategory:"", BrandNew:"", SecondHand:"", Refurbished:"",mobile:"",laptop:"", Upload:"", TextArea:"", InputNumbers:"", Comments:""})


  function onsubmit (e) {
    e.preventDefault();
    console.log(Forme)
    setForme({
      ProductName: "", 
      ProductCategory:"", 
      BrandNew:"", 
      SecondHand:"", 
      Refurbished:"",
      mobile:"",
      laptop:"", 
      Upload:"", 
      TextArea:"", 
      InputNumbers:"", 
      Comments:""
    })
    
}



function  handleProductName(e) {

  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  console.log(Forme,"leo");

}

function  handleProductCategory(e) {
  
  e.preventDefault();
  var eName = e.target.name;
 

  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function handleBrandNew(e) {
 
  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function  handleSecondHand(e) {

  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function handleRefurbished(e) {
 
  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function handleUpload(e) {

  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);

}

function handleTextArea(e) {

  e.preventDefault();
  var eName = e.target.name;
 

  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function  handleInputNumbers(e) {
 
  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function handleComments(e) {

  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function handlemobile(e) {

  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}

function handlelaptop(e) {

  e.preventDefault();
  var eName = e.target.name;


  setForme({ ...Forme, [eName]: e.target.value })
  // console.log(Forme);
}






  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };



  return (
    <div className='div'>
            <Card
      title="Submit a Product"
      className='card'
    >
        <Form.Item
        label="Product Nmae"
        name="Product Nmae"
      >
        <Input className='leo' value={Forme.ProductName} onChange={handleProductName}/>
      </Form.Item>

      <Form.Item
       label="Product Category"
       name="Product Nmae"
      >
        <Select className='select' >
            <Option value={Forme.ProductCategory} onChange={handleProductCategory}>Electronics</Option>
            <Option value={Forme.mobile} onChange={handlemobile}>mobile</Option>
            <Option value={Forme.laptop} onChange={handlelaptop}>laptop</Option>
          </Select>
        </Form.Item>
        <Row>
          <Col>
        <label>Product Freshness:</label>
        </Col>
        <Col offset={1}>
        <Radio.Group className='radio'
        
        onChange={onChange} value={value}>
      <Radio value={Forme.BrandNew} onChange={handleBrandNew}>Brand New</Radio>
      <Radio value={Forme.SecondHand} onChange={handleSecondHand}>Second Hand</Radio>
      <Radio value={Forme.Refurbished} onChange={handleRefurbished}>Refurbished</Radio>
    </Radio.Group>
    </Col>
    </Row>

    <Row>
      <Col> <label>Product Freshness:</label></Col>
      <Col offset={1}> <Upload {...props}  >
    <Button className='max' icon={<UploadOutlined />} value={Forme.Upload} onChange={handleUpload}>Click to Upload</Button>
  </Upload></Col>
    </Row>
    <Form.Item label="Additional Description">
          <TextArea rows={4} value={Forme.TextArea} onChange={handleTextArea} />
        </Form.Item>
        <Form.Item className='InputNumber'>
        <label>InputNumber:</label>
          <Input className='input1' value={Forme.InputNumbers} onChange={handleInputNumbers}/>
        </Form.Item>
        <Form.Item label="Comments">
          <TextArea className='textarea' type="text" rows={4} value={Forme.Comments} onChange={handleComments} />
        </Form.Item>
        <Button type="primary" htmlType="submit" className='button' onClick={onsubmit} >
          Submit
        </Button>
    </Card>

    </div>
  )
}

