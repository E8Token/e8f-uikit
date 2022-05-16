import React, {Children, cloneElement, isValidElement} from 'react';
import PropTypes from 'prop-types';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const Button = (props: any) => {
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
                    ? <span className={classNames.join(' ')}>{Children.toArray(props.children)}</span>
                    : Children.toArray(props.children)
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

Button.propTypes = {
    handleRoute: PropTypes.func,
    href: PropTypes.string,
    id: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    wrapperClassName: PropTypes.string,
    isOutlined: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    withoutHover: PropTypes.bool,
    withoutPointer: PropTypes.bool,
    onClick: PropTypes.func,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
};

export default Button;
