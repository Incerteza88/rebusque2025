import React from 'react'

function JobsCards() {
    return (

        <div className='flex justify-content text-align border border-end-0 p-3'>

            <div className='row align-items-center text-start'>
                <div className='col-3'>

                <div className='d-flex align-items-center text-start'>
                    <div style={{ width: "40px", height: "40px" }}>
                        <div className='ratio ratio-1x1 '>
                            <img className='w-100 h-100 object-fit-cover rounded-circle'
                                src='https://img.asmedia.epimg.net/resizer/v2/JRI3SULN7VAR3NIHHAPEVTNVMY.jpg?auth=bc84d1a36158bebf15cf49d7b6f46cb6afb8e9df3677e7b2086b31ffdd314c42&width=1472&height=828&smart=true'>
                            </img>
                        </div>
                    </div>

                    <span className="ms-2">Eduardo García Valverde</span></div>
                </div>
                <div className='col-2'>Youtube Editing</div>
                <div className='col-1'>$80</div>
                <div className='col-3'>
                    <span className='p-0'>Esperando confirmación</span>
                </div>
                <div className='col-3'>
                    <button className='btn rounded-pill text-white' style={{ backgroundColor: "#004aad" }}>Aceptar Trabajo</button>
                </div>


            </div>



        </div >

    )

}

export default JobsCards
