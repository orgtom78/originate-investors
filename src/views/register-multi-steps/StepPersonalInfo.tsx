// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

const StepPersonalInfo = ({ handleNext, handlePrev }: { handleNext: () => void; handlePrev: () => void }) => {
  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4' className='mbe-1'>
          Personal Information
        </Typography>
        <Typography>Enter Your Personal Information</Typography>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='First Name' placeholder='John' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='number'
            label='Mobile'
            placeholder='123-456-7890'
            InputProps={{
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth type='number' label='Pin Code' placeholder='689421' />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Address' placeholder='1456, Liberty Street' />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Landmark' placeholder='Nr. Wall Street' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='City' placeholder='Miami' />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select label='State' defaultValue='new-york'>
              <MenuItem value='new-york'>New York</MenuItem>
              <MenuItem value='california'>California</MenuItem>
              <MenuItem value='texas'>Texas</MenuItem>
              <MenuItem value='florida'>Florida</MenuItem>
              <MenuItem value='washington'>Washington</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <div>
 <iframe src="https://sign.zoho.com/signform?form_link=234b4d535f4956235ea5336028b9d29019581f38fb04a5ff8172d1f462e1a6e1ef05e357fc5a99e6729f07eb010121763e85bba80f7512600b1d33514e8478996dcf46c0922d4132#" width="80%" height="80%"></iframe>
</div>

        <Grid item xs={12} className='flex justify-between'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handlePrev}
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

export default StepPersonalInfo