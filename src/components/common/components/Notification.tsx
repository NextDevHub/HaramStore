import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

type NotificationProps = {
    message: string;
    severity?: "success" | "info" | "warning" | "error";
    autoHideDuration?: number;
};

const Notification: React.FC<NotificationProps> = ({
    message,
    severity = "info",
    autoHideDuration = 3000,
}) => {
    const [open, setOpen] = useState(!!message);

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
