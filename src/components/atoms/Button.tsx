/** @jsxImportSource @emotion/react */

// 버튼 배경, 폰트, 테두리 색상
const colors: {[key:string]: {}} = {
	default: {
		backgroundColor: "#5900CB",
		color: "#FFFFFF",
		border: "0"
	},
	white: {
		backgroundColor: "#FFFFFF",
		color: "#000000",
		border: "1px solid #000000"
	},
	blue: {
		backgroundColor: "#FFFFFF",
		color: "#5900CB",
		border: "1px solid #5900CB"
	}
}
interface ButtonProps {
	children: React.ReactNode, 
	variant: string, 
	width: string,
	handler: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({children, variant, width, handler}: ButtonProps) => {
	return (
		<button
			css={{
				...colors[variant],
				width: width,
				height: '50px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '14px;',
				fontWeight: '400',
			    fontFamily: 'Spoqa Han Sans Neo',
				borderRadius: '4px',
				cursor: 'pointer'
			}}
			onClick={handler}
		>
			{children}
		</button>
	);
}
Button.defaultProps = {
	variant: 'default',
	width: '100%'
}

const ButtonWrapper = ({children}: {children: React.ReactNode}) => {
	return (
		<div css={{
			width: '100%',
			position: 'absolute',
			left: '0',
			bottom: '24px'
		}}>
			{children}
		</div>
	)
}

const PopupButtonWrapper = ({children}: {children: React.ReactNode}) => {
	return (
		<div css={{
			width: '100%'
		}}>
			{children}
		</div>
	)
}

export { Button, ButtonWrapper, PopupButtonWrapper }