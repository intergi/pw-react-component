import React, {useEffect, useRef, useState} from "react";

window.ramp = window.ramp || {};
window.ramp.que = window.ramp.que || [];

const inPageUnits = [
    'leaderboard_atf',
    'leaderboard_btf',
    'med_rect_atf',
    'med_rect_btf',
    'sky_atf',
    'sky_btf'
];

// find a new unique element ID to place this ad
const getUniqueId = (type) => {

    let base = `pw-${type}`;
    let idx = 1;
    while (document.getElementById(`${base}${idx}`)) {

        idx++;

    }

    return `${base}${idx}`;

};

// sets up the object and adds a selectorId if necessary
const getInitialUnit = (props) => {
    const unit = {
        type: props.type
    };
    if (inPageUnits.includes(props.type)) {
        unit.selectorId = getUniqueId(props.type);
    }
    return unit;
};

// destroy the unit when componenent unmounts
const cleanUp = (parentId) => {

    // possible that component was removed before first ad was created
    if (!window.ramp.setttings || !window.ramp.settings.slots)
        return;

    let slotToRemove = null;
    Object.entries(window.ramp.settings.slots).forEach(([slotName, slot]) => {
        if (
            slot.element
            && slot.element.parentElement
            && slot.element.parentElement.id === parentId
        ) {
            slotToRemove = slotName;
        }
    });

    if (slotToRemove) {
        window.ramp.que.push(() => {
            window.ramp.destroyUnits(slotToRemove);
        });
    }
};

export default function Ramp (props) {
    const [rendered, setRendered] = useState(false);
    const [unitToAdd] = useState(getInitialUnit(props));

    const elementRef = useRef(null);
    const renderAd = () => {
        if (rendered) {
            return;
        }
        setRendered(true);
        window.ramp.que.push(() => {
            window.ramp.addUnits([
                    unitToAdd
                ]).then( () => {
                    window.ramp.displayUnits();
                }).catch( (e) =>{
                    console.log(e);
                });
        });
    };
    useEffect(() => {
        renderAd();
        return () => {
            cleanUp(unitToAdd.selectorId);
        }
    }, []);
    return (
        <div
            ref={elementRef}
            id={unitToAdd.selectorId}
            className={props.cssClass}
        >
        </div>
    );
};

// class Ramp extends React.Component {
//     constructor (props) {
//         super (props);
//     }
//     shouldComponentUpdate (nextProps) {
//         return nextProps.selectorId !== this.props.selectorId;
//     }
//     render() {
//
//         const props = this.props;
//
//         if (document.getElementById(props.selectorId))
//             return null;
//         window.ramp = window.ramp || {};
//         window.ramp.que = window.ramp.que || [];
//
//         window.ramp.que.push(() => {
//             window.ramp.addUnits([
//                 {
//                     selectorId: props.selectorId,
//                     type: props.type
//                 }
//                 ]).then( () => {
//                     window.ramp.displayUnits();
//                 }).catch( (e) =>{
//                     console.log(e);
//                 });
//         });
//
//         return (
//             <div data-pw-desk={props.type} id={props.selectorId} className={props.cssClass}></div>
//         );
//     }
// }
