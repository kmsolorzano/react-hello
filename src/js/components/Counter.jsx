const Counter = ({ numero, digitos }) => {
    let numStr = numero.toString();
    let num = numStr.at(digitos * -1) ?? '0';
    return (
        <span className="text-center bg-black text-white p-3">
            {num}
        </span>
    );
};

export default Counter;