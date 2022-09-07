/** @jsxImportSource @emotion/react */

const InputWrapper = ({children}: any) => {
	return (
		<div
			css = {{
				border: '1px solid #E7E7E7',
				borderRadius: '4px',
				fontWeight: '400',
				fontSize: '14px'
			}}
		>
			{children}
		</div>
	)
}

const DefaultInput = ({children, placeHolder, width}: {children: any, placeHolder: string, width: string}) => {
	return (
			<input placeholder={placeHolder}
				css={{
					width: width,
					height: '50px',
					border: '0',
					padding: '13px'
				}}
			/>
	)
}

const HideInput = ({children, placeHolder, width}: {children: any, placeHolder: string, width: string}) => {
	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<input placeholder={placeHolder}
				css={{
					width: width,
					height: '50px',
					border: '0',
					padding: '13px'
				}}
			/>
			<img src='/assets/images/common/icon_hide.svg'
				css={{
					paddingRight: '8px',
					cursor: 'pointer'
				}}
				alt='비밀번호 보기'
			/>
		</div>
	)
}

export {InputWrapper, DefaultInput ,HideInput}