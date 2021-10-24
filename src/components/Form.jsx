import React, { Component, useState } from 'react';
export default function Form() {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    // const [total, setTotal] = useState(number1 + number2);
    // const [dif, setdif] = useState(number1 - number2);
    // const [pro, setpro] = useState(number1 * number2);
    // const [quo, setquo] = useState(number1 / number2);

    // function add() {
    //     setTotal(number1 + number2);
    // }
    // function sub() {
    //     setdif(number1 - number2);
    // }
    // function mul() {
    //     setpro(number1 * number2);
    // }
    // function div() {
    //     setquo(number1 / number2);
    // }

    return (
        <>
            <div className="container my-5">
                <h1 className="mb-3 my-3">Enter two Numbers</h1>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label" >First Number</label>
                    <input type="number" class="form-control" value={number1} aria-describedby="emailHelp" onChange={e => setNumber1(+e.target.value)}/>
                    {/* <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Second Number</label>
                    <input type="number" class="form-control" value={number2} onChange={e => setNumber2(+e.target.value)}/>
                </div>
                {/* <button type="submit" class="btn btn-outline-dark" onClick={add}>Add the numbers</button>
                <button type="submit" class="btn btn-outline-dark mx-2" onClick={sub}>Subtract the Numbers</button>
                <button type="submit" class="btn btn-outline-dark mx-2" onClick={mul}>Multiply the Numbers</button>
                <button type="submit" class="btn btn-outline-dark mx-2" onClick={div}>Divide the Numbers</button> */}
                <p className='my-5'>Addition: {number1 + number2}</p>
                <p className='my-5'>Subtraction: {number1 - number2}</p>
                <p className='my-5'>Multiplication: {number1 * number2}</p>
                <p className='my-5'>Division: {number1 / number2}</p>
            <h2>Developer: Ansh Sharma</h2>
            </div>

        </>
    )
}