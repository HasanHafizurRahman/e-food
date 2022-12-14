import React from 'react'
import Table from 'react-bootstrap/Table';

const CardsDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>
          Items Details Page <span className="float-right"><i className="fas fa-shopping-cart"></i></span>
        </h2>
        <section className='container mt-2'>
          <div className='itemsdetails'>
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="items" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong> : Masala Theoryy </p>
                    <p> <strong>Price</strong> : € 300 </p>
                    <p> <strong>Dishes</strong> : North Indian, Biryani, Mughal </p>
                    <p> <strong>Total</strong> : € 300 </p>
                  </td>
                  <td>
                    <p> <strong>Rating :</strong> <span style={{background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px"}}>3.5★</span> </p>
                    <p> <strong>Order Review :</strong> <span style={{color: "orangered"}}>1178 + order placed from here recently.</span> </p>
                    <p> <strong>Remove :</strong> <i className='fas fa-trash' style={{color:"red"}}></i> </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails