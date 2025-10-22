import { FlatIcon } from "@ui/flat-icon";
import sl from "./search-input.module.scss";

type Props = {
    name: string;
    value: string;
    onValue: (value: string) => void;
    placeholder: string;
    style?: React.CSSProperties;
};

export const SearchInput = ({ name, value, onValue, placeholder, style }: Props) => {
    return (
        <div className={sl.wrapper} style={style}>
            <FlatIcon type="search" />
            <input
                className={sl.input}
                type="search"
                name={name}
                value={value}
                onChange={e => onValue(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};
