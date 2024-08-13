import React from 'react';
import { Button, MenuItem, Stack, Select, FormControl, InputLabel, useTheme, useMediaQuery } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const data = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' },
];

const Form = () => {
  const { control, handleSubmit } = useForm();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark'; // Check if the theme is dark mode

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Stack sx={{ gap: 2, p: 2 }} direction="column">
        <Stack direction="row" spacing={2}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="firstName" sx={{ color: isDarkMode ? 'grey.300' : 'text.primary' }}>First Name</InputLabel>
                <Select
                  {...field}
                  label="First Name"
                  inputProps={{ 'aria-label': 'First Name' }}
                  sx={{
                    bgcolor: isDarkMode ? 'grey.500' : 'background.paper',
                    '& .MuiSelect-select': { color: isDarkMode ? 'grey.200' : 'text.primary' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? 'grey.500' : 'text.primary' },
                    '&:hover': { 
                      bgcolor: isDarkMode ? 'grey.700' : 'action.hover'
                    },
                  }}
                />
              </FormControl>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="lastName" sx={{ color: isDarkMode ? 'grey.300' : 'text.primary' }}>Last Name</InputLabel>
                <Select
                  {...field}
                  label="Last Name"
                  inputProps={{ 'aria-label': 'Last Name' }}
                  sx={{
                    bgcolor: isDarkMode ? 'grey.500' : 'background.paper',
                    '& .MuiSelect-select': { color: isDarkMode ? 'grey.200' : 'text.primary' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? 'grey.500' : 'text.primary' },
                    '&:hover': { 
                      bgcolor: isDarkMode ? 'grey.700' : 'action.hover'
                    },
                  }}
                />
              </FormControl>
            )}
          />
        </Stack>

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="email" sx={{ color: isDarkMode ? 'grey.300' : 'text.primary' }}>Email</InputLabel>
              <Select
                {...field}
                label="Email"
                inputProps={{ 'aria-label': 'Email' }}
                sx={{
                  bgcolor: isDarkMode ? 'grey.500' : 'background.paper',
                  '& .MuiSelect-select': { color: isDarkMode ? 'grey.200' : 'text.primary' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? 'grey.500' : 'text.primary' },
                  '&:hover': { 
                    bgcolor: isDarkMode ? 'grey.700' : 'action.hover'
                  },
                }}
              />
            </FormControl>
          )}
        />

        <Controller
          name="contactNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="contactNumber" sx={{ color: isDarkMode ? 'grey.300' : 'text.primary' }}>Contact Number</InputLabel>
              <Select
                {...field}
                label="Contact Number"
                inputProps={{ 'aria-label': 'Contact Number' }}
                sx={{
                  bgcolor: isDarkMode ? 'grey.500' : 'background.paper',
                  '& .MuiSelect-select': { color: isDarkMode ? 'grey.300' : 'text.primary' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? 'grey.200' : 'text.primary' },
                  '&:hover': { 
                    bgcolor: isDarkMode ? 'grey.700' : 'action.hover'
                  },
                }}
              />
            </FormControl>
          )}
        />

        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="address" sx={{ color: isDarkMode ? 'grey.200' : 'text.primary' }}>Address</InputLabel>
              <Select
                {...field}
                label="Address"
                inputProps={{ 'aria-label': 'Address' }}
                sx={{
                  bgcolor: isDarkMode ? 'grey.500' : 'background.paper',
                  '& .MuiSelect-select': { color: isDarkMode ? 'grey.200' : 'text.primary' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? 'grey.500' : 'text.primary' },
                  '&:hover': { 
                    bgcolor: isDarkMode ? 'grey.700' : 'action.hover'
                  },
                }}
              />
            </FormControl>
          )}
        />

        <Controller
          name="role"
          control={control}
          defaultValue="User"
          render={({ field }) => (
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="role" sx={{ color: isDarkMode ? 'grey.300' : 'text.primary' }}>Role</InputLabel>
              <Select
                {...field}
                label="Role"
                inputProps={{ 'aria-label': 'Role' }}
                sx={{
                  bgcolor: isDarkMode ? 'grey.500' : 'background.paper',
                  '& .MuiSelect-select': { color: isDarkMode ? 'grey.200' : 'text.primary' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? 'grey.500' : 'text.primary' },
                  '&:hover': { 
                    bgcolor: isDarkMode ? 'grey.700' : 'action.hover'
                  },
                }}
              >
                {data.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

        <Button type="submit" sx={{ textTransform: 'capitalize' }} variant="contained">
          Create New User
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
