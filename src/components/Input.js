const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-blue-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
