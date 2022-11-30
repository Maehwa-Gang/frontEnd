/** @jsxImportSource @emotion/react */

const LinkArrow = ({children, handler}: {children: any, handler: any}) => {

    return (
        <button onClick={ () => handler() }
            css = {{
                display: 'inline',
                position: 'absolute',
                right: '3px',
                border: 'none',
                backgroundColor: '#fff',
                cursor: 'pointer'
            }}
        >
            {children}
        </button>
    )
}

export default LinkArrow