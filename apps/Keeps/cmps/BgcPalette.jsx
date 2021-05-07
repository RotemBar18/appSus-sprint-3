
export function BgcPalette(setColor) {
    const setColorF = setColor.setColor
    return (

        <div className='bgc-palette'>
            <button className='bgc red-btn' onClick={() => { setColorF('#D75E45') }}></button>
            <button className='bgc purple-btn' onClick={() => { setColorF('#DE30F1') }}></button>
            <button className='bgc green-btn' onClick={() => { setColorF('#3CF130') }}></button>
            <button className='bgc yellow-btn' onClick={() => { setColorF('#E2F130') }}></button>
            <button className='bgc white-btn' onClick={() => { setColorF('#ffffff') }}></button>
            <button className='bgc blue-btn' onClick={() => { setColorF('#547FF8') }}></button>
        </div>
    )

}
