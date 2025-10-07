import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import login from '../images/login.png'

class ATMLogin extends Component {
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.pinRefs = Array.from({ length: 4 }, (_, i) => React.createRef())
  }

  submitLogin = async (e) => {
    e.preventDefault()
    const bankUser = {
      username: this.usernameRef.current.value,
      pin: this.pinRefs.map((ref) => ref.current.value).join(''),
    }
    try {
      const response = await fetch(`http://localhost:8080/api/bankUsers`)
      if (!response.ok) throw new Error('Failed to fetch user')
      const user = await response.json()
      console.log('Fetched user:', user)
      this.props.history.push('/dashboard')
    } catch (error) {
      console.error('Error fetching user:', error)
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
          <img src={login} alt='ATM Login' className='atm-img' />
          <h2 className='atm-title'>ATM Login</h2>

          <Form className='atm-form' onSubmit={this.submitLogin}>
            {/* Username Field */}
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your username'
                ref={this.usernameRef}
                className='atm-input'
              />
              <Form.Text className='atm-muted'>
                We’ll never share your username with anyone else.
              </Form.Text>
            </Form.Group>

            {/* PIN Input */}
            <Form.Group className='mb-3'>
              <Form.Label>PIN</Form.Label>
              <div className='pin-inputs'>
                {this.pinRefs.map((ref, index) => (
                  <Form.Control
                    key={index}
                    className='pin-box'
                    type='password'
                    ref={ref}
                    maxLength='1'
                    placeholder='•'
                  />
                ))}
              </div>
            </Form.Group>

            <button className='atm-btn' type='submit'>
              Login
            </button>
          </Form>

          <p className='atm-text'>
            Don’t have an account? <Link to='/register'>Sign up</Link>
          </p>
        </motion.div>
      </div>
    )
  }
}

export default withRouter(ATMLogin)
