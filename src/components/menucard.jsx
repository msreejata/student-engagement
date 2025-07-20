import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const courses = [
  {
    title: "NOC:Introduction To Aerospace Engineering",
    discipline: "Aerospace Engineering",
    instructor: "Prof. Rajkumar Pant",
    institute: "IIT Bombay"
  },
  {
    "title": "NOC:Programming in C",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Deepak D'Souza",
    "institute": "IISc Bangalore"
  },
  {
    "title": "NOC:Data Structures and Algorithms",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Naveen Garg",
    "institute": "IIT Delhi"
  },
  {
    "title": "NOC:Operating System Fundamentals",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Natarajan Meghanathan",
    "institute": "IIT Madras"
  },
  {
    "title": "NOC:Computer Networks and Internet Protocol",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. S. Arun Kumar",
    "institute": "IIT Delhi"
  },
  {
    "title": "NOC:Introduction to Machine Learning",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Balaraman Ravindran",
    "institute": "IIT Madras"
  },
  {
    "title": "NOC:Theory of Computation",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Raghunath Tewari",
    "institute": "IIT Kanpur"
  },
  {
    "title": "NOC:Compiler Design",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Mahesh Viswanathan",
    "institute": "IIT Delhi"
  },
  {
    "title": "NOC:Artificial Intelligence: Search Methods for Problem Solving",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Deepak Khemani",
    "institute": "IIT Madras"
  },
  {
    "title": "NOC:Object Oriented Programming",
    "discipline": "Computer Science and Engineering",
    "instructor": "Prof. Sourav Saha",
    "institute": "IIT Kharagpur"
  }    
];

export default function MenuCard() {
  // Split courses into two columns
  const leftColumn = courses.slice(0, 5);
  const rightColumn = courses.slice(5, 10);

  return (
    <Grid container justifyContent="center" sx={{ py: 6 }}>
      <Grid item xs={12} sm={6} md={6}>
        {leftColumn.map((course, idx) => (
          <Card
            key={idx}
            sx={{
              width: '99%',
              margin: '18px auto',
              borderRadius: 2,
              background: '#fcfcfe',
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'grey.300',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 220,
              position: 'relative',
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.discipline}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {course.instructor}
                <br />
                {course.institute}
              </Typography>
            </CardContent>
            <Box sx={{ position: 'absolute', right: 24, bottom: 24 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffb3b3',
                  color: '#d32f2f',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  boxShadow: 'none',
                  minWidth: 100,
                  minHeight: 32,
                  fontSize: '0.9rem',
                  padding: '4px 16px',
                  '&:hover': { backgroundColor: '#ff8a8a' }
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {rightColumn.map((course, idx) => (
          <Card
            key={idx}
            sx={{
              width: '99%',
              margin: '18px auto',
              borderRadius: 2,
              background: '#fcfcfe',
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'grey.300',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 220,
              position: 'relative',
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.discipline}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {course.instructor}
                <br />
                {course.institute}
              </Typography>
            </CardContent>
            <Box sx={{ position: 'absolute', right: 24, bottom: 24 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffb3b3',
                  color: '#d32f2f',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  boxShadow: 'none',
                  minWidth: 100,
                  minHeight: 32,
                  fontSize: '0.9rem',
                  padding: '4px 16px',
                  '&:hover': { backgroundColor: '#ff8a8a' }
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
