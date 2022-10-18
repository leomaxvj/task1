
import { Layout } from 'antd';
import React from 'react';
import { Card,Row,Col,Input,Select,Button,Result,Checkbox} from 'antd';
import 'antd/dist/antd.css';
// import { LoadingOutlined } from '@ant-design/icons';
// import { CheckCircleOutlined  } from '@ant-design/icons';
const { Option } = Select;
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const { Content} = Layout;



const Section = () => (
 
    
      <Layout style={{ padding: '0 24px 24px' }}>
       
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            <Card className='card'>
  <Row>
   <Col span={12}>
   <h3 className='Title'>4 - CO-APPLICANT 1 DETAILS</h3>
   </Col>
  
</Row> 
<Row>
<Col xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}}>

<label>Lable/Placeholder</label>
     <Input className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>

<label>Lable/Placeholder</label>
     <Input className='Input' placeholder=''/>
</Col>
</Row>
<Row>
<Col   xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}}>
    <label>Title<b className="red-star" >*</b></label>
          <Select className='select' placeholder="">
            <Option value="" ></Option>
          </Select>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>First Name<b className="red-star" >*</b></label>
<Input className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Middle Name<b className="red-star" >*</b></label>
<Input className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Last Name<b className="red-star" >*</b></label>
<Input className='Input' placeholder=''/>
</Col>
</Row>
<Row>
<Col  xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}}>
<label>Date Of Birth<b className="red-star" >*</b></label>
<Input type="date"className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Age<b className="red-star" >*</b></label>
     <Input className='Input' placeholder=''/>
</Col>
<Col  xs={24} sm={{span:10}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
    <label>Gender<b className="red-star" >*</b></label>
          <Select className='select' placeholder="">
            <Option value="" ></Option>
          </Select>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Mother's Maiden Name<b className="red-star" >*</b></label>
     <Input className='Input' placeholder=''/>
</Col>
</Row>
<Row>
<Col>        
<Result status="success" className='Result'></Result>
</Col>
<Col><h4 className='h4'>PERMANENET ADDRESS</h4></Col> 
</Row>
<Row>
<Col xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}}>
<label>Address Line 1<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Address Line 2<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Area<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>City<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col>
</Row>
<Row>
<Col xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}} >
<label>State<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Pincode<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col>
<Col xs={24} sm={{span:10}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Landmark<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col> 
</Row>
<Row>
  <Col span={5} offset={10}><Button className='button'> <b>+ Add Alternate Address </b></Button></Col>
</Row>
<Row>
<Col>        
<Result status="success" className='Result'></Result>
</Col>
<Col><h4 className='h4'>CURRENT ADDRESS</h4></Col> 
</Row>
<Row>
  <Col><Checkbox onChange={onChange} className="checkbox"><h4 className='h1'>Same as Permanent Address</h4></Checkbox></Col>
</Row>
<Row>
  <Col  xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}}>
    <label>Residence Stability<b className="red-star" >*</b></label>
          <Select className='select' placeholder="">
            <Option value="" ></Option>
          </Select>
</Col>
<Col  xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
    <label>Ownership<b className="red-star" >*</b></label>
          <Select className='select' placeholder="">
            <Option value="" ></Option>
          </Select>
</Col>
</Row>
<Row>
<Col  xs={24} sm={{span:10}} md={{span:5}} lg={5} xl={{span:5}}>
    <label>Relationship With Applicant<b className="red-star" >*</b></label>
          <Select className='select' placeholder="">
            <Option value="" ></Option>
          </Select>
</Col>
<Col xs={24} sm={{span:10, offset:1}} md={{span:5, offset:1}} lg={{span:5, offset:1}} xl={{span:5}}>
<label>Share Holding in%<b className="red-star" >*</b></label>
<Input type="Input"className='Input' placeholder=''/>
</Col> 
</Row>
<Row>
<Col  span={19}>
<Button className="abhl-secondary3">Previous</Button>
</Col>
<Col  >
   
<Button className="abhl-primary3">Save&Next</Button>

</Col>
</Row>
            </Card>
        
        </Content>
      </Layout>

);

export default Section;