import { useState } from 'react';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";
import { useFilePicker } from 'use-file-picker';





export default function Input({ fullName, updateFullName, email, updateEmail, position, updatePosition, phoneNumber, updatePhoneNumber, color, updateColor, logo, updateLogo }) {
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            updateLogo(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <Box sx={{ paddingLeft: 5 }}>
            <h1>Inputs</h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: "30%" }}>
                <TextField id="fullName" label="Full Name" variant="standard" value={fullName} onChange={(e) => updateFullName(e.target.value)} />
                <TextField id="email" label="Email" variant="standard" value={email} onChange={(e) => updateEmail(e.target.value)}/>
                <TextField id="position" label="Position and Company" variant="standard" value={position} onChange={(e) => updatePosition(e.target.value)}/>
                <TextField id="phoneNumber" label="Phone Number" variant="standard" value={phoneNumber} onChange={(e) => updatePhoneNumber(e.target.value)}/>
                <input type="file" accept="image/*" onChange={onImageChange} />
                <h4>Background Color</h4>
                <ColorPicker
                    width={600}
                    height={200}
                    color={color}
                    onChange={updateColor}
                />
            </Box>
        </Box>
    )
}