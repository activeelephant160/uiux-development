export default function CartItem(props){
    return (
        <div>
            <p>{props.cartItem.name} {props.cartItem.price} {props.count}</p>
        </div>
    )
}