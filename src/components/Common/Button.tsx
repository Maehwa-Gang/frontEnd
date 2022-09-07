/** @jsxImportSource @emotion/react */

// 버튼 배경 색상
const bgColors: {[key: string]: string} = {
	default: "#5900CB",
	white: "#FFFFFF"
};
// 폰트 색상
const fontColors: {[key: string]: string} = {
	default: "#FFFFFF",
	white: "#000000"
};
// 버튼 border
const btnBorders: {[key: string]: string} = {
	default: "0",
	white: "1px solid #000000"
}

const Button = ({children, variant}: {children: any, variant: string}) => {
	return (
		<button
			css={{
				width: '100%',
				height: '50px',
				backgroundColor: bgColors[variant],
				color: fontColors[variant],
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '14px;',
				fontWeight: '400',
				borderRadius: '4px',
				border: btnBorders[variant],
				cursor: 'pointer'
			}}
		>
			{children}
		</button>
	);
}

export default Button