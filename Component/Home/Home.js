import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import {Card} from 'react-bootstrap';
import sundarban from './logo/sundorbon.png';
import sreemongal from './logo/Sreemongol.png';
import sajek from './logo/Sajek.png'
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'


const Home = () => {
   
    return (
        
       <div className='home-bg'>
            <Header></Header>
            <div className='row'>
                <div className="col-md-4">
                <h1>COX'S BAZAR</h1>
                  <p><strong>Cox's bazar is a city of beauty. In a year, More then 50 thousand foregin toruits comes to Cox's bazar and enjoy the nature of beauty. You can fishing , 
                 </strong></p>
                </div>
                <div  className="col-md-8 img ">
                    <div className="row">
                        <div className="col-md-4">
                        <Card style={{ width: '12rem' }}>
                    
                        <Card.Body>
                            <img src={sundarban} width='170px' alt=""/>
                    
                        <Button  variant="contained" color='secondary'> <Link to='/sundarban'>Sundarban</Link> </Button>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-4">
                        <Card style={{ width: '12rem' }}>
                         <Card.Body>
                         <img src={sreemongal} width='170px' alt=""/>
                         <Button  variant="contained" color='secondary'> <Link to='/sreemongol'>Sreemonagal</Link></Button>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-4">
                        <Card style={{ width: '12rem' }}>
                        <Card.Body>
                        <img src={sajek} width='170px' alt=""/>
                        
                        <Button variant="contained" color='secondary'> <Link to='/sajek'>Sajek</Link></Button>
                       </Card.Body>
                        </Card>
                        </div>
                    </div>
               
                </div>
               
           
                 
            </div>
     </div>

        

       
        
       
    );
};

export default Home;