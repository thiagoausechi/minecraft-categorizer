import Select, { StylesConfig } from "react-select";
import { Options } from "../../lib/MinecraftItems";

interface Props
{
    value: string | null,
    options: { value: string, label: string }[],
    onChange: any
}

const Selection: React.FC<Props> = ({ value, options, onChange }) =>
{
    return <Select
        value={value}
        options={options}
        onChange={onChange}
        styles={styles}
        isClearable isSearchable
    />
}

const styles: StylesConfig =
{
    placeholder: (p) => ({
        ...p,
        color: "#404040"
    }),

    clearIndicator: (p) => ({
        ...p,
        color: "#404040"
    }),

    dropdownIndicator: (p) => ({
        ...p,
        color: "#404040"
    }),

    indicatorSeparator: (p) => ({
        ...p,
        backgroundColor: "#404040"
    }),

    control: (p) => ({
        ...p,
        backgroundColor: "#E6E6E6",
        backgroundClip: "padding-box",
        border: "3px solid #000000 !important",
        boxShadow: "inset 3px 3px 0px 0px #ffffffad, inset -3px -3px 0px 0px #555555",
        borderRadius: "6px"
    }),

    menu: (p) => ({
        ...p,
        backgroundColor: "#E6E6E6"
    }),

    option: (p, { isSelected, isFocused, data }) =>
    ({
        ...p,
        backgroundColor: isSelected || isFocused ? "#f0f0f0" : "#E6E6E6",
        color: "#404040",
        ...miniIcon((data as Options).texture)
    }),

    input: (p) => ({
        ...p,
        color: "#404040"
    }),

    singleValue: (p) => ({
        ...p,
        color: "#404040"
    }),

    container: (p) => ({
        ...p,
        alignSelf: "center",
        width: "400px"
    })
};

const miniIcon = (texture = "") => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        background: `url(${texture})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        content: '" "',
        display: 'block',
        marginRight: 9,
        height: 20,
        width: 20,
    },
});

export default Selection;