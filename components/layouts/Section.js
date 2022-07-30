export default function Section(props){
    return(
        <section className={
            `${props.verticalSpacing == 'small' ? 'pt-20 pb-20' : props.verticalSpacing == 'medium' ? 'pt-32 pb-32' : props.verticalSpacing == 'large' ? 'pt-40 pb-40' : ''} 
             ${props.background == 'primary' ? 'bg-gray-700': props.background == 'secondary' ? 'bg-great-blue-500' : ''}
             `}>
            {props.children}
        </section>
    )
}