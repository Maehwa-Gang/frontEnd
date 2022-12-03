/** @jsxImportSource @emotion/react */

const LinkArrow = ({handler}: {handler: React.MouseEventHandler<HTMLButtonElement>}) => {

    return (
        <button onClick={ (e) => handler(e) }
            css = {{
                display: 'inline',
                position: 'absolute',
                right: '3px',
                border: 'none',
                width: '7px',
                height: '12px',
                cursor: 'pointer',    
                background: 'url("/assets/images/common/arrow_button.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
            }}
        >
        </button>
    )
}

export default LinkArrow