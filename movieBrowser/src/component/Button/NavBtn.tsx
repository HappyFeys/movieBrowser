interface NavBtnProps {
    iconIdendifier: string
}

function NavBtn({iconIdendifier}: NavBtnProps) {

    return (
        <>
            <span className="material-symbols-outlined text-white bg-custom-gradient rounded-full p-3">{iconIdendifier}</span>
        </>
    )
}

export default NavBtn