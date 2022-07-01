import { GetPositionProps } from "./types";

export const getPosition: GetPositionProps = (ref, mouseX, mouseY) =>
{
    if (!ref.current) return { active: false, x: 0, y: 0 };

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const tipWidth  = ref.current.clientWidth;
    const tipHeight = ref.current.clientHeight;

    const defaultOffset = getDefaultPosition(tipWidth, tipHeight);
    const outsideLeft   = (place: Places) => (mouseX + defaultOffset[place].l) < 0;
    const outsideRight  = (place: Places) => (mouseX + defaultOffset[place].r) > (vw - 30);
    const outsideTop    = (place: Places) => (mouseY + defaultOffset[place].t) < 0;
    const outsideBottom = (place: Places) => (mouseY + defaultOffset[place].b) > vh;

    const outside = (p: Places) => outsideLeft(p) || outsideRight(p) || outsideTop(p) || outsideBottom(p);
    const inside  = (p: Places) => !outside(p);

    const placeIsInside = {
        right:  inside("right"),
        left:   inside("left"),
        top:    inside("top"),
        bottom: inside("bottom")
    }

    const choose = () =>
    {
        for (const p of (Object.keys(placeIsInside) as Places[]))
            if (placeIsInside[p]) return p;
        return "right";
    }

    const choosenPlace = choose();

    return {
        active: true,
        x: mouseX + defaultOffset[choosenPlace].l,
        y: mouseY + defaultOffset[choosenPlace].t
    };
}

const getDefaultPosition = (tipWidth: number, tipHeight: number) => 
{
    const disToMouse = 15;
    const cursorHeight = 12;

    const left = {
        l: -(tipWidth + disToMouse),
        r: -disToMouse,
        t: 0,
        b: 0
    };

    const right = {
        l: disToMouse,
        r: tipWidth + disToMouse,
        t: 0,
        b: 0
    };

    const top = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: -(tipHeight + disToMouse),
        b: -disToMouse
    };

    const bottom = {
        l: -(tipWidth / 2),
        r: tipWidth / 2,
        t: disToMouse + cursorHeight,
        b: tipHeight + disToMouse + cursorHeight
    };

    return { left, right, top, bottom };
}

type Places = "left" | "right" | "top" | "bottom"