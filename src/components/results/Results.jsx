import { Box, Button } from '@mui/material';
import html2canvas from 'html2canvas';
import './results.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';




export default function Input({ fullName, email, position, phoneNumber, color}) {
    const downloadImage = () => {
        const table = document.getElementById('card');
    
        html2canvas(table).then(function (canvas) {
          const link = document.createElement('a');
          link.download = `${fullName}.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }
    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Result Component</h1>
            <div id="card" style={{ backgroundColor: color.hex }}>
                <div id="name">{fullName}</div>
                
                <div id="email" className="data-row">
                    <EmailIcon />
                    {email}
                </div>
                <div id="position">{position}</div>
                <div id="phoneNumber"><PhoneIcon />{phoneNumber}</div>
            </div>

            <Button variant="outlined" onClick={downloadImage} id="button">Download Card</Button>
        </Box>
    )
}