

export function LongTxt({ description, isLongTxt, showMore }) {
    if (description.length > 100) {
        description = isLongTxt ? description : description.substring(0, 101)+'...';
    }
    return (
        <div>
            {description}
            {description.length > 100 && <button className='show-more-btn' onClick={showMore}>{isLongTxt ? 'Show less' : 'Show more'}</button>}
        </div>
    )
}
