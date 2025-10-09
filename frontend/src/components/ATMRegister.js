import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import register from '../images/register.png'

class ATMRegister extends Component {
  constructor(props) {
    super(props)
    this.firstNameRef = React.createRef()
    this.lastNameRef = React.createRef()
    this.usernameRef = React.createRef()
    this.pinRefs = Array.from({ length: 4 }, (_, i) => React.createRef())
    this.confirmPinRefs = Array.from({ length: 4 }, (_, i) => React.createRef())
    this.accountRef = React.createRef()
    this.confirmAccountRef = React.createRef()
  }

  submitUsers = async (e) => {
    e.preventDefault()
    const pin = this.pinRefs.map((r) => r.current.value).join('')
    const confirmPin = this.confirmPinRefs.map((r) => r.current.value).join('')
    const account = this.accountRef.current.value
    const confirmAccount = this.confirmAccountRef.current.value

    if (pin !== confirmPin) return alert('PINs do not match')
    if (account !== confirmAccount) return alert('Account numbers do not match')

    const bankUser = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      username: this.usernameRef.current.value,
      pin,
      account: {
        account_number: account,
        balance: 0.0
      },
    }

    try {
      const res = await fetch('http://localhost:8080/api/bankUsers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bankUser),
      })
      if (!res.ok) throw new Error('Error submitting user')
      alert('Registration successful! Please login with your credentials.')
      window.location.href = '/login'
    } catch (error) {
      console.error('Error submitting user:', error)
      alert('Registration failed. Please try again.')
    }
  }

  render() {
    return (
      <div className='atm-page'>
        <motion.div
          className='atm-card'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={register} alt='ATM Register' className='atm-img' />
          <h2 className='atm-title'>Create Account</h2>

          <Form onSubmit={this.submitUsers} className='atm-form'>
            <Row>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='First Name'
                  ref={this.firstNameRef}
                  className='atm-input'
                />
              </Col>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Last Name'
                  ref={this.lastNameRef}
                  className='atm-input'
                />
              </Col>
            </Row>

            <Form.Control
              type='text'
              placeholder='Username'
              ref={this.usernameRef}
              className='atm-input mt-3'
            />

            <div className='pin-group'>
              <p>Create PIN</p>
              <div className='pin-inputs'>
                {this.pinRefs.map((ref, i) => (
                  <Form.Control
                    key={i}
                    className='pin-box'
                    type='password'
                    ref={ref}
                    maxLength='1'
                    placeholder='•'
                  />
                ))}
              </div>

              <p>Confirm PIN</p>
              <div className='pin-inputs'>
                {this.confirmPinRefs.map((ref, i) => (
                  <Form.Control
                    key={i}
                    className='pin-box'
                    type='password'
                    ref={ref}
                    maxLength='1'
                    placeholder='•'
                  />
                ))}
              </div>
            </div>

            <Form.Control
              type='text'
              placeholder='Account Number'
              ref={this.accountRef}
              className='atm-input mt-3'
            />
            <Form.Control
              type='text'
              placeholder='Confirm Account Number'
              ref={this.confirmAccountRef}
              className='atm-input mt-2'
            />

            <button className='atm-btn mt-3' type='submit'>
              Register
            </button>
          </Form>

          <p className='atm-text'>
            Already have an account? <Link to='/login'>Login instead</Link>
          </p>
        </motion.div>
      </div>
    )
  }
}

export default ATMRegister
