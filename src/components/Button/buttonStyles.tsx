import { css } from 'styled-components';

const buttonStyles = (props: any) => {
    return css`
      & {
        color: #FFFFFF;
        border-radius: 8px;
        padding: 0;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.025em;
        width: 160px;
        height: 50px;

        outline: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-touch-callout: none;
        user-select: none;
        cursor: pointer;
        box-sizing: border-box;
        text-decoration: none;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        ${props.disabled
            ? `
                cursor: default;
                pointer-events: none;
                background: ${props.theme.btnBackgroundLinearGradientDisabled};
            `
            : `background: ${props.theme.btnBackgroundLinearGradient};`
        }
      }

      &:not(.button--without-hover):hover,
      &:not(.button--without-hover):active {
        background: ${props => props.theme.btnBackgroundLinearGradientActive};
      }
      
      & .outlined-wrapper {
        position: relative;
        /*width: 157px;
        height: 47px;*/
        width: 160px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        ${props.disabled
            ? `
                background: #5b5b5be6;
            `
            : `background: #000000;`
        }
      }
      
      &:not(.button--without-hover && :hover) .outlined-wrapper::before,
      &:not(.button--without-hover && :active) .outlined-wrapper::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 10px;
        padding: 1px;
        background: ${props => props.theme.btnBorderLinearGradient};
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      &:not(.button--without-hover):hover .outlined-wrapper::before {
        content: none;
      }

      &:not(.button--without-hover):hover .outlined-wrapper,
      &:not(.button--without-hover):active .outlined-wrapper {
        ${props.disabled
            ? `
                background: #5b5b5be6;
            `
            : `background: rgba(0, 0, 0, 0);`
        }
      }
      
      & span.with-icon {
        display: flex;
        align-items: center;
      }
      
      & span.left-icon {
        margin-left: 10px;
      }
      
      & span.right-icon {
        margin-right: 10px;
      }
      
      &.button--without-pointer {
        pointer-events: none;
      }
    `
};

export default buttonStyles;
