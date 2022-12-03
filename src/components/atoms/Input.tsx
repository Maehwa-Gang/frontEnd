/** @jsxImportSource @emotion/react */

const InputWrappersChild: {[key: string]: {}} = {
	// InputWrapper에 버튼 요소가 들어갈때
	button: {
		display: 'flex',
    	justifyContent: 'space-between',
    	alignItems: 'center',
		border: '0'
	}
}
const InputWrapper = ({children, elements}: {children: React.ReactNode, elements: string}) => {
	return (
		<div
			css = {{
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
InputWrapper.defaultProps = {
	elements: ''
}

interface TextInputProps {
	children: React.ReactNode, 
	name: string,
	placeHolder: string, 
	width: string,
	inputs: {},
	setInputsState({}): void 
}
const TextInput = ({children, name, placeHolder, width, inputs ,setInputsState}: TextInputProps) => {
	return (
			<input name={name} placeholder={placeHolder} type='text'
				css={{
					width: width,
					height: '50px',
					padding: '13px',
					border: '1px solid #E7E7E7',
					borderRadius: '4px',
				}}
				onChange={ 
					(e)=>{
						const {value, name} = e.target;
						setInputsState({
							...inputs,
							[name]: value
						})
					}
				}
			/>
	)
}
TextInput.defaultProps = {
	name: '',
	placeHolder: '',
	width: '100%',
	inputs: '',
	setInputsState: ''
}

interface PwInputProps extends TextInputProps {
	show: string,
	setInputHide(a: string): void
}
const showContent: {[key: string]: string[]} = {
	see: ['text', 'see'],
	hide: ['password', 'hide']
}
const PwInput = ({children, name, placeHolder, width, show, inputs, setInputsState, setInputHide}: PwInputProps) => {
	return (
		<div
			css={{
				width: width,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				position: 'relative'
			}}
		>
			<input name={name} placeholder={placeHolder} type={showContent[show][0]}
				css={{
					width: '100%',
					height: '50px',
					padding: '13px 30px 13px 13px',
					border: '1px solid #E7E7E7',
					borderRadius: '4px',
				}}
				onChange={ 
					(e)=>{
						const {value, name} = e.target;
						setInputsState({
							...inputs,
							[name]: value
						})
					}
				}
			/>
			<img src={`/assets/images/common/icon_${showContent[show][1]}.svg`}
				css={{
					cursor: 'pointer',
					position: 'absolute',
					right: '8px'
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
PwInput.defaultProps = {
	name: '',
	placeHolder: '',
	width: '100%',
	inputs: '',
	setInputsState: ''
}

export {InputWrapper, TextInput ,PwInput}