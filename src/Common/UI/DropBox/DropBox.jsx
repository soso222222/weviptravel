import { DropItemContainer, Wrapper } from "./styled.DropBox";

function DropBox({
    title,
    list,
    onChange,
    selected
}) {
    const onSelectChange = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <Wrapper onChange={onSelectChange}  placeholder={title}>
            {list?.map(({id, text}, idx) => {
                return (
                <DropItemContainer
                key={idx} 
                value={id} 
                selected={selected === id}
                >
                    {text}
                </DropItemContainer>
                );
            })}
        </Wrapper>
    );
}

export default DropBox;
