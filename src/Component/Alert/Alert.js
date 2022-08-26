import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Alert(props) {
    const Alert = useSelector(state => state.alert)

    console.log(Alert);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if(Alert.text !== ''){
            enqueueSnackbar(Alert.text, {
                variant: "error",
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        }        
    }, [Alert.text])
    return (
        <div>

        </div>
    );
}

export default Alert;