export default function Counter({ count, updateCount }) {

    return (
        <div>
            <div> Count: {count}</div>
            <button conClick={updateCount}> Add count </button>
        </div>
    );
}