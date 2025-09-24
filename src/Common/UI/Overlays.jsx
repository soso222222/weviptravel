import { useEffect, useRef } from "react";
import { Wrapper } from "./styled.Overlays";

function Overlays({
    className,
    timer,
    children,
    isActive,
    onClose,
}) {
    const ref = useRef();

    const onClick = (e) => {
        const { target } = e;
        if (target === ref.current) {
            ref?.current?.classList.remove("active");
            onClose();
        }
    };
    const toggleActive = () => {
        setTimeout(() => {
            ref?.current?.classList.add("active");
        }, timer);
    };
    useEffect(() => {
        
        const root = document.getElementById("root");
        const body = document.getElementsByTagName("body")[0];
        if (isActive) {
            toggleActive();
            const focusEl = document.activeElement;
            root.style.overflow = "hidden";
            focusEl.blur();
        } else if (!isActive) {
            root.style.overflow = "";
            body.style.paddingRight = " ";
        }
        return () => {
            root.style.overflow = "";
            body.style.paddingRight = "";
        };
    }, [isActive]);
    return (
        <Wrapper
            className={className}
            onClick={(e) => onClick(e)}
            isActive={isActive}
            ref={ref}
        >
            {children || undefined}
        </Wrapper>
    );
}

Overlays.defaultProps = {
    isActive: false,
    zIndex: 300,
    timer: 100,
    onClose: () => {},
};
export default Overlays;
