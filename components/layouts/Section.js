export default function Section(props){
    return(
        <section className={`${props.spacing == 'small' ? 'pt-15 pb-12' : props.spacing == 'medium' ? 'pt-9 pb-9' : props.spacing == 'large' ? 'pt-12 pb-12' : ''} ${props.background == 'primary' ? 'bg-gray-700': props.background == 'secondary' ? 'bg-great-blue-500' : ''}`}>
            {props.children}
        </section>
    )
}