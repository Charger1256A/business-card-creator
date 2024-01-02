import { Box, Button } from '@mui/material';
import html2canvas from 'html2canvas';
import './results.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';




export default function Input({ fullName, email, position, phoneNumber, color, logo }) {
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
                <div id="card" style={{ backgroundColor: color.hex, position: "relative", border: "1px solid rgb(204, 204, 204)", width: 630, height: 300, textAlign: "center", fontFamily: "'Monospace', Courier New" }}>
                <div id="name" style={{ color: "black", marginTop: 25, display: "flex", alignItems: "center", justifyContent: "center" }}>{fullName}</div>
                
                <div id="email" style={{ color: "black", marginTop: 25, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <EmailIcon />
                    {email}
                </div>
                <div id="position" style={{ color: "black", marginTop: 25, display: "flex", alignItems: "center", justifyContent: "center" }}>{position}</div>
                
                <div id="phoneNumber" style={{ color: "black", marginTop: 25, display: "flex", alignItems: "center", justifyContent: "center" }}><PhoneIcon />{phoneNumber}</div>
                <img src={logo} alt="..."  height={50} width={50} style={{ marginTop: 25 }}/>
            </div>

            <Button variant="outlined" onClick={downloadImage} id="button">Download Card</Button>
        </Box>
    )
}