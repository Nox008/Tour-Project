import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import k from '../images/Kochi.jpg'
import a from '../images/Aleppey.jpg'
import m from '../images/Munnar.jpg'
import ko from '../images/Kovalam.jpg'
import { Container, Row,Col } from 'react-bootstrap';
import { useState } from 'react';

function Cards(){
  const [title,setTitle] = useState("")
  const data = [{idno:1, title:'Aleppey',desc:'Alappuzha, also called Alleppey, is famous for its serene backwaters, houseboats, and scenic landscapes in Kerala, India.',imageURL:a},
    {idno:2,title:'Munnar',desc:'Munnar is a picturesque hill station in Kerala, India, known for its tea plantations, cool climate, and breathtaking views.',imageURL:m},
    {idno:3,title:'Kovalam',desc:'Kovalam is a coastal town in Kerala, India, famous for its crescent-shaped beaches, lighthouse, and vibrant seaside activities.',imageURL:ko}
  ]
    return(
    <>
    <Container>
    <Row>
    <Row className='mb-3 mt-3'> 
            <Col>
             <input type="text" name="sch" onChange={(e)=>{
                   setTitle(e.target.value)
             }} className='form-control' placeholder='Where do you like to go today...'/>
             
            </Col>
        </Row>

    <Col  lg={3} className='mb-2 mt-5'>        
    <Card style={{ width: '18rem' }} className='border-2 shadow'>
      <Card.Img variant="top" src={k} style={{height:'120px'}} />
      <Card.Body>
        <Card.Title>Kochi</Card.Title>
        <Card.Text>
        Kochi is a vibrant coastal city in Kerala, India, known for its rich history, diverse culture, and scenic beauty.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
{/* 
    <Col lg={3} className='mt-5'>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={a} style={{height:'120px'}}/>
      <Card.Body>
        <Card.Title>Alleppey</Card.Title>
        <Card.Text>
        Alappuzha, also called Alleppey, is famous for its serene backwaters, houseboats, and scenic landscapes in Kerala, India.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className='mt-5'>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={m} style={{height:'120px'}}/>
      <Card.Body>
        <Card.Title>Munnar</Card.Title>
        <Card.Text>
        Munnar is a picturesque hill station in Kerala, India, known for its tea plantations, cool climate, and breathtaking views.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
    
    <Col lg={3} className='mt-5'>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={ko} style={{height:'120px'}}/>
      <Card.Body>
        <Card.Title>Kovalam</Card.Title>
        <Card.Text>
        Kovalam is a coastal town in Kerala, India, famous for its crescent-shaped beaches, lighthouse, and vibrant seaside activities.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
 */}
 {
  data.length>0?
  data.map((list)=>{
    return(
      <Col lg={3} className='mb-2 mt-5' key={list.idno}>
                    <Card className='border-2 shadow'>
                        <Card.Img variant="top" src={list.imageURL}  style={{height:'120px'}}/>
                        <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                 {list.desc}
                                </Card.Text>
                        <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
        )
      })
      :"No Data Found"
  }
    
    <Col  lg={3} className='mb-2 mt-5'>        
    <Card style={{ width: '18rem' }} className='border-2 shadow'>
      <Card.Img variant="top" src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/405911153.jpg?k=5269fd508548707e1b6c1ceee7692d14617de428f535193efb7b23fd4aac8346&o=" style={{height:'120px'}} />
      <Card.Body>
        <Card.Title>Wayanad</Card.Title>
        <Card.Text>
        Wayanad is a scenic district in Kerala, India, known for its lush forests, wildlife, and beautiful waterfalls.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className='mt-5'>
    <Card style={{ width: '100%' }}className='border-2 shadow'>
      <Card.Img variant="top" src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Places-to-Visit-around-Palakkad.jpg" style={{height:'120px'}}/>
      <Card.Body>
        <Card.Title>Palakkad</Card.Title>
        <Card.Text>
        Palakkad is a picturesque district in Kerala, India, known for its lush paddy fields, historic forts, and serene landscapes.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className='mt-5'>
    <Card style={{ width: '100%' }}className='border-2 shadow'>
      <Card.Img variant="top" src="https://www.trawell.in/admin/images/upload/153110127Vadakumnathan_Temple_Main.jpg" style={{height:'120px'}}/>
      <Card.Body>
        <Card.Title>Thrissur</Card.Title>
        <Card.Text>
        Thrissur, known as the cultural capital of Kerala, and is famous for its vibrant festivals, temples, churches and rich traditions.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
    
    <Col lg={3} className='mt-5 mb-5'>
    <Card style={{ width: '100%' }}className='border-2 shadow'>
      <Card.Img variant="top" src="https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg" style={{height:'120px'}}/>
      <Card.Body>
        <Card.Title>Kollam</Card.Title>
        <Card.Text>
        Kollam is a coastal city in Kerala, India, known for its backwaters, cashew industry, and historic trade significance.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
    )
}
export default Cards