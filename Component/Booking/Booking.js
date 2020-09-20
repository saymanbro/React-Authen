import React from 'react';
import { Button } from '@material-ui/core';
import './Booking.css'
import { Link, useHistory } from 'react-router-dom';

const Booking = () => {
    const history = useHistory()
    const handleRouteChange = () => {
   history.push('/room')
    }
    return (
        <div className="row bg">
            <div className="col-md-6 booking">
           
           <h1>COX'S BAZAR</h1>
                  <p><strong>Cox's bazar is a city of beauty. In a year, More then 50 thousand foregin toruits comes to Cox's bazar and enjoy the nature of beauty. You can fishing ,Playing ,Riding etc. The main things is the beauty of see . Wow that's Amazing forever. 
                 </strong></p>
            </div>
            <div className="col-md-6  booking">
            <div className='form'>
            <p><small>origin</small></p>
           <input type="text" />
           <br/>
           <p><small>Destination</small></p>
           <input type="text"/>
           <br/>
        <table>
            <tr>
                <td>   
           <p><small>From</small></p>
           <input type="text"/>
           </td>
           <td>
               <p><small>To</small></p>
               <input type="text"/>
           </td>
            </tr>
        </table>
                <br/>
       <Button variant='contained' onClick={handleRouteChange} color='primary'>Start Booking</Button>
        </div>
            </div>
        </div>
    );
};

export default Booking;