type CommentProps = {
    text?: string; //? significa ser opcional
}

export function Comment (props: CommentProps) {
    return (
        <div>
            {props.text}
        </div> 
    )
}