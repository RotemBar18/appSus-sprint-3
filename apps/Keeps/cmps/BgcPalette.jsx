
export function BgcPalette(setColor) {
    const setColorF = setColor.setColor
    return (

        <div className='bgc-palette'>
            <button className='bgc red-btn' onClick={() => { setColorF('#D75E45') }}></button>
            <button className='bgc purple-btn' onClick={() => { setColorF('#d48ef7') }}></button>
            <button className='bgc green-btn' onClick={() => { setColorF('#75ff6c') }}></button>
            <button className='bgc yellow-btn' onClick={() => { setColorF('#f8f87c') }}></button>
            <button className='bgc white-btn' onClick={() => { setColorF('#ffffff') }}></button>
            <button className='bgc lightblue-btn' onClick={() => { setColorF('#84fdf8') }}></button>
            <button className='bgc blue-btn' onClick={() => { setColorF('#7091ef') }}></button>
            <button className='bgc orange-btn' onClick={() => { setColorF('#fc7') }}></button>
        </div>
    )

}
