export default function Container(props) {
    return (
        <div className={`
        ${props.align == 'left' ? 'mr-auto' : props.align == 'right' ? 'ml-auto' : props.align == 'center' ? 'mx-auto' : ''}
        ${props.size == 'expanded' ? 'pl-8 pr-8' : 'container pl-4 pr-4'}`}>
            {props.children}
        </div>
    )
}