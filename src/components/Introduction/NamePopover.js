import * as React from 'react';
import {Popover, useArrowContainer} from 'react-tiny-popover'
import {useMemo, useState} from "react";
import NamePopoverContent from "./NamePopoverContent";

const ArrowContainer = ({
                            childRect,
                            popoverRect,
                            position,
                            arrowColor,
                            arrowSize,
                            arrowStyle: externalArrowStyle,
                            className,
                            children,
                            style: externalArrowContainerStyle,
                            onMouseEnter,
                            onMouseLeave,
                        }) => {
    const {arrowContainerStyle, arrowStyle} = useArrowContainer({
        childRect,
        popoverRect,
        position,
        arrowColor,
        arrowSize,
    });

    const mergedContainerStyle = useMemo(
        () => ({
            ...arrowContainerStyle,
            ...externalArrowContainerStyle,
        }),
        [arrowContainerStyle, externalArrowContainerStyle],
    );

    const mergedArrowStyle = useMemo(
        () => ({
            ...arrowStyle,
            ...externalArrowStyle,
        }),
        [arrowStyle, externalArrowStyle],
    );

    return (
        <div className={className} style={mergedContainerStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={mergedArrowStyle}/>
            {children}
        </div>
    );
};

export default function NamePopover({
                                        name,
                                        spelling,
                                        spelling_exp,
                                        katakana,
                                        pronunciation_url
                                    }) {
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const setPopover = (state) => (e) => {
        setPopoverOpen(state);
    };

    const setPopoverClick = (state) => (e) => {
        if (e.target.classList.contains("player-button")) {
            e.stopPropagation();
            return;
        }

        setPopoverOpen(state);
    };

    return <>
        <Popover
            isOpen={isPopoverOpen}
            positions={['top', 'right', 'left', 'bottom']}
            padding={0}
            onClickOutside={setPopoverClick(false)}
            content={({position, childRect, popoverRect}) => (
                <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                    position={position}
                    childRect={childRect}
                    popoverRect={popoverRect}
                    arrowColor="white" arrowSize={10}
                    onMouseEnter={setPopover(true)}
                    onMouseLeave={setPopover(false)}
                >
                    <div
                        className="origin-top-right shadow-xl right-0 mt-2 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <NamePopoverContent name={name} spelling={spelling} spelling_exp={spelling_exp}
                                            katakana={katakana} pronunciation_url={pronunciation_url}/>
                    </div>
                </ArrowContainer>
            )}>
    <span className="text-blue-700 border-b-2 border-blue-700 border-dashed"
          style={{cursor: "pointer"}}
          onMouseEnter={setPopover(true)}
          onMouseLeave={setPopover(false)}
    >{name}</span>
        </Popover>
    </>
        ;
}
