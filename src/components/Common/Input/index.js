const Input = ({ label, type, className, placeholder, startAdorment }) => {
    return (
        <section>
            {label && (<> <label className="text-gray-600 font-medium" htmlFor="#">{label}</label> <br /> </>)}
            <section className="relative">
                <span className="absolute top-2/4 left-2 -translate-y-2/4 text-gray-500">
                    {startAdorment}
                </span>
                <input type={type || "text"} className={`w-424 py-18 h-38 text-14 pr-16 ${startAdorment ? 'pl-32' : 'pl-16'} ${className}`} placeholder={placeholder} />
            </section>
        </section>
    )
}

export default Input;