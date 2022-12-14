import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import './style.css'

const Cards = () => {

  const [data, setData] = useState(Cardsdata)

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((item, id) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={item.imgdata} style={{height: "15rem", marginTop:10}} />
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>
                      Price: € {item.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="secondary" className='col-lg-12'>Add To Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards