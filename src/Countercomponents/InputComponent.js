export default function InputComponent({ handleChange }) {
    
    return (
        <div style={{ border: "6px solid orange" }}>
            <input type="text" onChange={handleChange} />
        </div>
    );
}