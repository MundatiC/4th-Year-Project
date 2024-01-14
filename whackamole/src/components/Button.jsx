
export default function Button( { btnTitle, btnAction, className } ) {

    return (<>
        <button onClick={btnAction} className={className}>{btnTitle}</button>
    </>)
}