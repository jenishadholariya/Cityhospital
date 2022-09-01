import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ReSetAlert } from '../../Redux/Action/Alert.Action';

function Alert(props) {
    const Alert = useSelector(state => state.alert)

    console.log(Alert);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const dispatch = useDispatch()

    useEffect(() => {
        if(Alert.text !== ''){
            enqueueSnackbar(Alert.text, {
                variant: Alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

            setTimeout(()=>{dispatch(ReSetAlert())},2000)
        }        
    }, [Alert.text])
    return (
        <div></div>
    );
}

export default Alert;