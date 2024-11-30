import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decerement, increment, incrementByamount, reset } from './src/REDUX/counterSlice';
import { Col, Row } from 'react-bootstrap';







function Counter() {

    const { count } = useSelector((state) => state.counterReducer)

    const dispatch = useDispatch()

    const [amt, setamt] = useState(0)

    const handleincrementByamount = () => {
        if (amt) {

            dispatch((incrementByamount(Number(amt))))



        }
        else {
            alert("enter input")

        }
    }

    return (
        <>
            <div style={{ backgroundColor: "black" }}>

                <h1 className='text-center text-white p-3'>Counter App</h1>

                <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

                    <div className='container w-75 border border shadow p-5' style={{ color: "white", backgroundColor: 'black' }}>

                        <h1 className='text-center'>{count}</h1>

                        <Row className='justify-content-between my-5'>
                            <Col md={3} sm={12} className='text-center p-3'>
                                <Button variant="outline-success" onClick={() => dispatch(decerement())}>Decrement</Button>
                            </Col>
                            <Col md={3} sm={12} className='text-center p-3'>
                                <Button variant="outline-danger" onClick={() => dispatch(reset())}>Reset</Button>
                            </Col>
                            <Col md={3} sm={12} className='text-center p-3'>
                                <Button variant="outline-success" onClick={() => dispatch(increment())}>Increment</Button>
                            </Col>
                        </Row>



                        <Row className='justify-content-center'>
                            <Col md={6} sm={12} className='d-flex align-items-center justify-content-center p-3'>
                                <input type="text" className='form-control w-75' onChange={(e) => setamt(e.target.value)} />

                            </Col>
                            <Col md={3} sm={12} className='text-center'>
                                <Button variant="outline-primary" onClick={handleincrementByamount}>Increment by Amount</Button>

                            </Col>
                        </Row>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter