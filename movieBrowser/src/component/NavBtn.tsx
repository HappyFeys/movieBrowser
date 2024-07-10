interface NavBtnProps {
    iconIdendifier: string
}

function NavBtn({iconIdendifier}: NavBtnProps) {

    return (
        <>
            <span className="material-symbols-outlined text-white">{iconIdendifier}</span>
        </>
    )
}

export default NavBtn