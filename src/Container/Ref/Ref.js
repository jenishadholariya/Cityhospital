import { useRef } from 'react';

function Ref(props) {
    const nameRef = useRef();

    const emailRef = useRef();

    const name=()=>{
        console.log(nameRef.current.value , emailRef.current.value);

        nameRef.current.style.backgroundColor='red';

        emailRef.current.focus();
    }

    return (
        <div>
            <input ref={nameRef} name='name' type='name' placeholder='name'/><br/><br/>
            <input ref={emailRef} name='email' type='name' placeholder='email'/><br/><br/>
            <input type='password' name='password' placeholder='password'/><br/><br/>
            <button onClick={()=>name()}>Submit</button>
        </div>
    );
}

export default Ref;