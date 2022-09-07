/** @jsxImportSource @emotion/react */

const checkbox: {[key: number]: string} = {
	0: 'deact',
	1 : 'act'
}

const CheckBox = ({children, active, margin}: {children: any, active: number, margin: string}) => {

	return (
		<>
				<p css={{
						width: '24px',
						height: '24px',
						background: `url(/assets/images/common/ck_${checkbox[active]}.svg) no-repeat`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						margin: '0',
						display: 'inline-block',
						verticalAlign: 'middle',
						marginRight: margin
				}}/>
				<span css={{
					fontSize: '13px',
					fontWeight: '400',
			    fontFamily: 'Spoqa Han Sans Neo',
					color: '#535353',
					display: 'inline-block',
					verticalAlign: 'middle'
				}}>{children}</span>
		</>
	)
}

export default CheckBox