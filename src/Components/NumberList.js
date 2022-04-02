export const NumberList = (props) => {
    const numbers = props.numbers;
    let listItems = numbers.map(it => <li key={it.toString()}>{it}</li>);

    return (
        <ul>{listItems}</ul>
    );
}

