import React, {Children, cloneElement, isValidElement} from 'react';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

export interface ButtonProps {
    handleRoute?: string,
    href: string,
    id: string,
    target: string,
    className: string,
    children?: React.ReactNode,
    wrapperClassName: string,
    isOutlined: boolean,
    isDisabled: boolean,
    isLoading: boolean,
    withoutHover: boolean,
    withoutPointer: boolean,
    onClick: React.MouseEventHandler,
    startIcon: React.ReactNode,
    endIcon: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    const classNames = props.className ? [props.className] : []
    const iconExists = isValidElement(props.startIcon) || isValidElement(props.endIcon)

    if (props.isLoading) {
        classNames.push('button--loading')
    }

    if (props.isDisabled) {
        classNames.push('button--disabled')
    }

    if (props.isOutlined) {
        classNames.push('button--outlined')
    }

    if (props.withoutHover) {
        classNames.push('button--without-hover')
    }

    if (props.withoutPointer) {
        classNames.push('button--without-pointer')
    }

    const getChildren = () => {
        const classNames = []

        if (isValidElement(props.startIcon)) {
            classNames.push('left-icon')
        }

        if (isValidElement(props.endIcon)) {
            classNames.push('right-icon')
        }

        return <>
            {isValidElement(props.startIcon) &&
                cloneElement(props.startIcon, {
                    mr: '0.5rem',
                })
            }
            {
                iconExists
                    ? <span className={classNames.join(' ')}>{Children.toArray(children)}</span>
                    : Children.toArray(children)
            }
            {isValidElement(props.endIcon) &&
                cloneElement(props.endIcon, {
                    ml: '0.5rem',
                })
            }
        </>
    }

    // Render an anchor tag
    let button = (
        <A
            href={props.href}
            onClick={props.onClick}
            className={classNames}
            target={props.target}
            disabled={props.isDisabled}
        >
            {
                props.isOutlined
                    ? <div className='outlined-wrapper'>
                        <span className={iconExists ? 'with-icon' : ''}>{getChildren()}</span>
                    </div>
                    : <span className={iconExists ? 'with-icon' : ''}>{getChildren()}</span>
            }
        </A>
    );

    // If the Button has a handleRoute prop, we want to render a button
    if (props.handleRoute) {
        button = (

            <StyledButton onClick={props.handleRoute} className={classNames} disabled={props.isDisabled}>
                {
                    props.isOutlined
                        ? <div className='outlined-wrapper'>
                            {getChildren()}
                        </div>
                        : getChildren()
                }
            </StyledButton>
        );
    }

    return <Wrapper className={props.wrapperClassName ? props.wrapperClassName : ''}>
        {button}
    </Wrapper>;
}

export default Button;
