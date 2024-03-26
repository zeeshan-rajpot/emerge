import React from 'react'

const Create = () => {
    return (
        <>
            <div className='m-auto' style={{ width: '90%' }}>
                <p><b>Write your message here</b></p>

                <textarea name="" id="" cols="20" rows="5" className="w-100 rounded-5 border p-3" placeholder="Anyway, I'm pretty sure I'm just imagining things, but it made me think of you! How's everything going on your end? Let's catch up soon!"></textarea>
                <p className="pricolor ms-2 mt-4 m-auto mb-0">User Name</p>
                <input type="text" className="w-100 p-2 py-3 border rounded-4 " placeholder="Anas Akhtar" />

                <p className="pricolor ms-2 mt-4 m-auto mb-0"> Email Address</p>
                <input type="text" className="w-100 p-2 py-3 border rounded-4 " placeholder="@hotmail.com" />

                <div className="mt-4 d-flex justify-content-center align-items-center">
      <button
        className="shadow"
        style={{
          width: '30%',
          height: '35px',
          textAlign: 'center',
          borderRadius: '22px',
          color:  '#fff' ,
          backgroundColor:'#C54FE8' ,
          border: 'none',
        }}

      >
        Inbox
      </button>
      <button
        className="shadow"
        style={{
          width: '30%',
          height: '35px',
          textAlign: 'center',
          borderRadius: '22px',
          color:  '#C54FE8',
          backgroundColor:  '#fff' ,
          border: 'none',
          marginLeft: '10px',
        }}

      >
        Create
      </button>
    </div>


    <div className='d-flex align-items-center justify-content-start border rounded-5 overflow-hidden mt-4 bg-white'>
        <div className='p-4' >
          <img src='/IMG20230616232003.png' alt="" />
        </div>
        <div className='ms-2'>
          <div className='d-flex align-items-center'>
            <p className='pricolor mb-0' style={{ fontSize: '13px' }}>Rajpal Yahdav</p>
            <p className='mb-0' style={{ fontSize: '13px' }}>(3 Days ago)</p>
          </div>
          <p style={{ fontSize: '13px' }} className='mt-1 mb-0'>This app is amazing! Highly recommend it to everyone.</p>
        </div>
      </div>
            </div>
        </>
    )
}

export default Create
