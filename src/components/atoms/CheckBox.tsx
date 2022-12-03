/** @jsxImportSource @emotion/react */

const checkbox: {[key: number]: string} = {
	0: 'deact',
	1 : 'act'
}

interface CheckBoxProps {
	children: React.ReactNode,
	active: number,
	margin: string,
	fontSize: string
}

const CheckBox = ({children, active, margin, fontSize}: CheckBoxProps) => {

	return (
		<>
			<p css={{
					width: '24px',
					height: '24px',
					background: `url(/assets/images/common/ck_${checkbox[active]}.svg) no-repeat`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					display: 'inline-block',
					verticalAlign: 'middle',
					marginRight: margin
			}}/>
			<span css={{
				fontSize: fontSize,
				fontWeight: '400',
				fontFamily: 'Spoqa Han Sans Neo',
				color: '#535353',
				display: 'inline-block',
				verticalAlign: 'middle'
			}}>{children}</span>
		</>
	)
}
CheckBox.defaultProps = {
	active: 0,
	margin: '8px',
	fontSize: '13px'
}

export default CheckBox