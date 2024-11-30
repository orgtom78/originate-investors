// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

//Amplify imports
import type { Schema } from '../../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

const StepAccountDetails = async ({ handleNext }: { handleNext: () => void }) => {
    // States
    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)
    const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState<boolean>(false)
  
    const handleClickShowPassword = () => {
      setIsPasswordShown(!isPasswordShown)
    }
  
    const handleClickShowConfirmPassword = () => {
      setIsConfirmPasswordShown(!isConfirmPasswordShown)
    }
  /**
  const { nextStep: signUpNextStep } = await signUp({
    username: 'james',
    options: {
      userAttributes: {
        email: 'james@example.com',
      },
    },
  });
  
  if (signUpNextStep.signUpStep === 'DONE') {
    console.log(`SignUp Complete`);
  }
  
  if (signUpNextStep.signUpStep === 'CONFIRM_SIGN_UP') {
    console.log(
      `Code Delivery Medium: ${signUpNextStep.codeDeliveryDetails.deliveryMedium}`,
    );
    console.log(
      `Code Delivery Destination: ${signUpNextStep.codeDeliveryDetails.destination}`,
    );
  }
  
  // Confirm sign up with the OTP received
  const { nextStep: confirmSignUpNextStep } = await confirmSignUp({
    username: 'james',
    confirmationCode: '123456',
  });
  
  if (confirmSignUpNextStep.signUpStep === 'DONE') {
    console.log(`SignUp Complete`);
  }
  */

  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4' className='mbe-1'>
          Account Information
        </Typography>
        <Typography>Enter Your Account Details</Typography>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Full name' placeholder='John Doe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth type='email' label='Email' placeholder='johndoe@gmail.com' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Password'
            placeholder='············'
            id='outlined-adornment-password'
            type={isPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    size='small'
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Confirm Password'
            placeholder='············'
            id='outlined-confirm-password'
            type={isConfirmPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    size='small'
                    edge='end'
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle confirm password visibility'
                  >
                    <i className={isConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Profile Link' placeholder='johndoe/profile' />
        </Grid>
        <Grid item xs={12} className='flex justify-between'>
          <Button
            disabled
            variant='outlined'
            color='secondary'
            startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            onClick={handleNext}
            endIcon={<DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepAccountDetails
