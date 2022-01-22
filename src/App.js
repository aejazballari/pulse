import React, {useState} from 'react';
import Validate from './Validate'
import './App.scss'

function App() {
    const [data, setData] = useState({
        request: '',
        lid:'',
        seat: '',
        desc: ''
    })
    const [err, setErr] = useState({})

    const Requests = [
        {
            id: 'r0',
            type: 'Select' 
        },
        {
            id: 'r1',
            type: 'New software installation' 
        },
        {
            id: 'r2',
            type: 'Keyboard not working properly' 
        },
        {
            id: 'r3',
            type: 'No keyboard' 
        },
        {
            id: 'r4',
            type: 'Install Xcode' 
        },
        {
            id: 'r5',
            type: 'OS not booting' 
        },
        {
            id: 'r6',
            type: 'Unable to login through my username' 
        },
        {
            id: 'r7',
            type: 'System hangs frequently' 
        },
        {
            id: 'r8',
            type: 'Monitor display problem' 
        },
        {
            id: 'r9',
            type: 'Audio not working' 
        },
        {
            id: 'r10',
            type: 'Internet not working' 
        },
    ]
    const Lab = [
        {
            id: 'l0',
            Lid: 'Select' 
        },
        {
            id: 'l1',
            Lid: 'L11' 
        },
        {
            id: 'l2',
            Lid: 'L22' 
        },
        {
            id: 'l3',
            Lid: 'L33' 
        },
        {
            id: 'l4',
            Lid: 'L44' 
        },
        {
            id: 'l5',
            Lid: 'L55' 
        },
        {
            id: 'l6',
            Lid: 'L66' 
        },
        {
            id: 'l7',
            Lid: 'L77' 
        },
        {
            id: 'l8',
            Lid: 'L88' 
        },
        {
            id: 'l9',
            Lid: 'L99' 
        },
        {
            id: 'l10',
            Lid: 'L10H' 
        },
    ]
    const Seat= ['Select','1','2','3','4','5','6','7','8','9']

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        let errors = Validate(data)
        setErr(errors)
        e.preventDefault()
        console.log(data);
        // if(Object.keys(err).length === 0) {
        //     console.log(data)
        // }
    }
  return <div>
      <h2 className='h2'>Create a Request</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='input input-desc'>
            <label htmlFor='name' className={err.request && 'err'}>Request Name</label>  
            <div className='input-text'> 
                <select id='name' name='request' value={data.request} onChange={onChange}>
                    {Requests.map((item) => {
                        return <option value={item.type} key={item.id}>{item.type}</option>
                    })}
                </select>
                <br />
                {err.request && <span>{err.request}</span>}
            </div>
        </div>
        <div className='input input-desc'>
            <label htmlFor='lid' className={err.lid && 'err'}>Lab ID</label>
            <div className='input-text'>
                <select id='lid' name='lid' value={data.lid} onChange={onChange}>
                {data.request === '' || data.request === 'Select' ? <option value={Lab[0].Lid} key={Lab[0].id}>{Lab[0].Lid}</option> : Lab.map((item) => {
                        return <option value={item.Lid} key={item.id}>{item.Lid}</option>
                    })}
                </select>
                <br />
                {err.lid && <span>{err.lid}</span>}
            </div>
           
        </div>
        <div className='input input-desc'>
            <label htmlFor='seat' className={err.seat && 'err'}>Seat Number</label>
            <div className='input-text'>
                <select id='seat' name='seat' value={data.seat} onChange={onChange}>
                {
                        data.lid === '' || data.lid === "Select" ?  <option value={Seat[0]} key={Seat[0]}>{Seat[0]}</option> : Seat.map((item) => {
                            return <option value={item} key={item}>{item}</option>
                        })
                    }
                </select>
                <br />
                {err.seat && <span>{err.seat}</span>}
            </div>
        </div>
        <div className='input input-desc'>
            <label htmlFor='desc' className={err.desc && 'err'}>Description</label>
            <div className={err.desc && 'input-text'}>
                <textarea id='desc' name='desc' value={data.desc} onChange={onChange} placeholder='Ticket Description'> </textarea>
                {err.desc && <p>{err.desc}</p>}
                <p >Please describe in detail</p>
            </div>
        </div>
        <button type='submit' onClick={onSubmit} className='btn'>Submit</button>
      </form>
  </div>;
}

export default App;
