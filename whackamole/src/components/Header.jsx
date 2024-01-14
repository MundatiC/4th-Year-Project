import logo from "../images/whack-a-mole.png"

export default function Header( { h1Title } ) {
    
    return (<>

        <header className="p-2 flex justify-center border">
            <h1 className="flex items-center"><img src={logo} className="w-10 me-5" alt="" />{h1Title}</h1>
        </header>

    </>)
}