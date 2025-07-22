import { Box, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        pt: 4, // more padding top
        pb: 4, // more padding bottom
        px: 2,
        backgroundColor: '#f5f8ff',
        borderRadius: 2,
        boxShadow: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextField
        id="search-courses"
        placeholder="Search for courses"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { backgroundColor: '#fff' },
        }}
      />
      <TextField
        id="search-instructor"
        placeholder="Search by instructor"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { backgroundColor: '#fff' },
        }}
      />
      <FormControl variant="outlined" sx={{ minWidth: 180 }}>
        <InputLabel id="discipline-label">Select Disciplines</InputLabel>
        <Select
          labelId="discipline-label"
          id="select-discipline"
          label="Select Disciplines"
          defaultValue=""
          sx={{ backgroundColor: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="discipline1">Discipline 1</MenuItem>
          <MenuItem value="discipline2">Discipline 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 180 }}>
        <InputLabel id="institute-label">Select Institutes</InputLabel>
        <Select
          labelId="institute-label"
          id="select-institute"
          label="Select Institutes"
          defaultValue=""
          sx={{ backgroundColor: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="institute1">Institute 1</MenuItem>
          <MenuItem value="institute2">Institute 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 180 }}>
        <InputLabel id="course-type-label">Select Course Type</InputLabel>
        <Select
          labelId="course-type-label"
          id="select-course-type"
          label="Select Course Type"
          defaultValue=""
          sx={{ backgroundColor: '#fff' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="online">Online</MenuItem>
          <MenuItem value="offline">Offline</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
        </Select>
      </FormControl>
      {/* More fields will go here */}
    </Box>
  );
}
