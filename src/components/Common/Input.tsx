/** @jsxImportSource @emotion/react */

const InputWrappersChild: {[key: string]: {}} = {
	// InputWrapper의 자식 요소가 2개일때 (input, button)
	two: {
		display: 'flex',
    	justifyContent: 'space-between',
    	alignItems: 'center',
		border: '0'
	}
}
const InputWrapper = ({children, elements}: {children: any, elements: string}) => {
	return (
		<div
			css = {{
				border: '1px solid #E7E7E7',
				borderRadius: '4px',
				fontWeight: '400',
				fontSize: '14px',
			    fontFamily: 'Spoqa Han Sans Neo',
				...InputWrappersChild[elements]
			}}
		>
			{children}
		</div>
	)
}

interface TextInputProps {
	children: any, 
	placeHolder: string, 
	width: string,
	setInputState(a: string): void 
}
const TextInput = ({children, placeHolder, width, setInputState}: TextInputProps) => {
	return (
			<input placeholder={placeHolder} type='text'
				css={{
					width: width,
					height: '50px',
					border: '0',
					padding: '13px'
				}}
				onChange={(e)=>setInputState(e.target.value)}
			/>
	)
}

interface PwInputProps extends TextInputProps {
	show: string,
	setInputHide(a: string): void
}
const showContent: {[key: string]: string[]} = {
	see: ['text', 'see'],
	hide: ['password', 'hide']
}
const PwInput = ({children, placeHolder, width, show, setInputState, setInputHide}: PwInputProps) => {
	return (
		<div
			css={{
				width: width,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				border: '1px solid #E7E7E7',
				borderRadius: '4px',
			}}
		>
			<input placeholder={placeHolder} type={showContent[show][0]}
				css={{
					width: '100%',
					height: '50px',
					border: '0',
					padding: '13px'
				}}
				onChange={(e)=>setInputState(e.target.value)}
			/>
			<img src={`/assets/images/common/icon_${showContent[show][1]}.svg`}
				css={{
					paddingRight: '8px',
					cursor: 'pointer'
				}}
				alt='비밀번호 보기'
				onClick={() => {
					if (show==='hide') {
						setInputHide('see')
					} else {
						setInputHide('hide')
					}
				}}
			/>
		</div>
	)
}

export {InputWrapper, TextInput ,PwInput}