import { useCallback, useEffect, useState } from "react";
import { useMenuState, SubMenu, MenuItem } from "@szhsin/react-menu";

import { useAppDispatch } from "../../lib/hooks/useAppDispatch.hook";
import { useAppSelector } from "../../lib/hooks/useAppSelector.hook";

import { isMacOs } from "react-device-detect";
import { getItemById } from "../../lib/MinecraftItems";

import Menu from "../layout/ContextMenu/Menu";
import ItemIcon from "../layout/ItemIcon";
import { addItems as addItemsToCategory } from "../../store/slices/categoriesSlice";
import { add as refundItems } from "../../store/slices/uncategorizedSlice";
import { clear, removeItemsFromContext } from "../../store/slices/selectedItemsSlice";
import { add as checkItems, remove as uncheckItems } from "../../store/slices/checkedItemsSlice";

const ContextMenu: React.FC = () => 
{
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.value);
    const categories_order = useAppSelector(state => state.order.value);
    const selectedItems = useAppSelector(state => state.selectedItems.list);

    const [menuProps, toggleMenu] = useMenuState();
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    const handleContextMenu = useCallback<(e: MouseEvent) => void>(e =>
    {
        if (isMacOs ? !e.metaKey : !e.ctrlKey)
        {
            e.preventDefault();
            setAnchorPoint({ x: e.clientX, y: e.clientY });
            toggleMenu(true);
        }
    }, [setAnchorPoint, toggleMenu]);

    useEffect(() =>
    {
        document.addEventListener("contextmenu", handleContextMenu);
        return () => document.removeEventListener("contextmenu", handleContextMenu);
    });

    const selectedList = selectedItems.map(item => item.id);
    const noItemSelected = selectedItems.length === 0;

    const addToCategory = (id: string) => 
    {
        removeItemsFromContext(selectedItems, dispatch);
        dispatch(addItemsToCategory({ category: id, items: selectedList }));
    }

    const refund = () => 
    {
        removeItemsFromContext(selectedItems, dispatch);
        dispatch(uncheckItems(selectedList));
        dispatch(refundItems(selectedList));
    }

    const check = () => { dispatch(checkItems(selectedList)); deselect(); }
    const uncheck = () => { dispatch(uncheckItems(selectedList)); deselect(); }
    const deselect = () => { dispatch(clear()); }

    const categoriesList = categories_order.map(id =>
        <MenuItem key={id} onClick={() => addToCategory(id)}>
            <ItemIcon
                texture={getItemById(categories[id].icon).texture}
                name={categories[id].name}
                inSlot={false}
            />
            <span>{categories[id].name}</span>
        </MenuItem>
    );

    return (
        <Menu {...menuProps} anchorPoint={anchorPoint} onClose={() => toggleMenu(false)}>
            <SubMenu label="Move to" disabled={categories_order.length === 0 || noItemSelected}>
                {categoriesList}
            </SubMenu>
            <MenuItem disabled={noItemSelected} onClick={check}   >Check</MenuItem>
            <MenuItem disabled={noItemSelected} onClick={uncheck} >Uncheck</MenuItem>
            <MenuItem disabled={noItemSelected} onClick={deselect}>Unselect</MenuItem>
            <MenuItem disabled={noItemSelected} onClick={refund}  >Refund</MenuItem>
        </Menu>
    );
}

export default ContextMenu;