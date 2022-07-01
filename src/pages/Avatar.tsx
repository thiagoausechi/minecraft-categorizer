import { ChangeEvent, useState } from "react";

import * as THREE from "three";
import * as skinview3d from "skinview3d";
import Skinview3d from "react-skinview3d";

import styled from "styled-components";
import Textbox from "../components/layout/Textbox";

const Avatar: React.FC = () =>
{
    const [username, setUsername] = useState<string>("RedBonne");

    const skin = (sv: skinview3d.SkinViewer) =>
    {
        sv.animations.add(skinview3d.IdleAnimation);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const camera = sv.camera;
        const POI = new THREE.Vector3();

        document.addEventListener('mousemove', event =>
        {
            mouse.x = (event.pageX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.pageY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), -10), POI);
            sv.playerObject.getObjectByName("head")?.lookAt(POI);
        })
    }

    return (
        <Wrapper>
            <Textbox
                type="text"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
            <Skinview3d
                skinUrl={`https://api.mineatar.io/skin/${username || "-1"}?fallback=true`}
                height={300}
                width={300}
                onReady={skin}
            />
            <h4>This is an experimental page.</h4>
            <h4>Have fun playing around.</h4>
            {username !== "RedBonne" ? null :
                <h6>Yes, this is my character.</h6>
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    margin-bottom: 25px;

    h4, h6
    {
        margin-block: 3px;
    }
`;

export default Avatar;